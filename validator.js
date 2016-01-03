'use strict';

var ZSchema = require('z-schema');
var fs = require('fs');
var path = require('path');
var resumeJson = require('./resume');
var schema = require('./schema');

function validate(resumeJson, callback) {
  ZSchema.validate(resumeJson, schema)
    .then(function(report) {
      callback(null, report);
    })
    .catch(callback);
}

module.exports = {
  validate: validate,
  resumeJson: resumeJson,
  schema: schema
};
