schema
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

### Research

- [A more professional recruitment process with structured data](/research/A%20more%20professional%20recruitment%20process%20with%20structured%20CV%20data.pdf).



### Proposals to reinvestigate

* [#69 - Standard format for phone numbers](https://github.com/jsonresume/resume-schema/issues/69)
* 
