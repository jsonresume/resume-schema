import {describe, expect, it} from '@jest/globals'
import validate from '../utils/validate';
import fixtures from './__test__/meta.json';

test('meta - valid', () => {
  expect(validate(fixtures.metaValid)).toBeTruthy();
});

test('meta - invalid', () => {
  expect(validate(fixtures.metaInvalid)).toBeFalsy();
});

test('meta.canonical - valid', () => {
  expect(validate(fixtures.canonicalValid)).toBeTruthy();
});

test('meta.canonical - invalid', () => {
  expect(validate(fixtures.canonicalInvalid)).toBeFalsy();
});

test('meta.version - valid', () => {
  expect(validate(fixtures.versionValid)).toBeTruthy();
});

test('meta.version - invalid', () => {
  expect(validate(fixtures.versionInvalid)).toBeFalsy();
});

test('meta.lastModified - valid', () => {
  expect(validate(fixtures.lastModifiedValid)).toBeTruthy();
});

test('meta.lastModified - invalid', () => {
  expect(validate(fixtures.lastModifiedInvalid)).toBeFalsy();
});
