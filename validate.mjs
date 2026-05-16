import { validate as _v } from './dist/resume-validator.mjs'

export default function validate (resumeObj, callback) {
	if (!_v(resumeObj)) {
		return callback(_v.errors, false)
	}
	return callback(null, true)
}
