schema
======

[![Build Status](https://api.travis-ci.org/jsonresume/resume-schema.svg)](http://travis-ci.org/jsonresume/resume-schema)

Standard, Specification, Schema


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

var resumeSchema  = require('resume-schema');
var resumeObject = JSON.parse(fs.readFileSync('resume.json', 'utf8'));
resumeSchema.validate(resumeObject);
```

### People

* Julian Shapiro for 1.0 Draft revisions

### Research

[A more professional recruitment process with structured data](/research/A%20more%20professional%20recruitment%20process%20with%20structured%20CV%20data.pdf)
