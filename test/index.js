var test = require('tape');
var validator = require('../validator');

test('Validates a valid resume', function(t) {
  validator.validate(validator.resumeJson, function(err, valid) {
    t.equal(err, null, 'No formatting errors');
    t.equal(valid, true, 'Passes JsonResume v1.0.0 specification - DRAFT.');
    t.end();
  });
});

test('Validates an invalid resume', function(t) {
  validator.validate({
    basics: [],
    profiles: {}
  }, function(err) {
    t.ok(err, 'Error is triggered by validation');
    t.end();
  });
});
