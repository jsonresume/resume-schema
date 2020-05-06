import {describe, expect, it} from '@jest/globals'
import validate from '../utils/validate'
import fixtures from './__test__/interests.json';

test('interests - valid', () => {
  expect(validate(fixtures.interestsValid)).toBeTruthy();
});

test('interests - invalid', () => {
  expect(validate(fixtures.interestsInvalid)).toBeFalsy();
});

test('interests[].name - valid', () => {
  expect(validate(fixtures.nameValid)).toBeTruthy();
});

test('interests[].name - invalid', () => {
  expect(validate(fixtures.nameInvalid)).toBeFalsy();
});

test('interests[].keywords - valid', () => {
  expect(validate(fixtures.keywordsValid)).toBeTruthy();
});

test('interests[].keywords - invalid', () => {
  expect(validate(fixtures.keywordsInvalid)).toBeFalsy();
});

test('interests[].keywords[item] - valid', () => {
  expect(validate(fixtures.keywordsItemValid)).toBeTruthy();
});

test('interests[].keywords[item] - invalid', () => {
  expect(validate(fixtures.keywordsItemInvalid)).toBeFalsy();
});
