# Contributing to Hackerspace Valencia

Thanks for wanting to help. This site is built by the community, for the community, and there
are two equally welcome ways to contribute: **content** (posts, projects, workshops) and
**code** (templates, styles, features, bug fixes).

By participating you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Content contributions

### Easy way: the CMS

Open [`/admin/`](https://hackvlc.es/admin/) on the site and sign in with GitHub.
Only repo collaborators can log in, and every edit opens as a **pull request**, so a
maintainer reviews it before it goes live. See the [README](README.md#editing-content) for the
full list of collections.

### By hand

Follow the patterns in the [README](README.md#editing-content). Blog posts are page bundles,
projects live under `content/<lang>/proyectos/<slug>/`, and so on. Keep both languages in sync.

## Code contributions

### Run it locally

```bash
git clone https://github.com/HackerspaceVLC/hackvlc-website.git
cd hackvlc-website
hugo server            # http://localhost:1313
```

You need the [extended](https://github.com/gohugoio/hugo/releases) build of Hugo (0.162 or newer).
No Node dependencies are required.

### Where things live

- **Templates and theme assets:** `themes/hackvlc/` (layouts, CSS, JS, partials).
- **Repo-level overrides:** `assets/`, `layouts/`, `content/`, `data/` take precedence over the theme.
- **Site config:** `config.toml` (menus, params, languages, social links).
- **UI strings:** `i18n/{es,en}.yaml`.

When editing templates, prefer the theme's existing classes and conventions: Bootstrap 5 plus
the design tokens in `maker-theme.css` (`--primary`, `--radius`, and so on).

### Make your change

1. Branch off `main`: `git switch -c fix/my-change`.
2. Edit, then verify with `hugo server`. Check **both** languages: `/` and `/en/`.
3. Build once to be sure: `hugo --minify`.

## Before you open a pull request

- [ ] `hugo server` runs without errors and the change looks right in **ES and EN**.
- [ ] No secrets, tokens, or private URLs committed (the repo is public).
- [ ] Images are WebP, compressed, and within the size limits in the [README](README.md#image-guidelines).
- [ ] If you changed UI text, you updated both `i18n/es.yaml` and `i18n/en.yaml`.
- [ ] Commits follow the existing style (Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`).

Open the PR against `main`, describe **what** and **why**, and link any related issue.
A maintainer will review it, and Cloudflare deploys automatically on merge.

## Reporting bugs

Use the [issue templates](https://github.com/HackerspaceVLC/hackvlc-website/issues/new/choose)
and include enough detail to reproduce it: page URL, browser, screenshot.

## Security issues

Do **not** open a public issue for security vulnerabilities. See [SECURITY.md](SECURITY.md).

## Need help?

Drop by the [hackerspace](https://hackvlc.es/#contact) on an open-doors Tuesday, or open an issue.
We are a friendly bunch.
