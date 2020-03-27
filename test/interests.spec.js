var test = require('tape');
var { validate } = require('../validator');
const fixtures = require('./__test__/interests.json');

test('interests - valid', (t) => {
  validate(fixtures.interestsValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('interests - invalid', (t) => {
  validate(fixtures.interestsInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('interests[].name - valid', (t) => {
  validate(fixtures.nameValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('interests[].name - invalid', (t) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('interests[].keywords - valid', (t) => {
  validate(fixtures.keywordsValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('interests[].keywords - invalid', (t) => {
  validate(fixtures.keywordsInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('interests[].keywords[item] - valid', (t) => {
  validate(fixtures.keywordsItemValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('interests[].keywords[item] - invalid', (t) => {
  validate(fixtures.keywordsItemInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});
