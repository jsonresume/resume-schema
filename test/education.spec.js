var test = require('tape');
var { validate } = require('../validator');
const fixtures = require('./__test__/education.json');

test('eductaion - valid', (t) => {
  validate(fixtures.educationValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('education - invalid', (t) => {
  validate(fixtures.educationInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('education[].institution - valid', (t) => {
  validate(fixtures.institutionValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('education[].institution - invalid', (t) => {
  validate(fixtures.institutionInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('education[].area - valid', (t) => {
  validate(fixtures.areaValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('education[].area - invalid', (t) => {
  validate(fixtures.areaInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('education[].studyType - valid', (t) => {
  validate(fixtures.studyTypeValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('education[].studyType - invalid', (t) => {
  validate(fixtures.studyTypeInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('education[].startDate - valid [YYYY-MM-DD]', (t) => {
  validate(fixtures.startDateValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('education[].startDate - valid [YYYY-MM]', (t) => {
  validate(fixtures.startDateValid2, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('education[].startDate - valid [YYYY]', (t) => {
  validate(fixtures.startDateValid3, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('education[].startDate - invalid', (t) => {
  validate(fixtures.startDateInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('education[].endDate - valid [YYYY-MM-DD]', (t) => {
  validate(fixtures.endDateValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('education[].endDate - valid [YYYY-MM]', (t) => {
  validate(fixtures.endDateValid2, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('education[].endDate - valid [YYYY]', (t) => {
  validate(fixtures.endDateValid3, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('education[].endDate - invalid', (t) => {
  validate(fixtures.endDateInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('education[].score - valid', (t) => {
  validate(fixtures.scoreValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('education[].score - invalid', (t) => {
  validate(fixtures.scoreInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('education[].courses - valid', (t) => {
  validate(fixtures.coursesValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('education[].courses - invalid', (t) => {
  validate(fixtures.coursesInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('education[].courses[item] - valid', (t) => {
  validate(fixtures.coursesItemValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('education[].courses[item] - invalid', (t) => {
  validate(fixtures.coursesItemInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});
