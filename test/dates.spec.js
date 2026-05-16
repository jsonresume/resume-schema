'use strict'
const test = require('tape')
const Ajv = require('ajv')

const schemaResume = require('@jsonresume/schema/schemas/resume.json')

const fixtures = require('./__test__/dates.json');

const miniDateSchema = {
  type: 'string',
  description: 'Mock Date Format',

  // copy 'date' pattern from resume schema
  pattern: schemaResume['$defs']['iso8601']['pattern'],
};

function dateValidate (resumeJson, callback) {
  const ajv = new Ajv();
  const validate = ajv.compile(miniDateSchema)

  if (!validate(resumeJson)) {
    return callback(validate.errors, false);
  }

  return callback(null, true);
}

test('dates - YYYY-MM-DD', (t) => {
  dateValidate(fixtures.yearMonthDay, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('dates - YYYY-MM', (t) => {
  dateValidate(fixtures.yearMonth, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('dates - YYYY', (t) => {
  dateValidate(fixtures.yearMonthDay, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('dates - invalid', (t) => {
  dateValidate(fixtures.invalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});
