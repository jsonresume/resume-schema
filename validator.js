'use strict';
var ZSchema = require('z-schema');
var schema = require('./schema');

const zs = new ZSchema();

module.exports = {
  validate: (resumeJson, ...args) => zs.validate(resumeJson, schema, ...args),
  schema: schema
};
