# JSON Resume Schema

[![GitHub Releases](https://badgen.net/github/tag/jsonresume/resume-schema)](https://github.com/jsonresume/resume-schema/releases)
[![NPM Release](https://badgen.net/npm/v/resume-schema)](https://www.npmjs.com/package/resume-schema)
[![Latest Status](https://github.com/jsonresume/resume-schema/workflows/Latest/badge.svg)](https://github.com/vanillawc/wc-template/actions)
[![Release Status](https://github.com/jsonresume/resume-schema/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-template/actions)

Standard, Specification, Schema

### Getting started

```
npm install --save resume-schema
```

To use

```js
const resumeSchema = require("resume-schema");
resumeSchema.validate(
  { name: "Thomas" },
  function (err, report) {
    if (err) {
      console.error("The resume was invalid:", err);
      return;
    }
    console.log("Resume validated successfully:", report);
  },
  function (err) {
    console.error("The resume was invalid:", err);
  }
);
```

More likely

```js
var fs = require("fs");
var resumeSchema = require("resume-schema");
var resumeObject = JSON.parse(fs.readFileSync("resume.json", "utf8"));
resumeSchema.validate(resumeObject);
```

The JSON Resume schema is available from:

```js
require("resume-schema").schema;
```

### Contribute

We encourage anyone who's interested in participating in the formation of this standard to join the discussions [here on GitHub](https://github.com/jsonresume/resume-schema/issues). Also feel free to fork this project and submit new ideas to add to the JSON Resume Schema standard. To make sure all formatting is kept in check, please install the [EditorConfig plugin](http://editorconfig.org/) for your editor of choice.

### Versioning

JSON Resume Schema adheres to Semantic Versioning 2.0.0. If there is a violation of
this scheme, report it as a bug. Specifically, if a patch or minor version is
released and breaks backward compatibility, that version should be immediately
yanked and/or a new version should be immediately released that restores
compatibility. Any change that breaks the public API will only be introduced at
a major-version release. As a result of this policy, you can (and should)
specify any dependency on JSON Resume Schema by using the Pessimistic Version
Constraint with two digits of precision.

We use automatic semver system.

Pull requests titles should be formatted as such

```
"fix: added something" - will bump the patch version
"feat: added something" - will bump the minor version
```

`major` version bumps will be few and far between for this schema.

### Other resume standards

- [HR-XML](https://schemas.liquid-technologies.com/HR-XML/2007-04-15/)
- [Europass](http://europass.cedefop.europa.eu/about-europass)
