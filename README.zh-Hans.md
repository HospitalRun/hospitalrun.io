# HospitalRun 网站

<div align="center">

[![dependabot](https://badgen.net/dependabot/dependabot/dependabot-core/?icon=dependabot)](https://github.com/HospitalRun/components)  [![MIT](https://badgen.net/github/license/HospitalRun/components)](https://github.com/HospitalRun/components/blob/master/LICENSE) [![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/hospitalrun)

</div>

这个项目包含着最近的HospitalRun网站.
由 [GitHub Pages](https://pages.github.com/) 和 [Jekyll](https://jekyllrb.com/docs/).支持

---

##运行 / 开发

如果你想在本地网络开发环境中管理这个网站，你将使用[Ruby](https://www.ruby-lang.org/it/documentation/installation/). 

0.安装 Jekyll 和 [bundler](https://jekyllrb.com/docs/ruby-101/#bundler) [gems](https://jekyllrb.com/docs/ruby-101/#gems)
```
gem install jekyll bundler
```
1. 克隆数据库
```
git clone git@github.com:HospitalRun/hospitalrun.github.io.git
```
2. 换到你的新目录中
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

你应该看到像这样的提示:

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

5. 切换到 [http://localhost:4000](http://localhost:4000)

## 折叠的结构

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

# 许可协议

根据 [MIT license](LICENSE).发布
