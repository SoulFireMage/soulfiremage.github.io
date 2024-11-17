# Personal Website with Hugo

This is a Hugo-based personal website that allows for easy content management through Markdown files.

## Local Development

1. Install Hugo (Extended version) if you haven't already:
   ```bash
   choco install hugo-extended
   ```

2. Run the local development server:
   ```bash
   hugo server -D
   ```

3. Visit http://localhost:1313 to see your site

## Adding Content

### Adding a New Blog Post
1. Create a new post:
   ```bash
   hugo new posts/my-new-post.md
   ```
2. Edit the file in `content/posts/my-new-post.md`
3. Set `draft: false` when ready to publish

### Adding Links
Edit `content/links/_index.md` to update your link collection.

## Deployment to GitHub Pages

1. Create a new repository named `yourusername.github.io`
2. Push this code to the `main` branch
3. GitHub Actions will automatically build and deploy your site

The included GitHub Actions workflow will:
- Build the site using Hugo
- Deploy to GitHub Pages
- Run on every push to the main branch

## File Structure

```
.
├── content/
│   ├── posts/          # Blog posts
│   └── links/          # Link collection
├── themes/
│   └── soulfire/       # Custom theme
└── static/
    ├── css/            # Stylesheets
    └── images/         # Images and assets
```

## Theme Customization

The custom 'soulfire' theme is located in `themes/soulfire/`. Key files:

- `layouts/_default/baseof.html`: Main template
- `layouts/_default/single.html`: Single post template
- `layouts/_default/list.html`: List template
- `static/css/main.css`: Main stylesheet

## Writing Content

All content is written in Markdown. Some examples:

### Front Matter
```yaml
---
title: "My Post Title"
date: 2023-11-22
draft: false
---
```

### Markdown Examples
```markdown
## Heading

Regular paragraph text

- Bullet point
- Another point

1. Numbered list
2. Second item

[Link text](URL)

![Image alt text](image-url)

\`\`\`fsharp
// Code block
let hello = "Hello, World!"
\`\`\`
