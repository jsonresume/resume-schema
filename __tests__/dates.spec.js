import {describe, expect, it} from '@jest/globals'
import Ajv from 'ajv';
import fixtures from './__test__/dates.json';

const mockDateSchema = {
  "type": "string",
  "description": "Mock Date Format",
  "pattern": "^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$"
};

const validate = new Ajv().compile(mockDateSchema)

test('dates - YYYY-MM-DD', () => {
  expect(validate(fixtures.yearMonthDay)).toBeTruthy();
});

test('dates - YYYY-MM', () => {
  expect(validate(fixtures.yearMonth)).toBeTruthy();
});

test('dates - YYYY', () => {
  expect(validate(fixtures.yearMonthDay)).toBeTruthy();
});

test('dates - invalid', () => {
  expect(validate(fixtures.invalid)).toBeFalsy();
});
