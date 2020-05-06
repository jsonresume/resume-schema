import {describe, expect, it} from '@jest/globals'
import validate from '../utils/validate';
import fixtures from './__test__/skills.json';

test('skills - valid', () => {
  expect(validate(fixtures.skillsValid)).toBeTruthy();
});

test('skills - invalid', () => {
  expect(validate(fixtures.skillsInvalid)).toBeFalsy();
});

test('skills[].name - valid', () => {
  expect(validate(fixtures.nameValid)).toBeTruthy();
});

test('skills[].name - invalid', () => {
  expect(validate(fixtures.nameInvalid)).toBeFalsy();
});

test('skills[].level - valid', () => {
  expect(validate(fixtures.levelValid)).toBeTruthy();
});

test('skills[].level - invalid', () => {
  expect(validate(fixtures.levelInvalid)).toBeFalsy();
});

test('skills[].keywords - valid', () => {
  expect(validate(fixtures.keywordsValid)).toBeTruthy();
});

test('skills[].keywords - invalid', () => {
  expect(validate(fixtures.keywordsInvalid)).toBeFalsy();
});

test('skills[].keywords[item] - valid', () => {
  expect(validate(fixtures.keywordsItemValid)).toBeTruthy();
});

test('skills[].keywords[item] - invalid', () => {
  expect(validate(fixtures.keywordsItemInvalid)).toBeFalsy();
});
