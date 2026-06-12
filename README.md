# JSON Resume Schema — MOVED

> **This repository has moved.** The JSON Resume schema specification and all
> ongoing development now live in the JSON Resume monorepo at
> **[jsonresume/jsonresume.org](https://github.com/jsonresume/jsonresume.org)**,
> under [`packages/schema`](https://github.com/jsonresume/jsonresume.org/tree/master/packages/schema).
> This repository is archived and read-only.

## What is JSON Resume?

JSON Resume is an open-source, community-driven standard for representing a
résumé as a single structured JSON document. The schema defines the canonical
shape of a `resume.json` file — sections such as `basics`, `work`, `education`,
`skills`, `projects`, and more — so that a person's career data can be authored
once and rendered, validated, hosted, and themed by any compatible tool.

## Where things went

- **Schema spec + development:** https://github.com/jsonresume/jsonresume.org (`packages/schema`)
- **npm package:** [`@jsonresume/schema`](https://www.npmjs.com/package/@jsonresume/schema) — **unchanged**, still the package to install. It is now published from the monorepo via changesets.
- **Issues:** Please open new issues in the [monorepo](https://github.com/jsonresume/jsonresume.org/issues). Existing open issues from this repo were transferred there.
- **Homepage, registry, tooling, and themes:** also in the [monorepo](https://github.com/jsonresume/jsonresume.org).

The migration of the schema source into the monorepo landed in
[jsonresume.org#283](https://github.com/jsonresume/jsonresume.org/pull/283).
See the org consolidation tracking issue
[#275](https://github.com/jsonresume/jsonresume.org/issues/275) for background.

## Installation (unchanged)

```
npm install --save @jsonresume/schema
```
