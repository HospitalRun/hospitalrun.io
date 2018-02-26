---
title: A Roadmap to HospitalRun 1.0
date: 2018-02-26 12:00:00 Z
categories:
- hospitalrun
- update
- roadmap
- releases
subtitle: What can you do to ship 1.0?
author: Joel Worrall
author_url: http://joelworrall.com
layout: post
---

Back in May of 2017, we announced that <a href="/blog/2017/05/announcing-hospitalrun-1.0.0-beta" target="hr2">HospitalRun 1.0 was available in beta</a>. Since then, we've had thousands of downloads of the <a href="/tryit" target="hr2">Electron app</a> and thousands more deploy the Docker image. There's been good and bad feedback, and throughout all of that, the entire original core team has undergone huge transitions in our day jobs (as in 2 of the 3 of us changed jobs), which has hampered the pace the project.

# Determining the 1.0 Feature Set
One of the key questions that we've had to get our hands around is the how much was enough to release 1.0. There's no end to the feature list that people would like to see in HospitalRun. So we've settled on the <a href="https://github.com/HospitalRun/hospitalrun-frontend/projects/5" target="hr2">following project</a> which focuses on ensuring the base platform is ready for an on going cycle continuous development, release, and improvement. 

Those features include:
<dl>
	<dt>Tracking and usage</dt>
	<dd>For the project to be sustainable, we need to find an appropriate, permissioned way to answer the question where and how is it being used? We also need this information as a source of understanding where else to invest. We need to do that in a transparent and ethical way that protects PII but offers (with consent) the project the vital information it needs to make HospitalRun better.</dd>
	<dt>Automated deployments and builds</dt>
	<dd>Each time code is pushed to the master branch, we need mechanisms to automatically build and release (and update) the Electron app and Docker images</dd>
	<dt>Dependency upgrades</dt>
	<dd>Cleaning up a handful of dependency and library upgrade issues as well as some key bug fixes</dd>
	<dt>A Handful of Oft-Requested Issues</dt>
	<dd>Features around managing logins and branding on an instance</dd>
</dl>
You can see the entire project <a href="https://github.com/HospitalRun/hospitalrun-frontend/projects/5" target="hr2">here</a>.

<div class="cta-row">
	<a href="https://github.com/HospitalRun/hospitalrun-frontend/projects/5" class="cta primary" target="hr2">1.0 Roadmap</a>
	<a href="https://github.com/HospitalRun/hospitalrun-frontend" class="cta secondary">View source on GitHub</a>
</div>

# May 31, 2018
Deadlines are helpful in providing focus. That's why we're challenging the community to get HospitalRun into a state that it can ship 1.0 by/before May 31, 2018. We won't be able to do it without your help; but with a small amount of expertise in some key areas, this is totally achievable.

# To Get Involved...
- Start by reviewing the <a href="https://github.com/HospitalRun/hospitalrun-frontend/projects/5" target="hr2">1.0 Roadmap project</a>.
- Then go to the <a href="https://github.com/HospitalRun/hospitalrun-frontend#contributing" target="hr2">README</a> and follow the setup instructions

Thanks in advance for everything you do to support the project.

[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com
