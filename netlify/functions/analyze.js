// Netlify serverless function to proxy AI API calls
// This avoids CORS issues by making requests from the server

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { post, apiKey, provider } = JSON.parse(event.body);

    // Validate inputs
    if (!post || !apiKey || !provider) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required parameters' })
      };
    }

    // Create the analysis prompt (properly escape the post text)
    const escapedPost = post.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
    
    const prompt = `Analyze the following social media post for factuality, political bias, and evidence quality. 
Perform web searches to verify any factual claims made in the post.

Post to analyze:
"${escapedPost}"

Provide your analysis in the following JSON format:
{
  "factuality_score": <number 0-100>,
  "political_lean": <number 0-100, where 0 is far left, 50 is center, 100 is far right>,
  "evidence_type": <number 0-100, where 0 is pure fact, 50 is mixed, 100 is pure opinion>,
  "summary": {
    "main": "<1-2 sentence overview>",
    "key_findings": "<detailed findings>",
    "factual_issues": "<any issues identified>"
  },
  "sources": [
    {
      "title": "<source name>",
      "url": "<source URL>",
      "description": "<brief description>",
      "credibility": "<high/medium/low>"
    }
  ],
  "methodology_note": "<explanation of analysis approach>"
}

Be objective and neutral. Focus on verifiable facts vs. opinions, evidence quality, and any political framing present.`;

    let response;
    
    if (provider === 'anthropic') {
      // Call Anthropic API
      response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 4096,
          messages: [{
            role: 'user',
            content: prompt
          }]
        })
      });

      if (!response.ok) {
        const error = await response.json();
        return {
          statusCode: response.status,
          body: JSON.stringify({ 
            error: error.error?.message || 'Anthropic API request failed' 
          })
        };
      }

      const data = await response.json();
      const content = data.content[0].text;
      
      // Extract JSON from response
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const analysis = JSON.parse(jsonMatch[0]);
        return {
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(analysis)
        };
      }
      
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to parse API response' })
      };
      
    } else if (provider === 'openai') {
      // Call OpenAI API
      response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4-turbo-preview',
          messages: [{
            role: 'user',
            content: prompt
          }],
          response_format: { type: 'json_object' }
        })
      });

      if (!response.ok) {
        const error = await response.json();
        return {
          statusCode: response.status,
          body: JSON.stringify({ 
            error: error.error?.message || 'OpenAI API request failed' 
          })
        };
      }

      const data = await response.json();
      const analysis = JSON.parse(data.choices[0].message.content);
      
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(analysis)
      };
      
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Unsupported provider' })
      };
    }
    
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: error.message || 'Internal server error' 
      })
    };
  }
};
