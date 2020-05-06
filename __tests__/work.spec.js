import {describe, expect, it} from '@jest/globals'
import validate from '../utils/validate';
import fixtures from './__test__/work.json';

test('work - valid', () => {
  expect(validate(fixtures.workValid)).toBeTruthy();
});

test('work - invalid', () => {
  expect(validate(fixtures.workInvalid)).toBeFalsy();
});

test('work[].name - valid', () => {
  expect(validate(fixtures.nameValid)).toBeTruthy();
});

test('work[].name - invalid', () => {
  expect(validate(fixtures.nameInvalid)).toBeFalsy();
});

test('work[].location - valid', () => {
  expect(validate(fixtures.locationValid)).toBeTruthy();
});

test('work[].location - invalid', () => {
  expect(validate(fixtures.locationInvalid)).toBeFalsy();
});

test('work[].description - valid', () => {
  expect(validate(fixtures.descriptionValid)).toBeTruthy();
});

test('work[].description - invalid', () => {
  expect(validate(fixtures.descriptionInvalid)).toBeFalsy();
});

test('work[].position - valid', () => {
  expect(validate(fixtures.positionValid)).toBeTruthy();
});

test('work[].position - invalid', () => {
  expect(validate(fixtures.positionInvalid)).toBeFalsy();
});

test('work[].url - valid', () => {
  expect(validate(fixtures.urlValid)).toBeTruthy();
});

test('work[].url - invalid', () => {
  expect(validate(fixtures.urlInvalid)).toBeFalsy();
});

test('work[].startDate - valid [YYYY-MM-DD]', () => {
  expect(validate(fixtures.startDateValid)).toBeTruthy();
});

test('work[].startDate - valid [YYYY-MM]', () => {
  expect(validate(fixtures.startDateValid2)).toBeTruthy();
});

test('work[].startDate - valid [YYYY]', () => {
  expect(validate(fixtures.startDateValid3)).toBeTruthy();
});

test('work[].startDate - invalid', () => {
  expect(validate(fixtures.startDateInvalid)).toBeFalsy();
});

test('work[].endDate - valid [YYYY-MM-DD]', () => {
  expect(validate(fixtures.endDateValid)).toBeTruthy();
});

test('work[].endDate - valid [YYYY-MM]', () => {
  expect(validate(fixtures.endDateValid2)).toBeTruthy();
});

test('work[].endDate - valid [YYYY]', () => {
  expect(validate(fixtures.endDateValid3)).toBeTruthy();
});

test('work[].endDate - invalid', () => {
  expect(validate(fixtures.endDateInvalid)).toBeFalsy();
});

test('work[].summary - valid', () => {
  expect(validate(fixtures.summaryValid)).toBeTruthy();
});

test('work[].summary - invalid', () => {
  expect(validate(fixtures.summaryInvalid)).toBeFalsy();
});

test('work[].highlights - valid', () => {
  expect(validate(fixtures.highlightsValid)).toBeTruthy();
});

test('work[].highlights - invalid', () => {
  expect(validate(fixtures.highlightsInvalid)).toBeFalsy();
});

test('work[].highlights[item] - valid', () => {
  expect(validate(fixtures.highlightsItemValid)).toBeTruthy();
});

test('work[].highlights[item] - invalid', () => {
  expect(validate(fixtures.highlightsItemInvalid)).toBeFalsy();
});
