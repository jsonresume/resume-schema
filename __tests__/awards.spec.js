import {describe, expect, it} from '@jest/globals'
import validate from '../utils/validate';
import fixtures from './__test__/awards.json';

test('awards - valid', () => {
  expect(validate(fixtures.awardsValid)).toBeTruthy();
});

test('awards - invalid', () => {
  expect(validate(fixtures.awardsInvalid)).toBeFalsy();
});

test('awards[].title - valid', () => {
  expect(validate(fixtures.titleValid)).toBeTruthy();
});

test('awards[].title - invalid', () => {
  expect(validate(fixtures.titleInvalid)).toBeFalsy();
});

test('awards[].date - valid [YYYY-MM-DD]', () => {
  expect(validate(fixtures.dateValid)).toBeTruthy();
});

test('awards[].date - valid [YYYY-MM]', () => {
  expect(validate(fixtures.dateValid2)).toBeTruthy();
});

test('awards[].date - valid [YYYY]', () => {
  expect(validate(fixtures.dateValid3)).toBeTruthy();
});

test('awards[].date - invalid', () => {
  expect(validate(fixtures.dateInvalid)).toBeFalsy();
});

test('awards[].awarder - valid', () => {
  expect(validate(fixtures.awarderValid)).toBeTruthy();
});

test('awards[].awarder - invalid', () => {
  expect(validate(fixtures.awarderInvalid)).toBeFalsy();
});

test('awards[].summary - valid', () => {
  expect(validate(fixtures.summaryValid)).toBeTruthy();
});

test('awards[].summary - invalid', () => {
  expect(validate(fixtures.summaryInvalid)).toBeFalsy();
});
