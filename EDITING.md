# Editing the site from the browser

Two ways to edit, both of which commit to `master` so the normal Hugo GitHub Action rebuilds the site (usually live in 1–2 minutes).

## 1. Site editor (`/admin/`), WordPress-style

https://starship-whisperer.com/admin/ runs [Sveltia CMS](https://sveltiacms.app/en/docs), a browser app with no server of its own. It edits the Markdown in this repo through the GitHub API.

**One-time sign-in (per browser):**
1. Create a fine-grained token at https://github.com/settings/personal-access-tokens/new
   - Repository access: *Only select repositories* → `soulfiremage.github.io`
   - Permissions → Repository → **Contents: Read and write**
   - Pick an expiry you're happy with (you'll redo this step when it expires).
2. Open `/admin/`, choose **Sign In Using Access Token**, and paste the token.
   The browser keeps you signed in after that.

Ignore the **Sign In with GitHub** button. It needs an OAuth relay server, which this site doesn't run.

A live word count appears at the bottom right while you type in the body (code, links, HTML and shortcodes are not counted).

The body editor opens in raw Markdown, because posts contain inline HTML, shortcodes and LaTeX that the rich-text mode could mangle. You can switch modes for each edit. Uploaded images go to `static/images/` and are served from `/images/...`.

## 2. Edit buttons on every page

After you've opened `/admin/` once in a browser, pages on the site show a small button bar at the bottom left:

- **✎ Edit here**: opens that page in the site editor.
- **GitHub**: opens that page's Markdown in GitHub's own web editor, using your normal github.com login (no token needed).
- **+ New post**: opens a blank post in the site editor.

Ordinary visitors never see the bar. Browsers remember the bar (and your editor sign-in) separately for each web address, so after a domain change you need to open `/admin/` once on the new address. To toggle it by hand, add `?edit=on` or `?edit=off` to any page URL.

## Notes
- The deploy workflow builds with `--buildDrafts`, so `draft: true` posts are still published on GitHub Pages.
- To add a section to the editor, add a collection in `static/admin/config.yml`. The button bar logic is in `layouts/_partials/extend_head.html`.
