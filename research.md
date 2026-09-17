---
title: Research
permalink: /research/
---

My work develops mixture models that find latent groups with different covariate effects, together with algorithms that estimate them reliably.

## Semi- and nonparametric mixtures of regressions

In these models the component regression functions, variances or mixing proportions vary smoothly with the covariates. Estimating them by local likelihood over a grid of points invites label switching, because component labels need not agree from one grid point to the next. I develop EM-type algorithms that keep the labels aligned and produce smooth estimates.

{% include related.html ids="skhosana2024modified skhosana2023novel skhosana2022fitting" %}

## Robust mixture modelling

Gaussian component errors make estimates sensitive to outliers and heavy tails. Contaminated Gaussian components let a model cluster observations and flag outliers at the same time. I develop EM- and ECM-type algorithms for the parametric and nonparametric terms of these models.

{% include related.html ids="skhosana2026nonparametric mambondimumwe2026robust" %}

## Directional statistics

Circular responses such as directions, angles and times of year are common in biology, geology and meteorology. A single von Mises distribution cannot capture a multimodal response, so I develop mixtures of circular regressions with circular and linear covariates for model-based clustering.

{% include related.html ids="skhosana2026circular" %}

## Machine learning within mixture models

Neural networks, fitted through a neural-network EM algorithm, can replace parametric forms for the mixing proportions and component effects to capture nonlinear structure. Applications include varying-coefficient mixtures for binary responses and latent class joint models for longitudinal and time-to-event data.

{% include related.html ids="harris2026deep" %}
