'use strict';
var ZSchema = require('z-schema');
var schema = require('./schema');

function validate(resumeJson, callback) {
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
