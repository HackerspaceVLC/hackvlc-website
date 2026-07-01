# Security Policy

## Reporting a vulnerability

The Hackerspace Valencia website is open source and deployed from this repository.
If you find a security vulnerability, **please do not open a public GitHub issue.**

Instead, report it privately by emailing **hackerspacevlc@gmail.com** with the subject
`[SECURITY] hackvlc-website`. Include:

- A description of the issue and its potential impact.
- Steps to reproduce (proof of concept, URLs, screenshots).
- Any suggested fix.

We'll acknowledge receipt within a few days and work with you on a fix and
responsible disclosure.

## Scope

This policy covers the code in this repository: Hugo templates, the theme,
the Sveltia CMS configuration (`static/admin/`), and content processing.

Examples of issues we want to hear about:

- Cross-site scripting (XSS) or injection through user-controlled content.
- Ways to bypass the CMS authentication / authorization (e.g. writing to the
  repo without being a collaborator).
- Secrets or credentials accidentally committed to the repository.
- Misconfigurations that expose administrative functionality.

## Out of scope

- Vulnerabilities in third-party services (Cloudflare, GitHub, Meetup): report
  those to the respective vendor.
- Spam, social engineering of members, or physical security of the space.
- Issues requiring existing, authenticated, authorized access to have any effect
  (the CMS is intentionally restricted to repo collaborators, and all edits go
  through pull-request review).

## Disclosure

We prefer coordinated disclosure. Once a fix is deployed we're happy to credit
the reporter (unless they prefer to remain anonymous).

Thank you for helping keep the project and the community safe.
