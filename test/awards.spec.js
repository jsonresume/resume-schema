var test = require("tape");
var { validate } = require("../validator");
const fixtures = require("./__test__/awards.json");

test("awards - valid", (t) => {
  validate(fixtures.awardsValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("awards - invalid", (t) => {
  validate(fixtures.awardsInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("awards[].title - valid", (t) => {
  validate(fixtures.titleValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("awards[].title - invalid", (t) => {
  validate(fixtures.titleInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("awards[].date - valid [YYYY-MM-DD]", (t) => {
  validate(fixtures.dateValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("awards[].date - valid [YYYY-MM]", (t) => {
  validate(fixtures.dateValid2, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("awards[].date - valid [YYYY]", (t) => {
  validate(fixtures.dateValid3, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("awards[].date - invalid", (t) => {
  validate(fixtures.dateInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("awards[].awarder - valid", (t) => {
  validate(fixtures.awarderValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("awards[].awarder - invalid", (t) => {
  validate(fixtures.awarderInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("awards[].summary - valid", (t) => {
  validate(fixtures.summaryValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("awards[].summary - invalid", (t) => {
  validate(fixtures.summaryInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});
