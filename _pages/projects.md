---
layout: page
title: Projects
permalink: /projects/
description: Selected projects in trustworthy AI, security and forensics, and multilingual language technology.
nav: true
nav_order: 2
---

{% assign groups = "trustworthy|Trustworthy & Agentic AI;security|Cybersecurity & Digital Forensics;language|Reliable Multilingual Language Technologies" | split: ";" %}
{% for g in groups %}
{% assign parts = g | split: "|" %}
{% assign items = site.projects | where: "category", parts[0] | sort: "importance" %}

## {{ parts[1] }}

<ul class="project-list">
{% for p in items %}
  <li><a href="{{ p.url | relative_url }}"><strong>{{ p.title }}</strong></a>: {{ p.description }}</li>
{% endfor %}
</ul>
{% endfor %}
