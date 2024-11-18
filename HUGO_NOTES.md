# Hugo Site Maintenance Notes

## Quick Reference: Common Commands

### Adding New Content
1. Create new .md files in the appropriate directory:
   ```
   content/posts/your-new-post.md      # For blog posts
   content/stories/your-story.md       # For stories
   content/non-fiction/your-article.md # For non-fiction
   ```
   Hugo will automatically detect new .md files - no extra commands needed!

2. Include this front matter at the top of new files:
   ```yaml
   ---
   title: "Your Title Here"
   date: 2024-01-01  # Use current date
   draft: false
   ---
   ```

### Local Development
1. Start Hugo server (it will watch for changes):
   ```
   hugo server -D --port 8787
   ```
   This automatically detects any changes to content files!

2. View your site at: http://localhost:8787

### Deploying to Live Site
1. Add your changes:
   ```
   git add .
   ```

2. Commit with a descriptive message:
   ```
   git commit -m "Add new article about..."
   ```

3. Push to deploy:
   ```
   git push origin master
   ```

4. Wait a few minutes for deployment to complete

## File Structure Rules

1. Template Hierarchy:
   - Use index.html for home page (NOT home.html)
   - Keep only one template for each purpose
   - Avoid duplicate templates that could conflict

2. Configuration:
   - Use hugo.toml only (NOT config.toml)
   - Keep theme name exactly as 'soulfire' in hugo.toml

3. CSS Location:
   - Keep CSS in static/css only
   - Avoid duplicate CSS in assets directory

## Content Update Best Practices

1. Updating About Me (_index.md):
   - Keep front matter exactly as-is:
     ```yaml
     ---
     title: "Home"
     date: 2023-11-22
     draft: false
     ---
     ```
   - Only update content below front matter
   - Don't change the title or date

2. Section Pages (Stories, Non Fiction):
   - Avoid duplicate headings (they're already in the header)
   - Keep content clean and simple
   - Let templates handle the structure

## Build and Deployment

1. Local Development:
   - Use `hugo server -D --port 8787` for basic testing
   - For full site preview, use:
     ```
     hugo --buildDrafts --buildExpired --buildFuture
     ```

2. GitHub Actions:
   - Workflow uses master branch (not main)
   - Includes necessary build flags:
     - buildDrafts
     - buildExpired
     - buildFuture
   - Deployment may take a few minutes to complete

## Common Issues and Solutions

1. Zero Pages Built:
   - Check for template conflicts (home.html vs index.html)
   - Check for config conflicts (config.toml vs hugo.toml)
   - Check for CSS location conflicts
   - Use build flags (--buildDrafts etc.)

2. Missing Content:
   - Verify front matter is exactly correct
   - Check template hierarchy
   - Wait for deployment to complete

3. Template Issues:
   - Keep baseof.html as the master template
   - Other templates should extend baseof.html
   - Avoid duplicate templates with different names

## Health Check Script

The hugo-health-check.ps1 script can verify:
1. No template conflicts
2. No config conflicts
3. No CSS conflicts
4. All required files present

Run it whenever Hugo stops working to diagnose common issues.

## What Breaks the Site

1. Template Conflicts:
   - Having both home.html and index.html
   - Duplicate templates in different locations

2. Configuration Conflicts:
   - Having both config.toml and hugo.toml
   - Incorrect theme name in config

3. CSS Conflicts:
   - Having CSS in both assets and static directories
   - Incorrect CSS paths in templates

4. Content Issues:
   - Changed front matter in _index.md
   - Duplicate headings in content
   - Missing required files

## Recovery Steps

If the site breaks:
1. Run hugo-health-check.ps1 to identify issues
2. If needed, use:
   ```
   git checkout hugo
   git reset --hard origin/hugo
   git clean -fd
   ```
3. Make changes carefully, one at a time
4. Test locally with build flags
5. Push to master and wait for deployment

Remember: When in doubt, use the health check script and wait for deployments to complete.
