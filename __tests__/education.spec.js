import {describe, expect, it} from '@jest/globals'
import validate from '../utils/validate';
import fixtures from './__test__/education.json';

test('eductaion - valid', () => {
  expect(validate(fixtures.educationValid)).toBeTruthy();
});

test('education - invalid', () => {
  expect(validate(fixtures.educationInvalid)).toBeFalsy();
});

test('education[].institution - valid', () => {
  expect(validate(fixtures.institutionValid)).toBeTruthy();
});

test('education[].institution - invalid', () => {
  expect(validate(fixtures.institutionInvalid)).toBeFalsy();
});

test('education[].area - valid', () => {
  expect(validate(fixtures.areaValid)).toBeTruthy();
});

test('education[].area - invalid', () => {
  expect(validate(fixtures.areaInvalid)).toBeFalsy();
});

test('education[].studyType - valid', () => {
  expect(validate(fixtures.studyTypeValid)).toBeTruthy();
});

test('education[].studyType - invalid', () => {
  expect(validate(fixtures.studyTypeInvalid)).toBeFalsy();
});

test('education[].startDate - valid [YYYY-MM-DD]', () => {
  expect(validate(fixtures.startDateValid)).toBeTruthy();
});

test('education[].startDate - valid [YYYY-MM]', () => {
  expect(validate(fixtures.startDateValid2, )).toBeTruthy();
});

test('education[].startDate - valid [YYYY]', () => {
  expect(validate(fixtures.startDateValid3)).toBeTruthy();
});

test('education[].startDate - invalid', () => {
  expect(validate(fixtures.startDateInvalid)).toBeFalsy();
});

test('education[].endDate - valid [YYYY-MM-DD]', () => {
  expect(validate(fixtures.endDateValid)).toBeTruthy();
});

test('education[].endDate - valid [YYYY-MM]', () => {
  expect(validate(fixtures.endDateValid2)).toBeTruthy();
});

test('education[].endDate - valid [YYYY]', () => {
  expect(validate(fixtures.endDateValid3)).toBeTruthy();
});

test('education[].endDate - invalid', () => {
  expect(validate(fixtures.endDateInvalid)).toBeFalsy();
});

test('education[].gpa - valid', () => {
  expect(validate(fixtures.gpaValid)).toBeTruthy();
});

test('education[].gpa - invalid', () => {
  expect(validate(fixtures.gpaInvalid)).toBeFalsy();
});

test('education[].courses - valid', () => {
  expect(validate(fixtures.coursesValid)).toBeTruthy();
});

test('education[].courses - invalid', () => {
  expect(validate(fixtures.coursesInvalid)).toBeFalsy();
});

test('education[].courses[item] - valid', () => {
  expect(validate(fixtures.coursesItemValid)).toBeTruthy();
});

test('education[].courses[item] - invalid', () => {
  expect(validate(fixtures.coursesItemInvalid)).toBeFalsy();
});
