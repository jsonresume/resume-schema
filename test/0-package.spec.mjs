import tape from 'tape'
import { validate, schema, jobSchema } from '@jsonresume/schema/all'

import treeValidate      from '@jsonresume/schema/validate'
import treeSchemasResume from '@jsonresume/schema/schemas/resume.json'  with { type: 'json' }
import treeSchemasJob    from '@jsonresume/schema/schemas/job.json'  with { type: 'json' }

// ---------------------------------------------------------------------

tape('ESM package export - index - validate', (t) => {
	t.equal(typeof validate, 'function', 'package index should export "validate" function')
	t.end()
})

tape('ESM package export - index - schema', (t) => {
	t.equal(typeof schema, 'object', 'package index should export "schema" object')
	t.equal(typeof schema.$id, 'string', 'schema should have "$id" string-property')
	// TODO: waiting for a better ID for the schema:
	// t.equal(schema.$id, 'https://jsonresume.org/schema/resume.json', 'schema should have "$id" property')
	t.end()
})

tape('ESM package export - index - jobSchema', (t) => {
	t.equal(typeof jobSchema, 'object', 'package index should export "jobSchema" object')
	// t.equal(jobSchema.$id, 'https://jsonresume.org/schema/job.json', 'jobSchema should have "$id" property')
	t.end()
})

// ---------------------------------------------------------------------


tape('ESM package export - /validate', (t) => {
	t.equal(typeof treeValidate, 'function', 'package should export "/validate" function')
	t.end()
})

tape('ESM package export - /schemas/resume.json', (t) => {
	t.equal(typeof treeSchemasResume, 'object', 'package should export "/schemas/resume.json" object')
	t.equal(typeof treeSchemasResume.$id, 'string', 'schema should have "$id" string-property')
	// TODO: waiting for a better ID for the schema:
	// t.equal(treeSchemasResume.$id, 'https://jsonresume.org/schema/resume.json', 'schema should have "$id" property')
	t.end()
})

tape('ESM package export - /schemas/job.json', (t) => {
	t.equal(typeof treeSchemasJob, 'object', 'package should export "/schemas/job.json" object')
	// t.equal(treeSchemasJob.$id, 'https://jsonresume.org/schema/job.json', 'jobSchema should have "$id" property')
	t.end()
})
