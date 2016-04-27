'use strict';

var ZSchema = require('z-schema');
var fs = require('fs');
var path = require('path');
var schema = require('./schema.json');

function validate(resumeJson, callback) {
  return ZSchema.validate(resumeJson, schema);
}

module.exports = {
  validate: validate
};
