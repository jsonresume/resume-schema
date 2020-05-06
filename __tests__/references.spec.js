import {describe, expect, it} from '@jest/globals'
import validate from '../utils/validate';
import fixtures from './__test__/references.json';

test('references - valid', () => {
  expect(validate(fixtures.referencesValid)).toBeTruthy();
});

test('references - invalid', () => {
  expect(validate(fixtures.referencesInvalid)).toBeFalsy();
});

test('references[].name - valid', () => {
  expect(validate(fixtures.nameValid)).toBeTruthy();
});

test('references[].name - invalid', () => {
  expect(validate(fixtures.nameInvalid)).toBeFalsy();
});

test('references[].reference - valid', () => {
  expect(validate(fixtures.referenceValid)).toBeTruthy();
});

test('references[].reference - invalid', () => {
  expect(validate(fixtures.referenceInvalid)).toBeFalsy();
});
