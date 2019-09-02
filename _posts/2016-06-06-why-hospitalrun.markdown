---
title: Why HospitalRun?
date: 2016-06-06 22:00:00 Z
categories:
  - hospitalrun
layout: post
author: Joel Worrall
author_url: http://joelworrall.com
---

<i>Note: [Click here](http://goo.gl/NCJDnJ) for the Google Doc justification paper titled, "Why HospitalRun?"</i>

Since this open source project really started to gather momentum in December 2015 after a posting on [Hacker News](https://news.ycombinator.com/item?id=10675275), I've been asked several times to talk about the genesis of HospitalRun and why a few people working for an under-resourced health care charity would be foolish enough to start yet another open source EMR/HIS project.

This article tries to answer that question: Why HospitalRun?

# 2012: In Kenya

The journey that led to HospitalRun started in 2012 at a [CURE International](http://cure.org) hospital in [Kijabe, Kenya](http://cure.org/kenya).

Like all CURE hospitals, [CURE Kenya](http://cure.org/kenya) primarily treats children with surgically correctible conditions. Things like clubfoot, bowed legs, cleft lip and palate, and other conditions that are commonly addressed by public health initiatives in areas of the world with more resources - all these are the primary mission of CURE. Issues of [essential surgery](http://www.essentialsurgery.com/) and the kids CURE treats tend to be on the bottom of priority lists in the resource-scarce environments of low-to-medium income countries (commonly referred to as "the developing world").

Back in April 2012, I was in Kenya to check out the effectiveness of a [real-time patient reporting platform](http://cure.org/curekids) CURE had just released, to see how our embedded bloggers were performing their day-to-day job.

That's when I saw this.

<p>
  <img src="/img/kenya_medical_records.jpg" width="90%" /><br/>
  <em>The medical record system at the CURE hospital in Kenya, 2012</em>
</p>

Not surprisingly, this was the medical records system for a hospital that had been providing life-changing treatment to children throughout Kenya since 1998. In and of itself, paper-based records in low resource environments are <i>not</i> that surprising, and there are plenty of commercial and open source projects that have tried (one might argue unsuccessfully) to <i>truly</i> solve the issue of moving health management away from paper record-keeping to electronic systems.

However, it was when I saw this that I knew we had an even bigger problem to solve.

<p>
  <img src="/img/kenya_medical_records_2.jpg" width="90%" /><br/>
  <em>Doctors and clinicians at CURE's hospital in Kenya, loading medical record bins onto an ambulance that is headed out on a mobile clinic</em>
</p>

You see, that day, I was heading <i>off campus</i> with a team from the CURE hospital to conduct what we refer to as a "mobile clinic."

Because CURE provides such specialized care, we attract and treat patients from throughout the country, 3-4 times per year and in regions throughout Kenya, a team from the hospital will visit an area 6-8 hours away from the hospital to see hundreds of children and their parents in one day. Some of these children are patients receiving long-term follow-up care. The majority are parents desperate to find a cure for their little boy or girl, bringing them to a CURE clinic to learn whether or not we can help.

I watched as our dedicated staff organized a clinic of 400 children and their parents, digging through boxes of medical records, often loosing valuable time and energy, trying to assign new patients to new charts, asking patients to shuffle their medical records through the queues, and sometimes loosing track of who had what data. The team did (as always) an admirable job, and at the end of the clinic, dozens of children had been scheduled for life-changing surgeries... but it was clear there was a problem.

Experiencing that mobile clinic helped me <i>feel</i> that problem. This wasn't just an EMR (electronic medical record) problem. This was an offline problem.

## An Offline Problem

As a software professional, I knew that the right, long-term decision for any software solution was to go to the cloud, but this environment presented two big challenges - challenges that (heretofore) have dissuaded technology professionals from moving to a cloud solution for low resource parts of the world:

1. Unreliable infrastructure: The reality is that Internet reliability globally continues to improve, but it is far from ubiquitous and anything but reliable.
2. Disconnected environments: health providers like CURE have patients that may live far enough away from the facility to require travel. Therefore, having the option to carry medical records outside of the facility was a real need.

When I got to my office in Pennsylvania, I shared what I saw, and (subsequently) my colleague [John](http://twitter.com/jkleinsc) started working with a design paradigm called [Offline First](http://alistapart.com/article/offline-first).

# 2012: An Offline First Database

The core concept of Offline First is simple: stop treating the lack of connectivity in a web-based app as an error condition. Instead, make the application resilient to interruptions in connectivity. Native frameworks and modern browsers as well as many modern web frameworks provide tools to make this not only possible but increasingly transparent to not only the end user but also the application developer.

So, we started working with the technology. That <i>did not</i> mean we wanted to start an open source project. Far from it.

Back in 2012, we never had the interest or inclination to try to tackle an entire hospital information system, led alone start an open source project. Instead, we decided to explore offline first principles in service to a challenging-but-smaller problem, a research database need we had for a program inside CURE called [CURE Hydrocephalus](http://cure.org/hydrocephalus).

<p>
  <img src="/img/hydrodb.png" width="90%" /><br/>
  <em>Reviewing patient records in the CURE offline first hydrocephalus database - an offline first web application built for Chrome</em>
</p>

By Fall 2012, that research database was deployed in 14 countries, primarily in subSaharan Africa. We learned a lot from that project, but now we needed to address the larger issue of a complete HIS (hospital information system) solution.

# 2013: Evaluating Options

Like all good programmers, we're lazy - disinterested in <i>re</i>-solving problems. We already had too much work to do supporting CURE, and if there were appropriate, affordable solutions out there for our HIS requirements, we would have <i>loved, loved, loved</i> to have found one.

We just happen to work at the intersection of two sectors that needs a lot of innovation: <b>non-profit and health care</b>.

So, we spent 2013 evaluating technologies and trying to find a solution that could meet the needs of the CURE International network.

We knew that:

- We were committed to the cloud: not just because of total cost-of-delivery or the need to deliver changes uniformly and rapidly but also because we needed to be able to provide complete remote administration and monitoring.
- We were committed to web technology: installing and managing software in the field wasn't an option.
- We wanted a solution focused on clinical and administrative usability: This was more than just "liking the way it looks." When it comes to user experience, we needed a solution that addressed the very real training and [even patient safety issues](https://medium.com/tragic-design/how-bad-ux-killed-jenny-ef915419879e#.66xdc7kfn) that a lack of attention to UI and UX can cause.
- We needed a system that could deal with our low-resource requirements: rather than trying to jam our needs into a Western health care model, we needed the flexibility to keep things as simple and intuitive as possible.
- We needed a solution that allowed us to carry records outside the hospital walls: our delivery model demanded it. Thus the offline first considerations were a given.
- We needed to be able to support it: we actually pursued at least two potential offers of "free" licensing on commercial products. Each time, it came down to the same problems. We weren't convinced that we could successfully implement, and we couldn't afford it - even for "free." The hardware costs were significant and even if those systems were donated, we couldn't attract or retain the talent needed to keep those systems running well locally at the hospitals (to say nothing of the not-very-cloud-friendly nature of many of those offerings).

And, we knew that the tide was turning with regards to digital health.

<p>
  <img src="/img/2015-Year-in-Review_Website_Updated.0011-1200x625.jpeg" width="90%" alt="2015 analysis of investment in digital health solutions by Rock Health" /><br>
  <em><a href="https://rockhealth.com/reports/digital-health-funding-2015-year-in-review/" target="_blank" rel="noopener" >Rock Health's 2015 analysis</a> demonstrates a significant trend in the rise of digital health solutions (and therefore investment)</em>
</p>

So, in early 2014, we re-examined the work we had done with our offline first hydrocephalus research database and determined to take what we learned there and apply it to a brand new effort.

# 2014: Starting HospitalRun

But if we were going to start over, we were convinced we needed to go open source. The only sustainable project would be one that was useful for thousands of potential facilities - not just the CURE International network.

So, we set out to seriously examine the existing open source health projects. Many of them had done some good work, but for a variety of reasons - either because of a lack of ability to influence the community, the very clear lack of focus on UX, or the practical need we would have to completely rearchitect their undelying technology - we were faced with the option we didn't want: starting a new project.

<p>
  <img src="/img/screenshot-mock-sm.jpg" alt="HospitalRun" width="90%" /><br/>
  <em>The HospitalRun project was unsuspiciously launched in 2014 at a piece of <a href="https://www.google.com/maps/place/701+Bosler+Ave,+Lemoyne,+PA+17043/data=!4m2!3m1!1s0x89c8c199d4c8f2b1:0x78b1c766ad2e2f6e?sa=X&ved=0ahUKEwiK28WYtqHNAhWDGD4KHZZaDxkQ8gEIGzAA" target="_blank" rel="noopener" >D-level commercial real estate in Lemoyne, Pennsylvania</a>.</em>
</p>

## Quantifying the unaddressed need

We had a sense that if CURE International - a network of hospitals that was receiving some source of funding from the US, Canada, and the UK - was struggling with this issue, that there could be thousands of other facilities in low-to-medium income countries with the same problems. However, validating that sense with facts was harder than you might think. There seemed to be no clear research answering the question: how many hospitals <i>are</i> in low-to-medium income countries?

So, we did some research ourselves.

We put together a mashup of [UN](http://goo.gl/fKbG9k) and [WHO](http://goo.gl/WlZrgl) data in order to try to estimate how many hospitals are in low-to-medium income countries. The result of that work is published [here](http://goo.gl/38MVD0), and we referenced our estimate, nearly 14,000 hospitals in low-to-medium income countries, in our first justification paper, titled ["Why HospitalRun?"](http://goo.gl/NCJDnJ) <i>Side note: A year later, I was speaking with another CTO and contributor to HospitalRun about that research and was told that our numbers were way off - that we completely underestimated.</i>

The bottom line is that there's a huge, unaddressed need.

So in early 2014, we launched the HospitalRun open source project, choosing [Ember](http://emberjs.com) and [PouchDB](https://pouchdb.com/) for the front end project and [Node](https://nodejs.org/) and [CouchDB](http://couchdb.apache.org/) for the back end.

In September of that year, we did the first early (probably too early) deployment of the system at the CURE hospital in the [Philippines](http://cure.org/philippines), and we're scheduled to release a 1.0 by or before April 1, 2017.

# Goals for HospitalRun

But we were not interested in running the favour-of-the-year open source health project, merely choosing today's "cool tools" and fading out in 3-4 years. Instead, we've worked to establish very specific goals for why we're doing what we're doing. Those are:

## 1) Building specifically for low-to-medium income countries

This is about more than supporting internationalization (which HospitalRun does). Building software for the developing world is about embracing the realities of lower-resource settings as a driver - rather than a constraint - for innovation. When you can't health-care-consultant your way out of a problem, it reframes the opportunity to produce a truly useful solution that is focused on meeting the needs (technical, business, and otherwise) of those environments.

<p>
  <img src="/img/CURE_Map_June15-1.png" width="90%" alt="Environments like the places CURE and thousands of other health care providers serve can't afford Western solutions on multiple levels" /><br/>
  <em>Low-to-medium income countries need a solution focused on their needs rather than porting the constraints of Western medicine to the majority world</em>
</p>

## 2) Making Usability the #1 requirement

The lack of attention to user experience or even the user interface in electronic health solutions has generated a track record of confusion and cost, as high-paid consultants are needed to enforce less-than-optimal solutions onto teams. The settings for which we're building have no such conquistador-like luxury, where teams of health care IT professionals can enforce change. In many of these settings, there may even be little financial incentive to enforce record-keeping policy.

Yet rather than lament those constraints, we're choosing to see these settings as an opportunity to focus on the needs of the user(s) - clinical and administrative. So we set out to build a solution that people might even (...dream with me) enjoy using, and we brought UX expertise into the core maintainer team of the project to help hold us accountable to producing the kind of solution that strives to delight users.

<p>
  <img src="/img/burning-ships.jpg" width="50%" alt="Cortes burns the ships on the coast of Mexico" /><br/>
  <em>Hiring a team of highly-paid/highly-qualified consultants because you've "burned the ships" on your decision to implement an EMR/HIS isn't a realistic option in low-to-medium income health care  environments  </em>
</p>

But we didn't want to limit our usability goals to just clinical or even administrative users. What if we could build a system that was easy to setup, administer, and upgrade? And what if we could build an open source project that was... wait for it... easy to contribute to? (No more spending a day polishing your secret decoder ring to make a contribution.) Could we build a system that allows someone to make a meaningful contribution in one 8-hour day?

That's what we set out to do with usability: make HospitalRun the most ambitious AND delightful open source health project in the world - for users, administrators, and contributors. We still think we have a long way to go, but that's the goal - making usability #1.

## 3) Solving for Time

A recent survey of Western health care practitioners found that [20% of their time](http://goo.gl/293J6t) was being spent on administrative tasks that (arguably) had little to do with improving the quantity or quality of care being provided. Much of that time was caused by - rather than improved by - the software they were using.

<p>
  <img src="/img/11clock.png" style="max-width:200px" alt="11 o'clock, tick tock" /><br/>
  <em>"How are we saving time for users of HospitalRun?" is one of the primary considerations in any feature.</em>
</p>

With HospitalRun, we saw the opportunity to give health care professionals in exceptionally constrained environments back the only resource we can't make more of: their time.

Going forward, we're purposing to metric the system to not only inform requirements but also to baseline the time it takes to accomplish common tasks so that future feature development can seek to improve on those measurements. The result of every feature should be time given back to more doctors, nurses, and administrators so that their attention can go where it should - on the patients and families they serve.

## 4) Embracing Offline First

Not only because offline first met our "carry records into the field" requirement but also because we believe that it's just the right thing to do with modern business applications, we wanted to make offline first a core principle of the project from the beginning.

<p>
 <img src="/img/ALA386_designoffline.jpg" alt="offline first" style="max-height:300px" /><br/>
 <em>HospitalRun embraces the principles of offline first</em>
</p>

## 5) More than a Download

Deploying software isn't like installing a refrigerator that you spec out, buy, plug in, walk away from, and expect to work perfectly until the compressor dies. This is clear to the business world, as the rise of software as a service models are driving home not only the effectiveness but the lower total cost of ownership in signing on to a service that has ongoing, continuous improvement and maintenance.

Yet far too often (and even particularly today with open source projects), we treat software solutions like a utility that is installed once and expected to meet all our needs until the day it is replaced (much like a kitchen appliance). The reality couldn't be further from the truth. Innovation and support need the opportunity for continuous upgrades, and HospitalRun is committed to a future where the HospitalRun code is only a part of the overall open source project.

We're building an open source service.

<p>
 <img src="/img/software-refrigerator.jpg" alt="software isn't a refridgerator" style="max-height:300px" /><br/>
 <em>Software isn't a refrigerator, so HospitalRun is building a service</em>
</p>

## 6) Partnering to Make a Difference

It seems to us that HospitalRun:

- as an open source project,
- backed / incubated by an international NGO,
- focused on issues of global health and data, and
- committed to modern, cloud technologies

holds a tremendous opportunity to partner the NGO, government, and tech sectors in a problem that has mutual interest and benefit.

It's almost as if, by <b>working together</b>... we just might have a fighting chance of changing the world.

Moreover, through initiatives like our [Hack Day](/lisbon) events, we're seeing tremendous opportunity to engage those with programming, design, devops, project management, and marketing backgrounds to use their true gifts in service to a cause that has utility, opportunity, and innovative technology.

# Now what?

<iframe src="https://player.vimeo.com/video/168893257" width="400" height="225" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<i>Thanks to our friends at [New Relic](http://newrelic.com) for contributing this video</i>

One of the things we're putting a lot of energy into for HospitalRun is the usability experience for contributors. Contributors are the fuel that make any open source project like this possible, and we need contributors in coding, design, user experience, marketing, project management, product requirements, and devops.

If you think you'd be interested in getting involved in the project, we'd love to have you start by [joining our Slack](https://hospitalrun-slackin.herokuapp.com/). At minimum, share this post with someone or someones to help us meet more people who might be interested in [contributing](/contribute).

# And Finally, a HUGE Thank you

To date, dozens of people have contributed to what's been accomplished already with HospitalRun, and hundreds more are actively tracking with the project. On behalf of the entire HospitalRun core team as well as the kids and families we're serving together - to everyone who's taken part in the project in these early days, for those who will contribute in the weeks, months, and years to come, and most-importantly for the people who make HospitalRun a regular and recurring part of their contribution to the world, thank you!

There are literally thousands of children, mothers, fathers, grandparents, and the like who's lives can, have, and will be impacted... perhaps even saved... by all of us working diligently and collaboratively on this project.
