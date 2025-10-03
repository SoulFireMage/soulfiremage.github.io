# Deploying to Netlify

This guide will help you deploy your Hugo site with the Political Objectivity Tester to Netlify, which will solve the CORS issues you're experiencing with GitHub Pages.

## Why Netlify?

Netlify provides serverless functions that allow the Political Analysis Tool to work properly by making API calls from the server-side instead of the browser, avoiding CORS restrictions.

## Step-by-Step Deployment

### 1. Sign Up for Netlify

1. Go to [netlify.com](https://www.netlify.com/)
2. Click "Sign up" and choose "Sign up with GitHub"
3. Authorize Netlify to access your GitHub account

### 2. Import Your Site

1. Once logged in, click "Add new site" → "Import an existing project"
2. Choose "Deploy with GitHub"
3. Select your repository: `soulfiremage/soulfiremage.github.io`
4. Configure build settings:
   - **Build command**: `hugo --gc --minify`
   - **Publish directory**: `public`
   - **Functions directory**: `netlify/functions` (should auto-detect from netlify.toml)
5. Click "Deploy site"

### 3. Wait for Deployment

- Netlify will automatically build and deploy your site
- This usually takes 1-2 minutes
- You'll get a random URL like `https://random-name-123456.netlify.app`

### 4. (Optional) Custom Domain

If you want to keep using your GitHub Pages domain or another custom domain:

1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow Netlify's DNS configuration instructions

## How It Works

The setup includes:

1. **netlify.toml** - Configuration file telling Netlify how to build your Hugo site
2. **netlify/functions/analyze.js** - Serverless function that proxies API calls to Anthropic/OpenAI
3. **Updated frontend** - Now calls `/.netlify/functions/analyze` instead of calling APIs directly

## Testing

Once deployed:

1. Visit your Netlify URL
2. Navigate to the Political Objectivity Tester page
3. Enter a social media post, your API key, and click "Analyze Post"
4. The tool should now work without CORS errors!

## Troubleshooting

### If the function doesn't work:

1. Check the Netlify Functions logs:
   - Go to your site dashboard
   - Click "Functions" in the left sidebar
   - Click on the "analyze" function
   - View the logs for any errors

2. Common issues:
   - Invalid API key
   - API rate limits exceeded
   - Network connectivity issues

### If you see "404 - Function not found":

- Make sure the `netlify.toml` file is in the root of your repository
- Verify the `netlify/functions/analyze.js` file exists
- Redeploy the site

## Benefits of Netlify

- ✅ Serverless functions (solves CORS)
- ✅ Automatic HTTPS
- ✅ Continuous deployment from GitHub
- ✅ Free tier includes everything you need
- ✅ Built-in CDN for fast loading worldwide
- ✅ Easy rollbacks if something goes wrong

## Keeping Both Sites

You can keep both deployments running:
- GitHub Pages: `https://soulfiremage.github.io` (main site, but Political Tool won't work)
- Netlify: `https://your-site.netlify.app` (everything works, including Political Tool)

Or you can redirect your main domain to point to Netlify instead of GitHub Pages.

## Cost

Netlify's free tier includes:
- 100GB bandwidth/month
- 300 build minutes/month
- 125,000 serverless function requests/month
- Automatic SSL/HTTPS

This is more than enough for most personal sites.

## Need Help?

If you encounter any issues, check:
1. Netlify's build logs
2. Function logs
3. Browser console for errors

The tool should work perfectly once deployed to Netlify!
