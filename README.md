# HospitalRun Website

<div align="center">

[![dependabot](https://badgen.net/dependabot/dependabot/dependabot-core/?icon=dependabot)](https://github.com/HospitalRun/components)  [![MIT](https://badgen.net/github/license/HospitalRun/components)](https://github.com/HospitalRun/components/blob/master/LICENSE) [![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/hospitalrun)

</div>

This project contains the current HospitalRun website.
Powered by [GitHub Pages](https://pages.github.com/) and [Jekyll](https://jekyllrb.com/docs/).

---

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

<hr />

# Behind HospitalRun

## Hosted by

[<img src="https://github.com/openjs-foundation/cross-project-council/blob/master/logos/openjsf-color.png?raw=true" width="120px;"/>](https://openjsf.org/projects/#atlarge)

## Sponsors

[![Sponsors](https://opencollective.com/hospitalrun/sponsors.svg?width=890)](https://opencollective.com/hospitalrun/contribute/sponsors-336/checkout) 

## Backers

[![Backers](https://opencollective.com/hospitalrun/backers.svg?width=890)](https://opencollective.com/hospitalrun/contribute/backers-335/checkout) 

## Lead Maintainer
[<img src="https://avatars2.githubusercontent.com/u/1620916?s=460&v=4" width="100px;"/><br /><sub><b>Maksim Sinik</b></sub>](https://github.com/fox1t)<br />

## Core Team

|[<img src="https://avatars1.githubusercontent.com/u/11684?s=460&v=4" width="100px;"/><br /><sub><b>Travis Boudreaux</b></sub>](https://github.com/tjboudreaux) | [<img src="https://avatars3.githubusercontent.com/u/25089405?s=460&v=4" width="100px;"/><br /><sub><b>Stefano Casasola</b></sub>](https://github.com/irvelervel) | [<img src="https://avatars3.githubusercontent.com/u/3400442?s=460&v=4" width="100px;"/><br /><sub><b>Michael J Feher</b></sub>](https://github.com/PhearZero) | [<img src="https://avatars1.githubusercontent.com/u/25009192?s=460&v=4" width="100px;"/><br /><sub><b>Riccardo Gulin</b></sub>](https://github.com/bazuzu666) | [<img src="https://avatars0.githubusercontent.com/u/6388707?s=460&v=4" width="100px;"/><br /><sub><b>Matteo Vivona</b></sub>](https://github.com/tehKapa) |
|---|---|---|---|---|


## Medical Supervisor 

[<img src="https://avatars2.githubusercontent.com/u/24660474?s=460&v=4" width="100px;"/><br /><sub><b>M.D. Daniele Piccolo</b></sub>](https://it.linkedin.com/in/danielepiccolo)<br />

## Contributors

[![Contributors](https://opencollective.com/hospitalrun/contributors.svg?width=960&button=false)](https://github.com/HospitalRun/hospitalrun-frontend/graphs/contributors) 

## Founders

<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/609052?s=460&v=4" width="100px;"/><br /><sub><b>John Kleinschmidtr</b></sub>](https://github.com/jkleinsc) | [<img src="https://avatars0.githubusercontent.com/u/929261?s=400&v=4" width="100px;"/><br /><sub><b>Joel Worrall</b></sub>](https://github.com/tangollama)  | [<img src="https://avatars0.githubusercontent.com/u/1319791?s=460&v=4" width="100px;"/><br /><sub><b>Joel Glovier</b></sub>](https://github.com/jglovier)  |
|---|---|---|

# License

Released under the [MIT license](LICENSE).
