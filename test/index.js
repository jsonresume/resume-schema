var test = require('tape');
var validator = require('../validator');

test('Test validator on resume.json.', function(t) {
    validator.validate(validator.resumeJson, function(report, err) {
        t.equal(err, null, 'No formatting errors');
        t.equal(report && report.valid, true, 'Passes JsonResume v1.0.0 specification - DRAFT.');
        t.end();
    });
});