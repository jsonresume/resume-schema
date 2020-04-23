import {describe, expect, it} from '@jest/globals'
import validate from '../utils/validate';
import fixtures from './__test__/schema.json';

test('schema - valid', () => {
  expect(validate(fixtures.valid)).toBeTruthy();
});

test('schema - invalid', () => {
  expect(validate(fixtures.invalid)).toBeFalsy();
});
