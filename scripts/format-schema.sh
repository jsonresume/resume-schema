#!/usr/bin/env bash
set -e
formatted=$(jsonlint-cli --pretty --sort schema.json)
printf '%s\n' "$formatted" > schema.json
