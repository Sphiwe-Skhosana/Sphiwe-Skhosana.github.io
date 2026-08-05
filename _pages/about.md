---
permalink: /
title: "About"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am a Lecturer in the [Department of Statistics](https://www.up.ac.za/statistics) at the University of Pretoria, and a member of the [MBC@UP](https://www.up.ac.za/statistics/mbcup-model-based-clustering-research-group) model-based clustering research group. I completed my PhD at the University of Pretoria in 2024, supported by the Department of Higher Education and Training's nGAP programme.

My research sits at the intersection of **finite mixture modelling** and **flexible regression**. Broadly, I am interested in what happens when a population is made up of unobserved subpopulations and the relationships within those subpopulations are not well described by a straight line. This raises three recurring problems that run through most of my work: how to estimate such models reliably, how to keep the estimates stable when the data are contaminated, and how to decide how many subpopulations there are in the first place.

## Research interests

**Semi- and non-parametric mixtures of regressions.** Allowing mixing proportions, regression functions, or variances to vary non-parametrically with the covariates buys a great deal of flexibility, but it breaks the standard EM machinery — local-likelihood estimation applied component-wise invites label-switching and non-smooth function estimates. Much of my work develops EM- and ECM-type algorithms that resolve this by treating the alignment problem as part of the model rather than as a post-hoc correction.

**Robust estimation under contamination.** Gaussian component errors make these models fragile to outliers and heavy tails. Using contaminated Gaussian components lets us cluster observations and flag outliers within a single likelihood, rather than cleaning the data first and modelling second.

**Varying-coefficient and mixture-of-experts models.** Recent work compares kernel-based and neural-network M-steps for estimating varying-coefficient mixtures, and asks when the extra flexibility of a network is actually worth its cost.

**Directional statistics.** Mixtures of circular regressions, with applications to periodic and seasonal phenomena.

## Applications

I am particularly interested in applying these methods to South African and African data, where population heterogeneity is often the substantive question rather than a nuisance. Current applications include energy poverty and affordability using the LCS 2014/2015 household data, the environmental Kuznets curve across Sub-Saharan Africa, and seasonality in river discharge.

## Software

Code accompanying my papers is released on [GitHub](https://github.com/Sphiwe-Skhosana). See the [software page](/software/) for a current list.

## Get in touch

I welcome enquiries from prospective postgraduate students interested in mixture models, computational statistics, or statistical learning. Email is the best way to reach me.
