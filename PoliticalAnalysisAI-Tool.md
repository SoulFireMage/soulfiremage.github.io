# Political Objectivity Tester - Project Specification

## Overview
A web-based tool for analyzing social media posts to assess factuality, political bias, and evidence quality. The interface provides objective, neutral analysis powered by AI with web search capabilities.

## Core Features

### 1. Input Section
- **Post Input**: Large textarea for pasting social media content
- **API Key Input**: Secure password field for user's AI API key (Anthropic, OpenAI, etc.)
- **Analyze Button**: Primary action to trigger analysis

### 2. Analysis Display

#### Visual Metrics (3-column grid)
1. **Factuality Score**
   - Radial progress indicator (0-100%)
   - Color coding: Red (0-33%), Yellow (34-66%), Green (67-100%)
   - Label describing factual basis level

2. **Political Lean**
   - Horizontal progress bar showing Left-Right spectrum
   - Center-aligned with labels on both ends
   - Neutral gray at 50%, colors shifting toward ends

3. **Evidence Type**
   - Horizontal progress bar showing Fact-Opinion spectrum
   - Similar styling to Political Lean
   - Helps distinguish verifiable claims from subjective commentary

#### Analysis Summary Card
- Clean, readable summary in plain language
- Structured sections:
  - Main finding (1-2 sentences)
  - Key findings (bullet points or paragraph)
  - Factual issues identified
  - Context and nuance

#### Verified Sources Section
- List of 3-5 credible sources
- Each source displays:
  - Credibility badge (High/Medium/Low)
  - Source name and description
  - Clickable link to external resource
  - Hover effect for interactivity

#### Methodology Note
- Alert box explaining the analysis approach
- Emphasizes objectivity and evidence-based assessment
- Clarifies that scores reflect factuality, not political agreement

## Technical Requirements

### Frontend
- **Framework**: Hugo-compatible HTML/CSS/JavaScript
- **Styling**: Tailwind CSS v3 + DaisyUI v5
  - Use semantic color classes (primary, secondary, accent)
  - Responsive design for mobile and desktop
  - Light/dark mode support via DaisyUI themes
- **Components**:
  - Form controls (textarea, input, button)
  - Progress indicators (radial and linear)
  - Cards with hover effects
  - Alert boxes
  - Loading states

### Backend/API Integration
- **AI Provider**: User-supplied API key (Anthropic Claude, OpenAI GPT, etc.)
- **Required Capabilities**:
  - Text analysis
  - Web search for fact-checking
  - Structured response generation
- **API Call Flow**:
  1. Accept post text and API key from user
  2. Send to AI with specific prompt for analysis
  3. AI performs web search to verify claims
  4. AI returns structured analysis (JSON format preferred)
  5. Frontend parses and displays results

### Analysis Prompt Structure
The AI should be instructed to:
1. Identify specific factual claims vs. opinions
2. Search web for verification of factual claims
3. Assess political framing and bias indicators
4. Rate factuality (0-100 scale)
5. Position on political spectrum (Left 0-50-100 Right)
6. Classify evidence type (Fact 0-50-100 Opinion)
7. Provide neutral, objective summary
8. List 3-5 credible sources with credibility ratings

## UI/UX Guidelines

### Design Principles
- **Neutrality**: Avoid partisan language or imagery
- **Clarity**: Simple, clean layout with good whitespace
- **Transparency**: Explain methodology and limitations
- **Accessibility**: High contrast, readable fonts, semantic HTML

### Color Usage
- **Primary**: Analysis results, main actions
- **Secondary**: Supporting information, medium-priority sources
- **Warning/Error**: Low factuality scores
- **Success**: High factuality scores
- **Neutral**: Base colors for cards and backgrounds

### Spacing & Layout
- Generous padding (p-4 to p-6)
- Consistent gaps (gap-4 to gap-6)
- Card-based layout for content sections
- Grid system for metrics (3-column on desktop, stack on mobile)

### Interactive Elements
- Button hover states
- Loading spinner during analysis
- Smooth transitions
- Clear focus states for accessibility

## Implementation Steps for Hugo

### 1. Create Hugo Page
```markdown
---
title: "Political Objectivity Tester"
date: 2025-10-03
draft: false
---
```

### 2. Add Tailwind/DaisyUI
- Include CDN links in page or site-wide
- Or install via npm for Hugo Pipes

### 3. HTML Structure
```html

  
  
...

  
  
  

```

### 4. JavaScript Functionality
```javascript
// Handle form submission
// Make API call to AI provider
// Parse response
// Update DOM with results
// Handle errors gracefully
```

### 5. API Integration Options
- **Client-side**: Direct API calls (requires CORS support)
- **Server-side**: Hugo serverless function or external backend
- **Hybrid**: Use Hugo forms + external processing service

## Security Considerations
- Never log or store user API keys
- Use HTTPS for all API communications
- Sanitize user input before sending to AI
- Implement rate limiting if using shared backend
- Add disclaimer about API key security

## Error Handling
- Invalid/missing API key: Clear error message
- API call failure: Retry option + error explanation
- Empty post input: Validation message
- Rate limit exceeded: Inform user, suggest waiting
- Network errors: Offline-friendly messaging

## Future Enhancements
- Save analysis history (local storage)
- Compare multiple posts side-by-side
- Export results as PDF/image
- Browser extension version
- Additional bias dimensions (Authoritarian-Libertarian, etc.)
- Source credibility scoring algorithm
- Fact-check database integration

## Sample Data Structure

### API Response Format (JSON)
```json
{
  "factuality_score": 35,
  "political_lean": 75,
  "evidence_type": 30,
  "summary": {
    "main": "Brief overview...",
    "key_findings": "Detailed findings...",
    "factual_issues": "Issues identified..."
  },
  "sources": [
    {
      "title": "BBC News - UK Politics",
      "url": "https://www.bbc.co.uk/news",
      "description": "Official coverage...",
      "credibility": "high"
    }
  ],
  "methodology_note": "This analysis evaluates..."
}
```

## Deployment Checklist
- [ ] Hugo page created and configured
- [ ] Tailwind + DaisyUI included
- [ ] Form validation implemented
- [ ] API integration tested
- [ ] Error handling verified
- [ ] Mobile responsive design checked
- [ ] Accessibility audit completed
- [ ] Security review done
- [ ] Documentation written
- [ ] User testing conducted

## License & Attribution
Specify open-source license if applicable. Credit any third-party libraries or APIs used.

---

**Note**: This specification provides a foundation for implementation. Adjust based on your specific Hugo setup, hosting environment, and technical requirements.