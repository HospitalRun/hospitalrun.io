---
title: A New Beginning
date: 2019-08-07 10:45:00 Z
categories:
- hospitalrun
subtitle: A message from the new maintainer
author: Maksim Sinik
author_url: https://maksim.dev
layout: post
---

## Here we are
Hi! First of all, let me introduce myself: I am Maksim Sinik and I am very excited and honoured to announce that I am the new Lead Maintainer of the HospitalRun project. My interest in HR started some time ago when I read [this](https://hospitalrun.io/blog/2018/07/help-wanted-a-message-from-the-co-founders) post: I immediately thought that such a amazing project should not be abandoned and that all the efforts of hundreds of contributors should not be in vain!

I contacted Joel and after an intense chat we agreed that I would take over the management of HospitalRun. We discussed about the major issues and what the direction of the project should be. We both agreed that the codebase is old and difficult to contribute to for the today's standards. Unfortunately we had to make a hard decision, but I'm sure that it will pay in terms of contributions and future features: a complete rewrite of HR to adapt it to the modern cloud world.

## The Future
Now let's talk about the near future. All the repos will remain the same, but next branches will be added ([frontend](https://github.com/HospitalRun/hospitalrun-frontend/tree/next) and [server](https://github.com/HospitalRun/hospitalrun-server/tree/next)). Preserving all the incredible work done by the community in many years is one of the main priorities: the current codebase will be conserved in a dedicated branch. Forever. I already read all the opened issues and reviews all the PRs that are still open. I decided to keep some of them, as a reference and reminder for the future implementation. Unfortunately, others won't be fixed. We need to focus on the new and improved version and the `1.0.0-beta` release was never meant to be deployed in production anyway.

Speaking of the new architecture and codebase we already made some choices. Some are written below and others will be revealed in the upcoming roadmap.

- The FE will be built upon [React](https://reactjs.org/). All of the great features of HR are still important today: offline-first, light weight, fast and an intuitive UX.
- The BE will use [Fastify](https://www.fastify.io/) a modern, fast, secure and with a powerful plugin architecture web framework. If you still don't know it, I highly encourage you to check it out.
- The infrastructure will be based on [Docker](https://www.docker.com/) and [Kubernetes](https://kubernetes.io/). One of the biggest issues that the old HospitalRun has, was the difficult deploy in production. The desktop app were confusing and impossible to "link" to the cloud (or on-premise) deploy. We are here to fix it! Ideally we will provide one-click installer for the major cloud providers and docker images/Kuberenets-templates for the others.
The roadmap it will be published soon. In the meantime I can say that, in the near future, the main focus will be to port all of the current HospitalRun features to the new codebase.

Speaking of roadmap, it will be public from the first day and we highly encourage everyone to contribute to it.


## Call to Action
I want to use this post also to do a "call to action": if you think that you can contribute to the community, don't be shy and reach me on [Slack](https://hospitalrun.slack.com) or just open an issue on the official repo to show your willingness to help.

Finally, I would like to thank Joel, John and Joel immensely for creating and maintaining such an incredible open-source project and all the community for all years of support and contributions. 


This is **a new beginning** and I'm sure that it we will be an amazing journey for all of us.

Maksim Sinik
