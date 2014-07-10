JSON Resume Schema
======

[![Build Status](https://api.travis-ci.org/jsonresume/resume-schema.svg)](http://travis-ci.org/jsonresume/resume-schema)

Standard, Specification, Schema

### IRC

Everyone working on the early stages of the project should join our Freenode channel

```
#jsonresume on freenode
```

You can use the web client [http://webchat.freenode.net/](http://webchat.freenode.net/)


### Getting Started

```
npm install --save resume-schema
```

To use

```
var resumeSchema  = require('resume-schema');
resumeSchema.validate({name: "Thomas"});
```

More likely

```

var fs = require('fs');
var resumeSchema  = require('resume-schema');
var resumeObject = JSON.parse(fs.readFileSync('resume.json', 'utf8'));
resumeSchema.validate(resumeObject);
```

### People

* Julian Shapiro for early prototype revisions

### Contribute

We encourage anyone who's interested in participating in the formation of this standard, to join us on IRC, and/or to join the discussions [here on GitHub](https://github.com/jsonresume/resume-schema/issues). Also feel free to fork this project and submit new ideas that you feel are a needed addition to the jsonresume standard. To make sure all formatting is kept in check, please install the [EditorConfig plugin](http://editorconfig.org/) for your editor of choice.

### Research

- [A more professional recruitment process with structured data](/research/A%20more%20professional%20recruitment%20process%20with%20structured%20CV%20data.pdf).



### Proposals to reinvestigate

* [#69 - Standard format for phone numbers](https://github.com/jsonresume/resume-schema/issues/69)
* 


### Other Resume Standards
* [HR-XML](https://hr-xml.site-ym.com/store/default.aspx?)
* [Europass](http://europass.cedefop.europa.eu/en/about)
