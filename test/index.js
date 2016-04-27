var test = require('tape');
var validator = require('../validator');
var resumeJson = require('../resume.json');

test('Validates a valid resume', function(t) {
  validator.validate(resumeJson).then(function(report) {
    t.equal(report && report.valid, true, 'Passes JsonResume v1.0.0 specification - DRAFT.');
    t.end();
  });
});

test('Validates an invalid resume', function(t) {
  validator.validate({
    basics: [],
    profiles: {}
  }).catch(function(err) {
    t.ok(err, 'Error is triggered by validation');
    t.end();
  });
});
