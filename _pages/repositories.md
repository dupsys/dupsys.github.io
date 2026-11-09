---
layout: page
permalink: /repositories/
title: Repositories
description: Code, datasets, and tools.
nav: true
nav_order: 3
---

{% assign gh = site.data.repositories.github_user %}

<div class="gh-profile">
  <img class="gh-avatar" src="https://github.com/{{ gh }}.png?size=160" alt="GitHub avatar of {{ gh }}" loading="lazy" width="72" height="72">
  <div class="gh-profile-text">
    <div class="gh-name">Abiodun Modupe</div>
    <div class="gh-handle"><i class="fa-brands fa-github"></i> {{ gh }}</div>
  </div>
  <a class="btn btn-sm z-depth-0 gh-follow" href="https://github.com/{{ gh }}?tab=repositories" target="_blank" rel="noopener noreferrer">All repositories <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
</div>

{% for group in site.data.repositories.groups %}

## {{ group.title }}

<div class="repo-grid">
  {% for repo in group.repos %}
    <a class="repo-card" href="https://github.com/{{ gh }}/{{ repo.name }}" target="_blank" rel="noopener noreferrer">
      <div class="repo-card-title"><i class="fa-solid fa-book-bookmark"></i> {{ repo.name }}</div>
      <p class="repo-card-desc">{{ repo.description }}</p>
      <div class="repo-card-meta">
        {% if repo.language %}<span><span class="lang-dot"></span> {{ repo.language }}</span>{% endif %}
        <span><i class="fa-regular fa-star"></i> {{ repo.stars }}</span>
      </div>
    </a>
  {% endfor %}
</div>
{% endfor %}
