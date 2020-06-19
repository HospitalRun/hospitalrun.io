# HospitalRun website

[![Netlify Status](https://api.netlify.com/api/v1/badges/43e5071f-bdaf-43ec-be74-5bf464403034/deploy-status)](https://app.netlify.com/sites/hospitalrun-website/deploys) ![Jekyll](https://img.shields.io/badge/Jekyll-v3.8.7-red?style=flat&logo=jekyll) [![Total alerts](https://img.shields.io/lgtm/alerts/g/HospitalRun/hospitalrun.io.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/HospitalRun/hospitalrun.io/alerts/)

#### With Jekyll 3 it was necessary to switch from GitHub Pages to Netlify.

## Development

hospitalrun.io is made with Jekyll a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving on Netlify.

If you already have a full Ruby development environment with all headers and RubyGems installed, you can follow this simple step:

1. Run `bundle install` to install the dependencies
2. Run `bundle exec jekyll serve` to start the Jekyll server

## Directory structure

```
.
├── Gemfile
├── _config.yml
├── _data
│   ├── faq_page.yml
│   ├── future_roadmap.yml
│   ├── navigation.yml
│   ├── slider.yml
│   ├── sponsor.yml
│   ├── team_emeritus.yml
│   ├── team_members.yml
│   ├── testimonials.yml
│   └── trending_items.yml
├── _includes
│   ├── blog_and_items.html
│   ├── call_to_action.html
│   ├── cookie-consent.html
│   ├── enterprise.html
│   ├── features.html
│   ├── footer.html
│   ├── ga.js
│   ├── gtm.html
│   ├── gtm.js
│   ├── header.html
│   ├── help_area.html
│   ├── map.html
│   ├── page_header.html
│   ├── pagination.html
│   ├── post_loop.html
│   ├── sidebar.html
│   ├── slider.html
│   ├── social_share.html
│   ├── sponsor_area.html
│   ├── team_area.html
│   ├── team_area_emeritus.html
│   ├── testimonials.html
│   ├── text_area.html
│   ├── timeline_area.html
│   ├── tryit.html
│   └── why_area.html
├── _layouts
│   ├── blank.html
│   ├── default.html
│   ├── page.html
│   ├── post.html
│   └── tag_page.html
├── _posts
│   ├── 2014-08-25-coming-soon-hospitalrun-10.md
│   ├── 2014-08-25-hospitalrun-early-release-in-september-2014.md
│   ├── 2016-06-06-why-hospitalrun.md
│   ├── 2017-05-23-announcing-hospitalrun-1.0.0-beta.markdown
│   ├── 2017-06-03-wanted-discourse-manager.markdown
│   ├── 2018-02-26-roadmap-to-hospitalrun-1.0.markdown
│   ├── 2018-07-01-help-wanted-a-message-from-the-co-founders.markdown
│   └── 2019-08-07-a-new-beginning.md
├── assets
│   ├── css
│   ├── fonts
│   ├── images
│   ├── img #legacy folder
│   ├── js
│   └── scss #use this file to edit css
├── gulpfile.js
├── index.html
├── package.json
├── pages
│   ├── blog.html
│   ├── standards.html
│   ├── contacts.html
│   ├── contribute.html
│   ├── demo.html
│   ├── download.html
│   ├── faq.html
│   ├── features.html
│   ├── map.html
│   ├── privacy-policy.html
│   ├── roadmap.html
│   ├── team.html
│   └── tryit.html
├── robots.txt
└── search.json
```
