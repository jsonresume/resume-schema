"use strict";
var schema = require("./schema");
var Validator = require("jsonschema").Validator;

function validate(resumeJson, callback) {
  var v = new Validator();

  const validation = v.validate(resumeJson, schema);

  if (!validation.valid) {
    return callback(validation.errors, false);
  }

  return callback(null, true);
}

module.exports = {
  validate: validate,
  schema: schema,
};
