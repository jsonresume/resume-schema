var test = require('tape');
var fs = require('fs');
var validator = require('../validator');

// This dependency may be removed when switching to ES2015 (or higher)
var Promise = require('promise');

var validateFilesInDir = function (dir, t, callback) {

  fs.readdir(dir, function (err, list) {

    if (err) {
      t.fail('Cannot read directory');
      t.end();
      return;
    }

    var promises = list.map(function (file) {

      // Read and validate all files in directory asynchronously and return a promise
      return new Promise(function (resolve) {

        fs.readFile(dir + file, 'utf-8', function (err, data) {

          if (err) {
            t.fail('Cannot read file');
            resolve();
            return;
          }

          data = JSON.parse(data);

          validator.validate(data, function (err, report) {
            callback(file, err, report);
            resolve();
          });
        });
      });
    });

    Promise.all(promises).then(function () {
      t.end();
    });

  });
};

test('Validates a valid resume', function (t) {

  validateFilesInDir('examples/valid/', t, function (file, err, report) {
    t.equal(err, null, file + ' - No formatting errors');
    t.equal(report && report.valid, true, file + ' - Passes JsonResume v1.0.0 specification - DRAFT.');
  });

});


test('Validates an invalid resume', function (t) {

  validateFilesInDir('examples/invalid/', t, function (file, err) {
    t.ok(err, file + ' - Error is triggered by validation');
  });

});

test('Exports the JSON schema', function(t) {

  t.ok(validator.schema, 'JSON Schema is being exported');
  t.end();

});
