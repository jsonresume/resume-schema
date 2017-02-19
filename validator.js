'use strict';

var ZSchema = require('z-schema');
var fs = require('fs');
var path = require('path');
var schema = require('./schema');

// TODO - Remove this sync call
var schema = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'schema.json'), 'utf8'));

function validate(resumeJson, callback) {
  // Callers expect z-schema 2.4.x report object
  var callbackWrapper = function(err, valid) {
    if(err) {
      callback(err)
    } else {
      callback(null, {valid: valid});
    }
  }

  new ZSchema().validate(resumeJson, schema, callbackWrapper);
}

module.exports = {
  validate: validate,
  schema: schema
};
