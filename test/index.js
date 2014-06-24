var test = require('tape');
var validator = require('../validator');

test('Test validator on resume.json.', function(t) {
    validator.validate(validator.resumeJson, function(report, err) {
        t.equal(err, null, 'no error');
        t.equal(report.valid, true, 'schema passed.');
        t.end();
    });
});