import {describe, expect, it} from '@jest/globals'
import validate from '../utils/validate';
import fixtures from './__test__/projects.json';

test('projects - valid', () => {
  expect(validate(fixtures.projectsValid)).toBeTruthy();
});

test('projects - invalid', () => {
  expect(validate(fixtures.projectsInvalid)).toBeFalsy();
});

test('projects[].name - valid', () => {
  expect(validate(fixtures.nameValid)).toBeTruthy();
});

test('projects[].name - invalid', () => {
  expect(validate(fixtures.nameInvalid)).toBeFalsy();
});

test('projects[].description - valid', () => {
  expect(validate(fixtures.descriptionValid)).toBeTruthy();
});

test('projects[].description - invalid', () => {
  expect(validate(fixtures.descriptionInvalid)).toBeFalsy();
});

test('projects[].highlights - valid', () => {
  expect(validate(fixtures.highlightsValid)).toBeTruthy();
});

test('projects[].highlights - invalid', () => {
  expect(validate(fixtures.highlightsInvalid)).toBeFalsy();
});

test('projects[].highlights[item] - valid', () => {
  expect(validate(fixtures.highlightsItemValid)).toBeTruthy();
});

test('projects[].highlights[item] - invalid', () => {
  expect(validate(fixtures.highlightsItemInvalid)).toBeFalsy();
});

test('projects[].keywords - valid', () => {
  expect(validate(fixtures.keywordsValid)).toBeTruthy();
});

test('projects[].keywords - invalid', () => {
  expect(validate(fixtures.keywordsInvalid)).toBeFalsy();
});

test('projects[].keywords[item] - valid', () => {
  expect(validate(fixtures.keywordsItemValid)).toBeTruthy();
});

test('projects[].keywords[item] - invalid', () => {
  expect(validate(fixtures.keywordsItemInvalid)).toBeFalsy();
});

test('projects[].startDate - valid [YYYY-MM-DD]', () => {
  expect(validate(fixtures.startDateValid)).toBeTruthy();
});

test('projects[].startDate - valid [YYYY-MM]', () => {
  expect(validate(fixtures.startDateValid2)).toBeTruthy();
});

test('projects[].startDate - valid [YYYY]', () => {
  expect(validate(fixtures.startDateValid3)).toBeTruthy();
});

test('projects[].startDate - invalid', () => {
  expect(validate(fixtures.startDateInvalid)).toBeFalsy();
});

test('projects[].endDate - valid [YYYY-MM-DD]', () => {
  expect(validate(fixtures.endDateValid)).toBeTruthy();
});

test('projects[].endDate - valid [YYYY-MM]', () => {
  expect(validate(fixtures.endDateValid2)).toBeTruthy();
});

test('projects[].endDate - valid [YYYY]', () => {
  expect(validate(fixtures.endDateValid3)).toBeTruthy();
});

test('projects[].endDate - invalid', () => {
  expect(validate(fixtures.endDateInvalid)).toBeFalsy();
});

test('projects[].roles - valid', () => {
  expect(validate(fixtures.rolesValid)).toBeTruthy();
});

test('projects[].roles - invalid', () => {
  expect(validate(fixtures.rolesInvalid)).toBeFalsy();
});

test('projects[].roles[item] - valid', () => {
  expect(validate(fixtures.rolesItemValid)).toBeTruthy();
});

test('projects[].roles[item] - invalid', () => {
  expect(validate(fixtures.rolesItemInvalid)).toBeFalsy();
});

test('projects[].entity - valid', () => {
  expect(validate(fixtures.entityValid)).toBeTruthy();
});

test('projects[].entity - invalid', () => {
  expect(validate(fixtures.entityInvalid)).toBeFalsy();
});

test('projects[].type - valid', () => {
  expect(validate(fixtures.typeValid)).toBeTruthy();
});

test('projects[].type - invalid', () => {
  expect(validate(fixtures.typeInvalid)).toBeFalsy();
});
