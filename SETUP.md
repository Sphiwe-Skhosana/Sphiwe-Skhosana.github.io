# Setting up your academic site

Everything in this folder is **content and configuration**, not the theme itself. You first create a repository from the Academic Pages template, then copy these files over the defaults.

Budget about 30 minutes for steps 1–5. The site will be live at the end of it.

---

## 1. Create the repository

1. Go to <https://github.com/academicpages/academicpages.github.io>
2. Click the green **Use this template** button, then **Create a new repository**.
   - Use the template button, not Fork. Forks of a template repo make pull requests behave strangely and are harder to detach later.
3. Name the repository exactly:

   ```
   Sphiwe-Skhosana.github.io
   ```

   This name is not cosmetic. GitHub only treats a repo as a *user site* — served from the root URL — when it matches `username.github.io`. Any other name gives you a *project site* at `username.github.io/reponame/`, which then requires setting `baseurl` in `_config.yml`. Getting this right now avoids a class of broken-link problems later.
4. Set visibility to **Public**. GitHub Pages requires this on free accounts.

Your site will be at <https://Sphiwe-Skhosana.github.io>.

---

## 2. Copy these files in

Clone the new repo and copy the contents of this folder over it, overwriting where they collide:

```bash
git clone https://github.com/Sphiwe-Skhosana/Sphiwe-Skhosana.github.io.git
cd Sphiwe-Skhosana.github.io

# copy the contents of the academic-site folder in here, then:
git add -A
git commit -m "Add site configuration and content"
git push
```

Files that **replace** the template defaults:

| File | What it does |
|---|---|
| `_config.yml` | Site-wide settings, your profile links, publication categories |
| `_data/navigation.yml` | The top navigation bar |
| `_pages/about.md` | The landing page |
| `_pages/cv.md` | CV page that auto-populates from your collections |
| `_pages/software.md` | New page — not in the template |
| `_includes/head/custom.html` | Loads MathJax |

Files that go **alongside** the template's examples:

- `_publications/*.md` — one file per paper
- `_teaching/*.md` — one file per course
- `_talks/*.md` — one file per talk

**Delete the template's example files** in `_publications/`, `_teaching/`, `_talks/`, `_portfolio/` and `_posts/` once you've copied yours in, or they'll show up on your live site alongside your real content.

---

## 3. Add the CSS overrides

Open `assets/css/main.scss` in the repo. It already has front matter and a set of `@import` lines. Paste the contents of `assets/css/custom-overrides.scss` at the **bottom** of that file, below the imports.

Do not overwrite `main.scss` wholesale — the imports at the top are what load the theme.

---

## 4. Add your profile photo

Save a square photo as `images/profile.png` in the repo. Around 400×400 px is plenty. The `_config.yml` already points at it.

If you'd rather not have a photo, delete the `avatar:` line from `_config.yml`.

---

## 5. Turn on GitHub Pages

Repository → **Settings** → **Pages** → under *Build and deployment*, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.

The first build takes a few minutes. Check **Actions** for progress — a red X there means the build failed, and clicking through gives you the error. The commonest cause is a YAML syntax error in `_config.yml` or in a post's front matter, usually an unescaped colon in a title. If a title contains a colon, wrap the whole thing in double quotes.

---

## 6. Fill in the TODOs

Search the repository for `TODO` — there are about a dozen. They're places where I couldn't verify a detail and didn't want to invent one:

- The 2024 book chapter: I found the title, authors and page range (149–175) but not the volume it appears in.
- Both 2026 arXiv preprints: the direct arXiv links.
- Your PhD thesis: exact title and the UPSpace handle.
- MET 720: course description.
- KernelVCM.Fit and DeepVCM: repository links, if you're ready to make them public.
- CV: education before the PhD, previous appointments, grants, service.

Please check the publication entries against your own records before the site goes public. I assembled them from indexing services, and those are not always right about dates, page ranges or author order.

---

## Adding content later

### A new paper

Create `_publications/2026-short-name.md`:

```yaml
---
title: "Paper title"
collection: publications
category: journals      # journals | chapters | preprints | theses
permalink: /publication/2026-short-name
excerpt: 'Two sentences on what the paper does.'
date: 2026-06-15        # used for ordering — newest first
venue: 'Journal Name'
paperurl: 'https://doi.org/...'
citation: 'Skhosana, S. B. (2026). Paper title. <i>Journal Name</i>, 12(3), 45–67.'
---

Optional longer body text goes here. Anything below the front matter appears
on the individual publication page.
```

The `category` value must match a key under `publication_category` in `_config.yml`, or the paper won't appear in any section.

### Bulk import

The template ships with a `markdown_generator/` folder containing scripts that turn a TSV of publications into these Markdown files. If you have a BibTeX file, exporting it to TSV and running that script is much faster than writing twenty files by hand.

### Maths in a page

Inline maths uses `\( ... \)` and display maths uses `$$ ... $$`:

```markdown
The mixture density is

$$
f(y \mid x) = \sum_{k=1}^{K} \pi_k(x) \, \phi\!\left(y; m_k(x), \sigma_k^2\right),
$$

where \( \pi_k(\cdot) \) are the mixing proportions.
```

I deliberately did not enable single-dollar inline maths, because `$` appears constantly in prose about household expenditure and would trigger spurious rendering.

---

## Previewing locally (optional)

Pushing to see every change is slow. To preview locally you need Ruby, `bundler` and Node:

```bash
sudo apt install ruby-dev bundler nodejs   # or the macOS/Homebrew equivalent
cd Sphiwe-Skhosana.github.io
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>. The server rebuilds on save.

If `bundle install` fails, delete `Gemfile.lock` and run it again — this is by far the most common Jekyll setup problem and it resolves it most of the time.

---

## A custom domain, later

If you buy a domain, add a file named `CNAME` at the repo root containing just the domain (no `https://`, no trailing slash), point a CNAME DNS record at `Sphiwe-Skhosana.github.io`, and update `url:` in `_config.yml` to match. Then tick **Enforce HTTPS** in Settings → Pages.

Some people prefer this because a personal domain survives changing institutions. A `github.io` address does too, so it's genuinely optional.
