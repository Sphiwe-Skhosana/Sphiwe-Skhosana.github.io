# sphiwe-skhosana.github.io

Academic website built with Jekyll for GitHub Pages. The look — palette, accent colour, light/dark mode, fonts — is controlled from one block in `_config.yml`.

## Put it online

1. On GitHub, create a **public** repository named exactly `Sphiwe-Skhosana.github.io`.
2. Upload the *contents* of this folder to the root of the repository. Either use **Add file → Upload files** and drag everything in, or use git:
   ```sh
   git clone https://github.com/Sphiwe-Skhosana/Sphiwe-Skhosana.github.io.git
   # copy the files from this folder into the clone, then:
   git add . && git commit -m "Add website" && git push
   ```
3. Open **Settings → Pages**. Under *Build and deployment*, set **Source** to *Deploy from a branch* and **Branch** to `main` and `/ (root)`, then save.
4. The site appears at <https://sphiwe-skhosana.github.io> a minute or two later. Build progress is shown under the **Actions** tab.

Every later commit rebuilds the site automatically.

To host it in a repository with any other name, set `url` to `https://sphiwe-skhosana.github.io` and `baseurl` to `/repository-name` in `_config.yml`.

## Change the look

Edit `appearance` in `_config.yml`:

| Setting | Values | Effect |
|---|---|---|
| `palette` | `jacaranda` `navy` `teal` `forest` `crimson` `ochre` `slate` `ink` | Colour of the header band, links and highlights |
| `accent` | any hex colour, e.g. `"#0b6e4f"` | Overrides the palette |
| `accent_dark` | any hex colour | Accent in dark mode; mixed from `accent` when empty |
| `mode` | `auto` `light` `dark` | `auto` follows each visitor's device setting |
| `toggle` | `true` `false` | Shows the light/dark switch in the header |
| `font` | `serif` `sans` `system` | STIX Two Text with Hanken Grotesk; Hanken Grotesk only; the device's own fonts (no web fonts) |

**Preview a palette before committing:** add `?palette=teal` to any page address. The preview lasts for that browser tab; `?palette=` clears it.

**Custom colours:** the accent sits behind the white header text and colours links, so it needs a contrast ratio of at least 4.5:1 against white. `accent_dark` needs 4.5:1 against the dark background `#16181d`. Check both at <https://webaim.org/resources/contrastchecker/>. All eight built-in palettes pass in both modes.

**Add a palette:** add a line to `_data/palettes.yml`, then use its name in `palette`.

A visitor's own light/dark choice is remembered in their browser and takes priority over `mode`.

## Edit content

| To change | Edit |
|---|---|
| Name, role, photo, email, profile links | `author` in `_config.yml` |
| About text | `index.md` |
| News on the home page | `_data/news.yml` (newest first; the first 8 are shown) |
| Publications | `_data/publications.yml` |
| Research themes | `research.md` |
| Software | `_data/software.yml` |
| Talks | `_data/talks.yml` |
| Teaching | `teaching.md` |
| Header links and their order | `_data/navigation.yml` |

**Photo:** save a square image as `images/profile.jpg` and set `avatar: /images/profile.jpg`. Your initials are shown until then.

**CV:** upload `files/cv.pdf`. A CV link appears in the header, and the CV page offers a download and shows the PDF.

**Talks and Posts** stay out of the header until they have their first entry.

### Publication entries

```yaml
- id: skhosana2027example        # unique; the Research and Software pages link to papers by id
  type: article                  # article | preprint | chapter | proceedings
  title: Title in sentence case
  authors: Skhosana, S. B., & Coauthor, A.
  year: 2027
  venue: Journal name
  details: 12(3), 45–67          # optional
  doi: 10.1234/example           # optional; also arxiv (id only), pdf, code, slides
```

Your name is bolded wherever it matches `citation_name` in `_config.yml`. To list papers under a research theme, add this line to `research.md` with the ids separated by spaces:

```liquid
{% include related.html ids="skhosana2027example skhosana2024modified" %}
```

### News entries

```yaml
- date: 2026-10-01
  text: >-
    Paper accepted in *Journal name*. [Preprint](https://arxiv.org/abs/2601.05345).
```

Keep the `>-` line: it lets the text contain colons, asterisks and links safely.

### Posts

Create `_posts/2026-10-01-short-title.md`; it is published at `/posts/2026/short-title/`.

````markdown
---
title: Fitting a two-component mixture with EM
math: true
---

Inline maths such as $$\pi_k$$ sits between double dollar signs. On its own lines it is displayed:

$$
\ell(\theta) = \sum_{i=1}^n \log \sum_{k=1}^K \pi_k \, \phi(y_i; \mu_k, \sigma_k^2)
$$

```r
tau <- pi_k * dnorm(y, mu_k, sigma_k) / f_y
```
````

`math: true` loads KaTeX for that page only. Single dollar signs are not treated as maths.

## Files

```
_config.yml           site settings, appearance, profile
_data/                news, publications, software, talks, navigation, palettes
_includes/ _layouts/  page templates
assets/css/main.css   styles
assets/js/site.js     light/dark switch, menu
index.md research.md teaching.md   page text
files/ images/        CV, slides, photo
_posts/               posts
```

Fonts: STIX Two Text and Hanken Grotesk (SIL Open Font License), served by Google Fonts. Icons: Simple Icons (CC0) and Lucide (ISC).
