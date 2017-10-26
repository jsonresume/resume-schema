# JSON Resume Schema

[![Greenkeeper badge](https://badges.greenkeeper.io/jsonresume/resume-schema.svg)](https://greenkeeper.io/)

[![Build Status](https://api.travis-ci.org/jsonresume/resume-schema.svg)](http://travis-ci.org/jsonresume/resume-schema) [![Dependency Status](https://david-dm.org/jsonresume/resume-schema.svg)](https://david-dm.org/jsonresume/resume-schema)

Standard, Specification, Schema

We are still currently un-versioned, some core changes are being pushed out, and a version 0.0.0 will be released following [Semantic Versioning 2.0.0](SemVer.org) best practices. We will be experimenting with a `migration.js` system, where each change below will be represented with a function that can update an older version of `resume.json` to the newer versions.

### Major versions

There will be a learning curve for the next few months as to how the ecosystem will revolve around versions.

To keep things simple, *JSON Resume tools are only expected to react to major version changes*, everything will follow suit only after we reach version `1.0.0`. The process for patches and fixes will be informal, and we will try to make everything work for major versions.

* [0.0.0 - First official version](https://github.com/jsonresume/resume-schema/blob/0.0.0/schema.json)

### Change log

* 2014-07-30 - `languages` was added - [Dicussions](https://github.com/jsonresume/resume-schema/issues/34) - [Commit](https://github.com/jsonresume/resume-schema/commit/f02300e36ba076787d008928b29963c3ffce6121)
* 2014-07-30 - `hobbies` was renamed to `interests`
* 2014-07-30 - `volunteer` was added - [Discussion](https://github.com/jsonresume/resume-schema/issues/43) - [Commit](https://github.com/jsonresume/resume-schema/commit/dee007c2e373645b6b67d07a92aebf22fda5b95a)
* 2014-07-30 - `summary` was added to `awards` - [Discussion](https://github.com/jsonresume/resume-schema/issues/119) - [Commit](https://github.com/jsonresume/resume-schema/commit/db5e7bcfa3f373d1293d6af073753ee41e3c3ba9)
* 2014-07-30 - `summary` was added to `publications` - [Discussion](https://github.com/jsonresume/resume-schema/issues/126) - [Commit](https://github.com/jsonresume/resume-schema/pull/129)
* 2014-07-22 - `bio` was renamed to `basics` - [Discussion](https://github.com/jsonresume/resume-schema/issues/68) - [Commit](https://github.com/jsonresume/resume-schema/pull/117)
* 2014-07-22 - `profiles` was changed to a type array instead of an object - [Discussion](https://github.com/jsonresume/resume-schema/issues/6) - [Commit](https://github.com/jsonresume/resume-schema/issues/6)
* 2014-07-15 - `address` and `postalCode` were added to `location` - [Discussion](https://github.com/jsonresume/resume-schema/issues/76) - [Commit](https://github.com/jsonresume/resume-schema/pull/110)
* 2014-07-15 - `awardDate` was changed to `date` - [Discussion](https://github.com/jsonresume/resume-schema/pull/107) - [Commit](https://github.com/jsonresume/resume-schema/pull/107)
* 2014-07-13 - `websites` was changed to `website`, changed from object into string - [Discussion](https://github.com/jsonresume/resume-schema/issues/10) - [Commit](https://github.com/jsonresume/resume-schema/pull/101)
* 2014-07-13 - specified that `countryCode` conforms to ISO standard - [Discussion](https://github.com/jsonresume/resume-schema/pull/78) - [Commit](https://github.com/jsonresume/resume-schema/pull/78)
* 2014-07-13 - `region` replaced `state` as the default - [Discussion](https://github.com/jsonresume/resume-schema/issues/19) - [Commit](https://github.com/jsonresume/resume-schema/pull/99)
* 2014-07-12 - `picture` was added to the `bio` object - [Discussion](https://github.com/jsonresume/resume-schema/issues/29) - [Commit](https://github.com/jsonresume/resume-schema/pull/80)
* 2014-07-12 - `gpa` was added to `education` objects - [Discussion](https://github.com/jsonresume/resume-schema/issues/7) - [Commit](https://github.com/jsonresume/resume-schema/pull/97)
* 2014-07-12 - `email` and `phone` were changed from objects into strings - [Discussion](https://github.com/jsonresume/resume-schema/issues/27) - [Commit](https://github.com/jsonresume/resume-schema/pull/98)
* 2014-07-12 - `firstName` and `lastName` were merged into `name` - [Discussion](https://github.com/jsonresume/resume-schema/issues/4) - [Commit](https://github.com/jsonresume/resume-schema/commit/717b2a525f4f42e9994c54bfa3cdbe0cea5776a6)

### Gitter

Everyone working on the early stages of the project should join our gitter channel [gitter.im/jsonresume/public](https://gitter.im/jsonresume/public).

### Getting started

```
npm install --save resume-schema
```

To use

```js
var resumeSchema  = require('resume-schema');
resumeSchema.validate({ name: "Thomas" }, function (err, report) {
  if (err) {
    console.error('The resume was invalid:', err);
    return;
  }
  console.log('Resume validated successfully:', report);
});
```

More likely

```js
var fs = require('fs');
var resumeSchema  = require('resume-schema');
var resumeObject = JSON.parse(fs.readFileSync('resume.json', 'utf8'));
resumeSchema.validate(resumeObject);
```

The JSON Resume schema is available from:

```js
require('resume-schema').schema;
```

### People

* Julian Shapiro for early prototype revisions

### Contribute

We encourage anyone who's interested in participating in the formation of this standard, to join us on Gitter, and/or to join the discussions [here on GitHub](https://github.com/jsonresume/resume-schema/issues). Also feel free to fork this project and submit new ideas to add to the JSON Resume Schema standard. To make sure all formatting is kept in check, please install the [EditorConfig plugin](http://editorconfig.org/) for your editor of choice.

### Versioning

JSON Resume Schema adheres to Semantic Versioning 2.0.0. If there is a violation of
this scheme, report it as a bug. Specifically, if a patch or minor version is
released and breaks backward compatibility, that version should be immediately
yanked and/or a new version should be immediately released that restores
compatibility. Any change that breaks the public API will only be introduced at
a major-version release. As a result of this policy, you can (and should)
specify any dependency on JSON Resume Schema by using the Pessimistic Version
Constraint with two digits of precision.

### Research

- [A more professional recruitment process with structured data](/research/A%20more%20professional%20recruitment%20process%20with%20structured%20CV%20data.pdf).

### Proposals to reinvestigate

* [#69 - Standard format for phone numbers](https://github.com/jsonresume/resume-schema/issues/69)
* [#44 - Person-Job Fit ](https://github.com/jsonresume/resume-schema/issues/44)
* [#12 - geotag location in work ](https://github.com/jsonresume/resume-schema/issues/12)
* [#51 - Support multiple positions within one job](https://github.com/jsonresume/resume-schema/issues/51)

### Other resume standards
* [HR-XML](https://hr-xml.site-ym.com/store/default.aspx?)
* [Europass](http://europass.cedefop.europa.eu/en/about)
