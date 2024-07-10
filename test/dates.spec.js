var test = require("tape");
var Validator = require("jsonschema").Validator;

const fixtures = require("./__test__/dates.json");
// var mockDateSchema = require('./__test__/mockDateSchema.json');

const mockDateSchema = {
  type: "string",
  description: "Mock Date Format",
  pattern:
    "^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$",
};

function dateValidate(resumeJson, callback) {
  var v = new Validator();

  const validation = v.validate(resumeJson, mockDateSchema);

  if (!validation.valid) {
    return callback(validation.errors, false);
  }

  return callback(null, true);
}

test("dates - YYYY-MM-DD", (t) => {
  dateValidate(fixtures.yearMonthDay, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("dates - YYYY-MM", (t) => {
  dateValidate(fixtures.yearMonth, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("dates - YYYY", (t) => {
  dateValidate(fixtures.yearMonthDay, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("dates - invalid", (t) => {
  dateValidate(fixtures.invalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});
