---
layout: post
title:  "Why HospitalRun?"
date:   2016-06-03 12:00:00
author: Joel Worrall
author_link: http://twitter.com/tangollama
author_gravatar: 0d10d15c611fd03785dc705acf40e35b
categories: hospitalrun
---

Since this open source project really started to gather momentum in December 2015 after a posting on [Hacker News](https://news.ycombinator.com/item?id=10675275), I've been asked several times to talk about the genesis of the project and why a few people working for an under-resourced health care charity would be foolish enough to start yet another open source EMR/HIS project. 

This article tries to answer that question: Why Hospital?

# 2011: In Kenya
The journey that led to HospitalRun started in 2011 at a [CURE International](http://cure.org) hospital in [Kijabe, Kenya](http://cure.org/kenya). 

Like all CURE hospital, CURE Kenya primarily treats children with surgically correctible conditions. Things like clubfoot, bowed legs, cleft lips and palette, and other conditions that are commonly addressed in areas of the world with more resources for public health initiatives. The kids CURE treats tend to be on the bottom of the priority list in the resource-scarce environments of low-to-medium income countries (comtimes referred to as the developing world).

Anyway, I was in Kenya in 2011 to check out the effectiveness of a [real-time patient reporting platform](http://cure.org/curekids) CURE had just released, to see how our embedded bloggers were performing their day-to-day job, when I saw this.

![Medical records at CURE Kenya in 2011](/img/kenya_medical_records.jpg)

Not surprisingly, this was the medical records system for a hospital that had been providing life-changing treatment to children throughout Kenya since 1998. In and of itself, paper-based records in low resource environments are that surprising, and there are plenty of commercial and open source projects that have tried (one might argue unsuccessfully) to truly solve the issue of moving health management away from paper record-keeping and to electronic systems. 

However, it was when I saw this that I knew we had a bigger problem to solve.

![Transporting medical records at CURE Kenya in 2011](/img/kenya_medical_records_2.jpg)

You see, that day, I was heading off campus with a team from the hospital to conduct what we refer to as a "mobile clinic." Because CURE provides such specialized care, we attract and treat patients from throughout the couuntry, and 3-4 times per year, a team from the hospital will visit a region 6-8 hours away from the hospital to see hundreds of children and their parents in one day. Some of these children are patients receiving long-term followup and even cast changes. The majority of parents, deparate to find a cure for their little boy or girl, bringing them to a CURE clinic to learn whether or not we can help. 

This wasn't just an EMR (electronic medical record) problem. This was an offline problem.

## An Offline Problem
As a software professional, I knew that the right, long-term solution for an software solution was to go to the cloud, but this environment presented two big challenges - challenges that (heretofore) have dissuaded technology professionals from moving to a cloud delivery solution for low resource health solutions:

1. Unreliable Internet Infrastructure: The reality is that Internet reliability globally continues to improve, but it is far from ubiquitous and anything but reliable.
2. Disconnected environments: health providers like CURE have patients that may live far enough away from the facility to require travel. Therefore, having the option to carry medical records outside of the facility was a real need.

When I got to Pennsylvania the next week, I shared what I saw, and my colleague [John](http://twitter.com/jkleinsc) started working with a newer design paradigm called [Offline First](http://alistapart.com/article/offline-first).

# 2012: An Offline First Database
The core concept of Offline First is simple: stop treating the lack of connectivity in a web-based app as an error condition. Instead, make the application resilient to interruptions in Internet access. Modern browsers and even many front end frameworks provide tools to make this not only possible but increasingly transparent to not only the end user but also the application developer. 

Back 2011, we never had the interest or inclination to try to tackle an entire hospital information system, led alone start an open source project. Instead, we decided to explore offline first principles in service to a smaller problem, a research database need we had for a program inside CURE called [CURE Hydrocephalus](http://cure.org/hydrocephalus). 

Picture of hydroDB

By mid-2012, that research database was deployed in 14 countries, primarily in subSaharan Africa. We learned a lot from that project, but now we needed to address the larger issue of a complete HIS (hospital information system) solution.

# 2013: Evaluating Options
To be clear, John and I are lazy programmers. We already had too much work to do, and if there were appropriate, affordable solutions out there for our HIS requirements, we would have loved to have found one. 

We just happen to work at the intersection of two sectors that needs a lot of innovation: nonprofit and health care.

So we spent 2013 evaluating technologies and trying to find a solution that could meet the needs of the CURE International network. We knew:

- We were committed to the cloud: not just because of total cost-of-delivery but also because we needed to be able to provide complete remote administration and monitoring. 
- We were committed to web-based technology: installing and managing software in the fields wasn't an option.
- We wanted a solution focused on clinical and administrative usability: This was more than just "liking the way it looks." When it comes to user experience, we needed a solution that addressed the very real training and even patient safety issues that a lack of attention to UI and UX can cause.
- We needed a system that could deal with our low-resource requirements: rather than trying to jam our needs into a Western health care model, we needed the flexibility to keep things simple whenever possible.
- We needed to be able to support it in a low-resource environment: we actually pursued at least two potential offers of free licensing on commercial products. Each time, it came down to the same problems. We weren't convinced that we could successfully implement, and we couldn't afford it - even for free. The hardware costs were significant and even if those systems were donated, we couldn't attract or retain the talent needed to keep those systems running well (to say nothing of the not-very-cloud-friendly nature of many of those offers).

So in early, we reexamined our offline first reearch database and determined to take what we learned there and apply it to a brand new effort.

# 2014: Starting HospitalRun
But if we were going to start over, we were convinced we needed to go open source. We seriously examined the existing open source health projects. Many of them had done some godo work, but for a variety of reasons - either because of the lack of ability to influence the community, the very clear lack of focus on UX, or the practical need we would have to completely rearchitect their undelying technology - we were faced with starting a new project.

HospitalRun logo

We had a sense that if CURE International - a network of hospitals that was receiving some source of funding from the US and UK - was struggling with this issue, that there could be thousands of other facilities in low-to-medium income countries with the same problems. However, validating that sense with facts was harder than you might think. 

So we did the research ourselves. 

We put together a mashup on UN and WHO data in order to try to estimate how many "hospitals" there are in low-to-medium income countries. The result of that work is published [here](http://goo.gl/38MVD0), and we referenced our estimate, 13,555 hospitals in low-to-medium income countries, in our first justification paper, titled ["Why HospitalRun?"](http://goo.gl/NCJDnJ). A year later, I was speaking with a colleague about that research and was told that our numbers were way off, that we completely underestimated. The bottom line is that there's a huge, unaddressed need.

So in early 2014, we launched the HospitalRun open source project, choosing Ember and PouchDB for the frontend project and Node and CouchDB for the backend. In September of that year, we did the first early (probably too early) deployment of the system at the CURE hospital in the [Philippines](http://cure.org/philippines), and we're scheduled to reach a private beta of the system this August (with hopefully a v. 1.0 release this November).

# Having Goals
But we're not interested in just running the flavor-of-the-decade open source health project that merely chooses today's "cool tools" and fades out in 3-4 years. Instead, we have very specific goals for why we're doing what we're doing.

## Building specifically for the Developing World


## Making Usability the #1 Requirement


## Solving for Time


## Embracing Offline First


## More than a Download


## Partnering to Make a Difference

