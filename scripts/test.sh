#!/usr/bin/env bash
set -e
ajv validate -s node_modules/json-metaschema/draft-07-schema -d schema
diff -u <(jsonlint-cli --pretty --sort schema.json) schema.json # fail if schema is not sorted or indented properly
npm run lint
npm run test-units
