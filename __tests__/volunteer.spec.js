import {describe, expect, it} from '@jest/globals'
import validate from '../utils/validate';
import fixtures from './__test__/volunteer.json';

test('volunteer - valid', () => {
  expect(validate(fixtures.volunteerValid)).toBeTruthy();
});

test('volunteer - invalid', () => {
  expect(validate(fixtures.volunteerInvalid)).toBeFalsy();
});

test('volunteer[].organization - valid', () => {
  expect(validate(fixtures.organizationValid)).toBeTruthy();
});

test('volunteer[].organization - invalid', () => {
  expect(validate(fixtures.organizationInvalid)).toBeFalsy();
});

test('volunteer[].position - valid', () => {
  expect(validate(fixtures.positionValid)).toBeTruthy();
});

test('volunteer[].position - invalid', () => {
  expect(validate(fixtures.positionInvalid)).toBeFalsy();
});

test('volunteer[].url - valid', () => {
  expect(validate(fixtures.urlValid)).toBeTruthy();
});

test('volunteer[].url - invalid', () => {
  expect(validate(fixtures.urlInvalid)).toBeFalsy();
});

test('volunteer[].startDate - valid [YYYY-MM-DD]', () => {
  expect(validate(fixtures.startDateValid)).toBeTruthy();
});

test('volunteer[].startDate - valid [YYYY-MM]', () => {
  expect(validate(fixtures.startDateValid2)).toBeTruthy();
});

test('volunteer[].startDate - valid [YYYY]', () => {
  expect(validate(fixtures.startDateValid3)).toBeTruthy();
});

test('volunteer[].startDate - invalid', () => {
  expect(validate(fixtures.startDateInvalid)).toBeFalsy();
});

test('volunteer[].endDate - valid', () => {
  expect(validate(fixtures.endDateValid)).toBeTruthy();
});

test('volunteer[].endDate - invalid', () => {
  expect(validate(fixtures.endDateInvalid)).toBeFalsy();
});
