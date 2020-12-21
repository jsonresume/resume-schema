var test = require('tape');
var { validate } = require('../validator');
const fixtures = require('./__test__/certificates.json');

test('certificates - valid', (t) => {
  validate(fixtures.certificatesValid, (err, valid) => {
    t.equal(err, null, 'error should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
})

test('certificates - invalid', (t) => {
  validate(fixtures.certificatesInvalid, (err, valid) => {
    t.notEqual(err, null, 'error sould contain an error');
    t.false(valid, 'valid is true');
  });
  t.end();
});

test('certificates[].name - valid', (t) => {
  validate(fixtures.nameValid, (err, valid) => {
    t.equal(err, null, 'error should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('certificates[].date - valid [YYYY-MM-DD]', (t) => {
  validate(fixtures.dateValid, (err, valid) => {
    t.equal(err, null, 'error should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('certificates[].date - invalid', (t) => {
  validate(fixtures.dateInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('certificates[].url - valid', (t) => {
  validate(fixtures.urlValid, (err, valid) => {
    t.equal(err, null, 'error should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('certificates[].url - invalid', (t) => {
  validate(fixtures.urlInvalid, (err, valid) => {
    t.notEqual(err, null, 'error sould contain an error');
    t.false(valid, 'valid is true');
  });
  t.end();
});

test('certificates[].issuer - valid', (t) => {
  validate(fixtures.issuerValid, (err, valid) => {
    t.equal(err, null, 'error should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('certificates[].issuer - invalid', (t) => {
  validate(fixtures.issuerInvalid, (err, valid) => {
    t.notEqual(err, null, 'error sould contain an error');
    t.false(valid, 'valid is true');
  });
  t.end();
});
