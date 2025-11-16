# Par Hill Research Blog

A modern, minimalist business blog built with Jekyll and hosted on GitHub Pages.

## 📚 Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Writing Blog Posts](#writing-blog-posts)
- [Customization](#customization)
- [Managing Content](#managing-content)
- [Newsletter Setup](#newsletter-setup)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Overview

This blog is built with:

- **Jekyll**: Static site generator (GitHub Pages native)
- **Modern & Minimalist Design**: Clean, professional appearance
- **Features**: Blog posts, categories, tags, search, newsletter signup
- **Fully Responsive**: Works on all devices

## Getting Started

### Prerequisites

To run this blog locally, you'll need:

- Ruby (version 2.7 or higher)
- Bundler gem
- Git

### Local Development

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/ngnrfsk/ngnrfsk.github.io.git
   cd ngnrfsk.github.io
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Run the local server**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View your site**: Open your browser to `http://localhost:4000`

The site will automatically rebuild when you make changes to files.

## Writing Blog Posts

### Creating a New Post

1. **Create a new file** in the `_posts` directory with this naming format:
   ```
   YYYY-MM-DD-title-of-post.md
   ```
   Example: `2024-03-20-my-new-article.md`

2. **Add front matter** at the top of the file:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2024-03-20
   categories: [Category1, Category2]
   tags: [tag1, tag2, tag3]
   excerpt: "A brief summary of your post that appears in listings."
   ---
   ```

3. **Write your content** using Markdown:
   ```markdown
   ## Introduction

   Your content here...

   ### Subheading

   More content with **bold** and *italic* text.

   - Bullet points
   - Are easy

   1. Numbered lists
   2. Work too

   > Blockquotes for emphasis

   ```code blocks```
   ```

### Markdown Formatting Guide

| Element | Syntax |
|---------|--------|
| Heading | `# H1`, `## H2`, `### H3` |
| Bold | `**bold text**` |
| Italic | `*italic text*` |
| Link | `[text](url)` |
| Image | `![alt text](image-url)` |
| Code | `` `inline code` `` |
| Code Block | ` ```language` ... ` ``` ` |
| Blockquote | `> quote` |
| List | `- item` or `1. item` |

### Best Practices for Posts

- **Use descriptive titles**: Clear, engaging titles improve SEO
- **Write compelling excerpts**: These appear in search results and listings
- **Choose relevant categories**: 1-3 categories per post
- **Add useful tags**: Help readers find related content
- **Include images**: Visual content increases engagement
- **Break up text**: Use headings, lists, and short paragraphs

### Categories vs Tags

- **Categories**: Broad topics (e.g., "Research Methods", "Industry Analysis")
  - Use 1-3 per post
  - Create a logical structure
  - Keep list manageable

- **Tags**: Specific keywords (e.g., "AI", "sustainability", "remote-work")
  - Use 3-7 per post
  - Help with searchability
  - Can be more numerous

## Customization

### Site Configuration

Edit `_config.yml` to customize your site:

```yaml
title: Par Hill Research
description: Your site description
url: "https://ngnrfsk.github.io"

author:
  name: Par Hill Research
  email: contact@parhillresearch.com

social:
  twitter: your-twitter-handle
  linkedin: company/your-company
  github: your-github-username
```

**Important**: After changing `_config.yml`, restart the Jekyll server.

### Updating Company Information

1. **About Page**: Edit `about.md`
2. **Contact Page**: Edit `contact.md`
3. **Footer**: Edit `_includes/footer.html`
4. **Social Links**: Update in `_config.yml`

### Styling Changes

CSS is in `assets/css/main.css`. Key variables at the top:

```css
:root {
    --color-primary: #2563eb;        /* Main brand color */
    --color-primary-dark: #1e40af;   /* Hover states */
    --color-text: #1f2937;           /* Main text */
    --color-text-light: #6b7280;     /* Secondary text */
    /* ... more variables */
}
```

Change these values to match your brand colors.

### Adding Your Logo

To add a logo to the header:

1. Add your logo image to `assets/images/logo.png`
2. Edit `_includes/header.html`:
   ```html
   <a href="{{ '/' | relative_url }}" class="logo">
       <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="{{ site.title }}">
   </a>
   ```

## Managing Content

### Updating Pages

Main pages are in the root directory:

- `index.md` - Homepage
- `about.md` - About page
- `contact.md` - Contact page
- `blog/index.html` - Blog listing page

Edit these files to update content.

### Categories and Tags Pages

These are automatically generated from your posts:

- `categories.html` - All categories
- `tags.html` - All tags

No manual updates needed!

### Navigation Menu

To modify the navigation, edit `_includes/header.html`:

```html
<ul class="nav-menu">
    <li><a href="/">Home</a></li>
    <li><a href="/blog/">Blog</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/contact/">Contact</a></li>
    <!-- Add more menu items here -->
</ul>
```

## Newsletter Setup

The newsletter signup form is in `_includes/newsletter.html`.

### Option 1: Formspree (Recommended for Beginners)

1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID
5. Update `_includes/newsletter.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: Mailchimp

1. Create a Mailchimp account
2. Create an embedded form
3. Replace the form code in `_includes/newsletter.html`

### Option 3: ConvertKit, Substack, etc.

Follow your provider's instructions for embedded forms and update `_includes/newsletter.html`.

## Deployment

### GitHub Pages (Automatic)

Your site is already set up for GitHub Pages!

1. **Make your changes**
2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update blog content"
   git push origin main
   ```

3. **Wait a few minutes** for GitHub to rebuild
4. **Visit your site**: `https://ngnrfsk.github.io`

### Checking Build Status

1. Go to your repository on GitHub
2. Click "Actions" tab
3. Check the latest workflow run

If there are errors, the Actions tab will show what went wrong.

### Custom Domain (Optional)

To use a custom domain like `www.parhillresearch.com`:

1. **Add a CNAME file** to your repo:
   ```
   www.parhillresearch.com
   ```

2. **Configure DNS** with your domain provider:
   - Add a CNAME record pointing to `ngnrfsk.github.io`

3. **Enable HTTPS** in GitHub repository settings

See [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for details.

## Troubleshooting

### Common Issues

#### Site not updating after push

- Check the Actions tab for build errors
- Ensure you pushed to the correct branch
- Wait 2-5 minutes for propagation
- Clear your browser cache (Ctrl+Shift+R)

#### CSS not loading

- Check that file paths start with `/assets/css/`
- Ensure `_config.yml` has the correct `baseurl`
- Try a hard refresh (Ctrl+Shift+R)

#### Posts not showing up

- Verify filename format: `YYYY-MM-DD-title.md`
- Check that date isn't in the future
- Ensure front matter is valid YAML
- Look for syntax errors in the post

#### Local server won't start

```bash
# Try these commands:
bundle install
bundle update
bundle exec jekyll serve --trace
```

### Getting Help

- **Jekyll Documentation**: [jekyllrb.com/docs](https://jekyllrb.com/docs/)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/en/pages)
- **Markdown Guide**: [markdownguide.org](https://www.markdownguide.org/)

## Quick Reference

### Common Tasks

**Create a new post:**
```bash
# Create file: _posts/YYYY-MM-DD-title.md
# Add front matter and content
# Commit and push
```

**Update site info:**
```bash
# Edit _config.yml
# Restart Jekyll server
```

**Change colors:**
```bash
# Edit assets/css/main.css
# Modify CSS variables
```

**Add a page:**
```bash
# Create pagename.md in root
# Add front matter with layout: page
# Add to navigation in _includes/header.html
```

## Tips for Success

1. **Write regularly**: Aim for a consistent publishing schedule
2. **Preview locally**: Always test posts before publishing
3. **Backup content**: Your Git repository serves as a backup
4. **Monitor analytics**: Consider adding Google Analytics
5. **Engage readers**: Respond to comments and feedback
6. **Update content**: Keep information current
7. **Optimize images**: Compress images before uploading
8. **Check mobile**: Test on different devices

---

## Next Steps

1. ✅ Remove or update the sample posts in `_posts/`
2. ✅ Customize the About and Contact pages
3. ✅ Update social media links in `_config.yml`
4. ✅ Set up newsletter integration
5. ✅ Add your company logo
6. ✅ Write your first real blog post!
7. ✅ Share your blog with the world

---

**Questions or need help?** Check the troubleshooting section or consult the Jekyll documentation.

Happy blogging! 🚀
