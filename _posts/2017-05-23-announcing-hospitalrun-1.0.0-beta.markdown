---
title: Announcing HospitalRun 1.0.0 Beta
date: 2017-05-23 00:00:00 Z
categories:
- hospitalrun
- update
- releases
subtitle: Better late than never!
author: Joel Worrall
author_url: http://joelworrall.com
layout: post
---

So remember when we said that HospitalRun 1.0 would be out in April?

We obviously missed that date by several weeks.

For the record, there were some very good and immovable reasons why that happened (for instance, [JK](http://github.com/jkleinsc) and [I](http://github.com/tangollama) were transitioning away from CURE International in the last few months), and we learned some valuable lessons about projecting release dates in open source projects.

But there's good news. I'm pleased to announce...

# HospitalRun 1.0.0 Beta is available!
You can [try it](/tryit) on your desktop thanks to the magic of [Electron](http://electron.atom.io) or deploy it with [Docker](http://docker.com).

<div class="cta-row">
	<a href="/tryit" class="cta primary">Try HospitalRun</a>
	<a href="https://github.com/HospitalRun/hospitalrun-frontend" class="cta secondary">View source on GitHub</a>
</div>

# What shipped?
If you want a complete list of all the changes, you can of course read the [Change log](https://github.com/HospitalRun/hospitalrun-frontend/blob/master/CHANGELOG.md), but I'll try to offer a rundown of the numerous features.

## Basic modules
_The stuff you need to get work done._

* Patients, including history, diagnosis, orders, and procedures
* Outpatient Workflow
* Operative Planning and Reporting
* Appointment scheduling
* Operative theatre / resource scheduling
* Inpatient and outpatient Visit tracking
* Consumable Inventory, including stock on hand predictive reports
* Labs Queue (not yet integrated with a LIS)
* Imaging Queue (not yet integrated with a PACS)
* Medication ordering that is tied to the comsumable inventory system
* Basic billing, including handling discount profiles for charitable and discounted work
* Incident Management, tracing quality issues within a facility
* Partially-configurable Roles and permissions
* User Management

## Technical Features
_The stuff that's arguably the most special, important things about the project._

* Offline-first support (thanks to PouchDB and service workers)
* The capability to deploy to a local server AND the cloud with synchronization for _free_ (thanks to CouchDB)
* Desktop deployment for Mac and Windows (thanks to Electron)
* Scripted server deployment (thanks to Docker)
* Near-complete internationalization (ember-i18n)
* Repo-enforced code standards (thanks to eslint)
* Automated integration testing (thanks to Travis CI)
* A donated Demo environment (thanks to Microsoft Bizspark)
* Incredible traceability on the project repository for issues, projects, and code (thanks to GitHub)
* Over 1,000 acceptance tests (thanks to PhantomJS)

## Key Time-saving Features
_The stuff we're arguably most proud of._

* Custom forms with current support for Patients, Social Work, Visits, Outpatient Reports, Labs, Incidents, Operative Plans and Reports, and Discharge Reports
* Shortcode support, allowing common text to be "short-handed" into all text fields
* "Grow with you" Lookup lists: start with empty metadata, lock down your system (per meta data field) as you are ready to formalize your taxonomies
* Google Apps authentication
* A relatively intuitive user interface
* Inventory-aware consumption of Medication and Supplies, helping resource-constrained environments plan to deliver only what they have available.

# With Gratitude
In total this release involved nearly __100__ code contributors and over __3,000__ commits. Thank you to everyone involved in producing this first, important step for the project. We believe that HospitalRun can and will do a lot of good in the world because of you.

We also need to thank the following groups.

## Community support
_The stuff that helps makes the project sustainable._

* Over __2,800__ stars/recommendations as one of - if not __the__ - most popular open source health project on GitHub
* Over __500__ members in our project [Slack](http://hospitarun.slack.com)
* Marketing and video support from companies like [GitHub](http://github.com), [New Relic](http://newrelic.com), and [CURE International](http://cure.org)
* Amazing support from other open source movements like [Ember](http://emberjs.com), [Electron](http://electron.atom.io), [PouchDB](http://pouchdb.com), [CouchDB](http://couchdb.apache.org), and the [Offline First](http://offlinefirst.org) communities... with a tip of the hat to projects like [Ember Electron](https://github.com/felixrieseberg/ember-electron) and [Hoodie](http://hood.ie/) that have been a big help. Thank you all!

# What's next?
That's really up to all of us. As people start to download and use the system, rest assured there will be an active stream of change requests, and we need your help to keep up with the demand. If you're looking for a game-changing feature to work on, how about auto-provisioning a cloud instance from the Electron Desktop download? There's a [feature ticket for it right here](https://github.com/HospitalRun/hospitalrun-frontend/issues/1048). You could also finish [auto-generating a research instance of the data](https://github.com/HospitalRun/hospitalrun-server/issues/14).

If you've been think about contributing, this Summer (or Winter for my southern hemisphere friends and colleagues) would be a great time to start.

Congratulations to everyone,<br/>
[Joel](http://twitter.com/tangollama) and the entire [HospitalRun](http://twitter.com/hospitalrun) team.

[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com
