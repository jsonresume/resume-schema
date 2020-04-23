import {describe, expect, it} from '@jest/globals'
import validate from '../utils/validate'
import fixtures from './__test__/languages.json';

test('languages - valid', () => {
  expect(validate(fixtures.languagesValid)).toBeTruthy();
});

test('languages - invalid', () => {
  expect(validate(fixtures.languagesInvalid)).toBeFalsy();
});

test('languages[].language - valid', () => {
  expect(validate(fixtures.languageValid)).toBeTruthy();
});

test('languages[].language - invalid', () => {
  expect(validate(fixtures.languageInvalid)).toBeFalsy();
});

test('languages[].fluency - valid', () => {
  expect(validate(fixtures.fluencyValid)).toBeTruthy();
});

test('languages[].fluency - invalid', () => {
  expect(validate(fixtures.fluencyInvalid)).toBeFalsy();
});
