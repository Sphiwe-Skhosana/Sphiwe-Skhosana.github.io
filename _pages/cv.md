---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

A PDF version of my full CV is available [here](/files/cv.pdf). TODO — drop your CV into the `files/` folder as `cv.pdf`, or delete this line.

Education
======
* PhD in Statistics, University of Pretoria, 2024
* TODO — MSc, institution, year
* TODO — BSc (Hons), institution, year

Appointments
======
* Lecturer, Department of Statistics, University of Pretoria
* TODO — add previous positions with dates

Research interests
======
* Finite mixture models: parametric, semi-parametric and non-parametric
* EM and ECM algorithm theory and implementation
* Varying-coefficient and local-likelihood methods
* Robust estimation using contaminated Gaussian components
* Directional (circular and spherical) statistics
* Applications in energy, environmental and development economics

Publications
======
<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

Talks
======
<ul>{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html %}
{% endfor %}</ul>

Teaching
======
<ul>{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

Funding and awards
======
* nGAP programme, Department of Higher Education and Training, South Africa
* TODO — add grants, awards and scholarships

Service
======
* Member, MBC@UP model-based clustering research group, University of Pretoria
* TODO — add journal refereeing, committee work, outreach
