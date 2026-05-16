import { validate as _v } from './dist/resume-validator.mjs'

export { default as schema } from './schema.json' with { type: 'json' }
export { default as jobSchema } from './job-schema.json' with { type: 'json' }

export function validate (resumeObj, callback) {
	if (!_v(resumeObj)) {
		return callback(_v.errors, false)
	}
	return callback(null, true)
}
