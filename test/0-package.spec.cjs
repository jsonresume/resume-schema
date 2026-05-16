'use strict'

const tape = require('tape')
const { validate, schema, jobSchema } = require('@jsonresume/schema')

tape('CJS package export - validate', (t) => {
	t.equal(typeof validate, 'function', 'package should export "validate" function')
	t.end()
})

tape('CJS package export - schema', (t) => {
	t.equal(typeof schema, 'object', 'package should export "schema" object')
	t.equal(typeof schema.$id, 'string', 'schema should have "$id" string-property')
	// TODO: waiting for a better ID for the schema:
	// t.equal(schema.$id, 'https://jsonresume.org/schema/resume.json', 'schema should have "$id" property')
	t.end()
})

tape('CJS package export - index - jobSchema', (t) => {
	t.equal(typeof jobSchema, 'object', 'package index should export "jobSchema" object')
	// t.equal(jobSchema.$id, 'https://jsonresume.org/schema/job.json', 'jobSchema should have "$id" property')
	t.end()
})
