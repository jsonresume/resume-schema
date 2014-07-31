/*
This script will update versions of resume.json that were set before 0.0.0
----------------------

### Change Log

* 2014-07-30 - `languages` was added - [Dicussions](https://github.com/jsonresume/resume-schema/issues/34) - [Commit](https://github.com/jsonresume/resume-schema/commit/f02300e36ba076787d008928b29963c3ffce6121)
* 2014-07-30 - `hobbies` renamed to `interests`
* 2014-07-30 - `volunteer` was added  - [Discussion](https://github.com/jsonresume/resume-schema/issues/43) - [Commit](https://github.com/jsonresume/resume-schema/commit/dee007c2e373645b6b67d07a92aebf22fda5b95a)
* 2014-07-30 - `summary` was added to `awards` - [Discussion](https://github.com/jsonresume/resume-schema/issues/119) - [Commit](https://github.com/jsonresume/resume-schema/commit/db5e7bcfa3f373d1293d6af073753ee41e3c3ba9)
* 2014-07-30 - `summary` was added to `publications` - [Discussion](https://github.com/jsonresume/resume-schema/issues/126) - [Commit](https://github.com/jsonresume/resume-schema/pull/129)
* 2014-07-22 - `bio` has been renamed to `basics` - [Discussion](https://github.com/jsonresume/resume-schema/issues/68) - [Commit](https://github.com/jsonresume/resume-schema/pull/117)
* 2014-07-22 - `profiles` is now type array instead of object - [Discussion](https://github.com/jsonresume/resume-schema/issues/6) - [Commit](https://github.com/jsonresume/resume-schema/issues/6)
* 2014-07-15 - `address` and `postalCode` added to `location` - [Discussion](https://github.com/jsonresume/resume-schema/issues/76) - [Commit](https://github.com/jsonresume/resume-schema/pull/110)
* 2014-07-15 - `awardDate` changed to `date` - [Discussion](https://github.com/jsonresume/resume-schema/pull/107) - [Commit](https://github.com/jsonresume/resume-schema/pull/107)
* 2014-07-13 - `websites` changed to `website`, changed from object into string - [Discussion](https://github.com/jsonresume/resume-schema/issues/10) - [Commit](https://github.com/jsonresume/resume-schema/pull/101)
* 2014-07-13 - specified that `countryCode` should conform to ISO standard - [Discussion](https://github.com/jsonresume/resume-schema/pull/78) - [Commit](https://github.com/jsonresume/resume-schema/pull/78)
* 2014-07-13 - `region` will replace `state` as the default - [Discussion](https://github.com/jsonresume/resume-schema/issues/19) - [Commit](https://github.com/jsonresume/resume-schema/pull/99)
* 2014-07-12 - `picture` was added to the `bio` object - [Discussion](https://github.com/jsonresume/resume-schema/issues/29) - [Commit](https://github.com/jsonresume/resume-schema/pull/80)
* 2014-07-12 - `gpa` was added to `education` objects - [Discussion](https://github.com/jsonresume/resume-schema/issues/7) - [Commit](https://github.com/jsonresume/resume-schema/pull/97)
* 2014-07-12 - `email` and `phone` were changed from objects into strings - [Discussion](https://github.com/jsonresume/resume-schema/issues/27) - [Commit](https://github.com/jsonresume/resume-schema/pull/98)
* 2014-07-12 - `firstName` and `lastName` were merged into `name` - [Discussion](https://github.com/jsonresume/resume-schema/issues/4) - [Commit](https://github.com/jsonresume/resume-schema/commit/717b2a525f4f42e9994c54bfa3cdbe0cea5776a6)

*/
var migrate = function (resume) {
	
	return resume;
}

module.exports = migrate;