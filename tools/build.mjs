import $fs            from 'node:fs/promises'
import Ajv, { _ }     from 'ajv'
import standaloneCode from 'ajv/dist/standalone/index.js'
import esbuild        from 'esbuild'

import * as fmts      from './ajv-formats-micro.mjs'

import resumeSchema from '../schema.json' with { type: 'json' }


const ajv = new Ajv({
	formats: fmts,
	code: {
		lines: true,
		source: true,
		optimize: true,
		esm: true,
		formats: _`require("../tools/ajv-formats-micro.mjs")`,
	},
	// it can be useful for cleaning up the object
	removeAdditional: true,
	allErrors: true,
	coerceTypes: false,
	validateSchema: false,
})

const validate = ajv.compile(resumeSchema)
const moduleCode = standaloneCode(ajv, validate)

// "recursive" here - for ignoring the existing directory
await $fs.mkdir('./tmp', { recursive: true })
await $fs.writeFile('./tmp/resume-validator.mjs', moduleCode)

// now ESBUILD will bundle a really standlone validator file
// with zero external deps, everything inside:
// - validator function
// - formats
// - ajv-standalone
await esbuild.build({
	outdir: './dist/',
	format: 'esm',
	outExtension: { '.js': '.mjs' },
	platform: 'node',
	bundle: true,
	entryPoints: [
		'./tmp/resume-validator.mjs',
	],
})

// another ESBUILD run for creating a CJS version
// of the "index.mjs"
await esbuild.build({
	outdir: './dist/',
	format: 'cjs',
	outExtension: { '.js': '.cjs' },
	platform: 'node',
	bundle: true,
	entryPoints: [
		'./index.mjs',
	],
})
