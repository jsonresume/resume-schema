'use strict';
const schema = require('./schema');
const jobSchema = require('./job-schema');
const Validator = require('jsonschema').Validator;

function validate(resumeJson, callback) {
  const v = new Validator();

  const validation = v.validate(resumeJson, schema);

  if (!validation.valid) {
    return callback(validation.errors, false);
  }

  return callback(null, true);
}

module.exports = {
  validate: validate,
  schema,
  jobSchema,
};
