var ZSchema = require("z-schema");
var fs = require('fs');
var path = require('path');
var resumeJson = require('./resume');


/* Register custom validators */
ZSchema.registerFormat('resume-date', function (date) {
  if (typeof date !== 'string') {
    return true;
  }
  var matches = /^[0-9]{4}(-([0-9]{2})(-([0-9]{2}))?)?$/.exec(date);
  if (matches === null) {
    return false
  }
  var month = matches[2];
  var day = matches[4];
  return !(month < '01' || month > '12' || day < '01' || day > '31');
});


// TODO - Remove this sync call
var schema = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'schema.json'), 'utf8'));

function validate(resumeJson, callback) {
    ZSchema.validate(resumeJson, schema)
        .then(function(report) {
            callback(report, null);
        })
        .
    catch (function(err) {
        callback(null, err);
    })
}
module.exports = {
    validate: validate,
    resumeJson: resumeJson
};
