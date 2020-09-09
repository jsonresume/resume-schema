var test = require('tape');
var { validate } = require('../validator');
const fixtures = require('./__test__/languages.json');

test('languages - valid', (t) => {
  validate(fixtures.languagesValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('languages - invalid', (t) => {
  validate(fixtures.languagesInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('languages[].language - valid', (t) => {
  validate(fixtures.languageValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('languages[].language - invalid', (t) => {
  validate(fixtures.languageInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('languages[].fluency - valid', (t) => {
  validate(fixtures.fluencyValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('languages[].fluency - invalid', (t) => {
  validate(fixtures.fluencyInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});
