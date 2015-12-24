'use strict';

var ZSchema = require('z-schema');
var fs = require('fs');
var path = require('path');
var resumeJson = require('./resume');

var validator = new ZSchema();

// TODO - Remove this sync call
var schema = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'schema.json'), 'utf8'));

function validate(resumeJson, callback) {
  validator.validate(resumeJson, schema, function (error, valid) {
      callback(error ? error : null, valid);
  });
}

module.exports = {
  validate: validate,
  resumeJson: resumeJson
};
