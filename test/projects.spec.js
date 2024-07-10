var test = require("tape");
var { validate } = require("../validator");
const fixtures = require("./__test__/projects.json");

test("projects - valid", (t) => {
  validate(fixtures.projectsValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects - invalid", (t) => {
  validate(fixtures.projectsInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("projects[].name - valid", (t) => {
  validate(fixtures.nameValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].name - invalid", (t) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("projects[].description - valid", (t) => {
  validate(fixtures.descriptionValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].description - invalid", (t) => {
  validate(fixtures.descriptionInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("projects[].highlights - valid", (t) => {
  validate(fixtures.highlightsValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].highlights - invalid", (t) => {
  validate(fixtures.highlightsInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("projects[].highlights[item] - valid", (t) => {
  validate(fixtures.highlightsItemValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].highlights[item] - invalid", (t) => {
  validate(fixtures.highlightsItemInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("projects[].keywords - valid", (t) => {
  validate(fixtures.keywordsValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].keywords - invalid", (t) => {
  validate(fixtures.keywordsInvalid, (err, valid) => {
    console.log("debugging invalid roles", err, valid);

    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("projects[].keywords[item] - valid", (t) => {
  validate(fixtures.keywordsItemValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].keywords[item] - invalid", (t) => {
  validate(fixtures.keywordsItemInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("projects[].startDate - valid [YYYY-MM-DD]", (t) => {
  validate(fixtures.startDateValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].startDate - valid [YYYY-MM]", (t) => {
  validate(fixtures.startDateValid2, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].startDate - valid [YYYY]", (t) => {
  validate(fixtures.startDateValid3, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].startDate - invalid", (t) => {
  validate(fixtures.startDateInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("projects[].endDate - valid [YYYY-MM-DD]", (t) => {
  validate(fixtures.endDateValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].endDate - valid [YYYY-MM]", (t) => {
  validate(fixtures.endDateValid2, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].endDate - valid [YYYY]", (t) => {
  validate(fixtures.endDateValid3, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].endDate - invalid", (t) => {
  validate(fixtures.endDateInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("projects[].roles - valid", (t) => {
  validate(fixtures.rolesValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].roles - invalid", (t) => {
  validate(fixtures.rolesInvalid, (err, valid) => {
    console.log("debugging invalid roles", err, valid);
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("projects[].roles[item] - valid", (t) => {
  validate(fixtures.rolesItemValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].roles[item] - invalid", (t) => {
  validate(fixtures.rolesItemInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("projects[].entity - valid", (t) => {
  validate(fixtures.entityValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].entity - invalid", (t) => {
  validate(fixtures.entityInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("projects[].type - valid", (t) => {
  validate(fixtures.typeValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("projects[].type - invalid", (t) => {
  validate(fixtures.typeInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});
