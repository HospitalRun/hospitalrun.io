HospitalRun website [![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/hospitalrun)
=====================

This project contains the current HospitalRun website.
Powered by [GitHub Pages](https://pages.github.com/) and [Jekyll](https://jekyllrb.com/docs/).

## Running / Development

If you want to manage HospitalRun website in a local web development environment, you'll be using [Ruby](https://www.ruby-lang.org/it/documentation/installation/). 

0. Install Jekyll and [bundler](https://jekyllrb.com/docs/ruby-101/#bundler) [gems](https://jekyllrb.com/docs/ruby-101/#gems)
```
gem install jekyll bundler
```
1. Clone the repository
```
git clone git@github.com:HospitalRun/hospitalrun.github.io.git
```
2. Change into your new directory
```
cd hospitalrun.github.io
```
3. Install missing gems
```
bundle install
```
4. Build the site and make it available on a local server
```
bundle exec jekyll serve
```

You should see something like:

```
Configuration file: /HospitalRun/hospitalrun.github.io/_config.ym
            Source: /HospitalRun/hospitalrun.github.io
       Destination: /HospitalRun/hospitalrun.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 1.795 seconds.
 Auto-regeneration: enabled for '/HospitalRun/hospitalrun.github.io'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

5. Browse to [http://localhost:4000](http://localhost:4000)

## Folder structure

```sh
hospitalrun.github.io/
├── _assets       # Mockup      
├── _includes     # HTML structure     
├── _layouts    
├── _posts        # Blog posts in Markdown
├── _sass
├── _site         # Generated pages from source
├── beta    
├── blog   
├── contribute   
├── css    
├── demo     
├── events
├── hack-week
├── img
├── lisbon
├── partners
├── team
└── tryit     
```
