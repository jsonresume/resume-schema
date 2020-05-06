import {describe, expect, it} from '@jest/globals'
import validate from  '../utils/validate';
import fixtures from './__test__/publications.json';

test('publications - valid', () => {
  expect(validate(fixtures.publicationsValid)).toBeTruthy();
});

test('publications - invalid', () => {
  expect(validate(fixtures.publicationsInvalid)).toBeFalsy();
});

test('publications[].name - valid', () => {
  expect(validate(fixtures.nameValid)).toBeTruthy();
});

test('publications[].name - invalid', () => {
  expect(validate(fixtures.nameInvalid)).toBeFalsy();
});

test('publications[].publisher - valid', () => {
  expect(validate(fixtures.publisherValid)).toBeTruthy();
});

test('publications[].publisher - invalid', () => {
  expect(validate(fixtures.publisherInvalid)).toBeFalsy();
});

test('publications[].releaseDate - valid [YYYY-MM-DD]', () => {
  expect(validate(fixtures.releaseDateValid)).toBeTruthy();
});

test('publications[].releaseDate - valid [YYYY-MM]', () => {
  expect(validate(fixtures.releaseDateValid2)).toBeTruthy();
});

test('publications[].releaseDate - valid [YYYY]', () => {
  expect(validate(fixtures.releaseDateValid3)).toBeTruthy();
});

test('publications[].releaseDate - invalid', () => {
  expect(validate(fixtures.releaseDateInvalid)).toBeFalsy();
});

test('publications[].url - valid', () => {
  expect(validate(fixtures.urlValid)).toBeTruthy();
});

test('publications[].url - invalid', () => {
  expect(validate(fixtures.urlInvalid)).toBeFalsy();
});

test('publications[].summary - valid', () => {
  expect(validate(fixtures.summaryValid)).toBeTruthy();
});

test('publications[].summary - invalid', () => {
  expect(validate(fixtures.summaryInvalid)).toBeFalsy();
});
