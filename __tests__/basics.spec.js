import {describe, expect, it} from '@jest/globals'
import validate from '../utils/validate';
import fixtures from './__test__/basics.json';

test('basics - valid', () => {
  expect(validate(fixtures.basicsValid)).toBeTruthy();
});

test('basics - invalid', () => {
  expect(validate(fixtures.basicsInvalid)).toBeFalsy();
});

test('basics.name - valid', () => {
  expect(validate(fixtures.nameValid)).toBeTruthy();
});

test('basics.name - invalid', () => {
  expect(validate(fixtures.nameInvalid)).toBeFalsy();
});

test('basics.label - valid', () => {
  expect(validate(fixtures.labelValid)).toBeTruthy();
});

test('basics.label - invalid', () => {
  expect(validate(fixtures.labelInvalid)).toBeFalsy();
});

test('basics.image - valid', () => {
  expect(validate(fixtures.imageValid)).toBeTruthy();
});

test('basics.image - invalid', () => {
  expect(validate(fixtures.imageInvalid)).toBeFalsy();
});

test('basics.email - valid', () => {
  expect(validate(fixtures.emailValid)).toBeTruthy();
});

test('basics.email - invalid', () => {
  expect(validate(fixtures.emailInvalid)).toBeFalsy();
});

test('basics.phone - valid', () => {
  expect(validate(fixtures.phoneValid)).toBeTruthy();
});

test('basics.phone - invalid', () => {
  expect(validate(fixtures.phoneInvalid)).toBeFalsy();
});

test('basics.url - valid', () => {
  expect(validate(fixtures.urlValid)).toBeTruthy();
});

test('basics.url - invalid', () => {
  expect(validate(fixtures.urlInvalid)).toBeFalsy();
});

test('basics.summary - valid', () => {
  expect(validate(fixtures.summaryValid)).toBeTruthy();
});

test('basics.summary - invalid', () => {
  expect(validate(fixtures.summaryInvalid)).toBeFalsy();
});

test('basics.location - valid', () => {
  expect(validate(fixtures.locationValid)).toBeTruthy();
});

test('basics.location - invalid', () => {
  expect(validate(fixtures.locationInvalid)).toBeFalsy();
});

test('basics.location.address - valid', () => {
  expect(validate(fixtures.locationAddressValid)).toBeTruthy();
});

test('basics.location.address - invalid', () => {
  expect(validate(fixtures.locationAddressInvalid)).toBeFalsy();
});

test('basics.location.postal - valid', () => {
  expect(validate(fixtures.locationPostalValid)).toBeTruthy();
});

test('basics.location.postal - invalid', () => {
  expect(validate(fixtures.locationPostalInvalid)).toBeFalsy();
});

test('basics.location.city - valid', () => {
  expect(validate(fixtures.locationCityValid)).toBeTruthy();
});

test('basics.location.city - invalid', () => {
  expect(validate(fixtures.locationCityInvalid)).toBeFalsy();
});

test('basics.location.country - valid', () => {
  expect(validate(fixtures.locationCountryValid)).toBeTruthy();
});

test('basics.location.country - invalid', () => {
  expect(validate(fixtures.locationCountryInvalid)).toBeFalsy();
});

test('basics.location.region - valid', () => {
  expect(validate(fixtures.locationRegionValid)).toBeTruthy();
});

test('basics.location.region - invalid', () => {
  expect(validate(fixtures.locationRegionInvalid)).toBeFalsy();
});

test('basics.profiles - valid', () => {
  expect(validate(fixtures.profilesValid)).toBeTruthy();
});

test('basics.profiles - invalid', () => {
  expect(validate(fixtures.profilesInvalid)).toBeFalsy();
});

test('basics.profiles[].network - valid', () => {
  expect(validate(fixtures.profilesNetworkValid)).toBeTruthy();
});

test('basics.profiles[].network - invalid', () => {
  expect(validate(fixtures.profilesNetworkInvalid)).toBeFalsy();
});

test('basics.profiles[].username - valid', () => {
  expect(validate(fixtures.profilesUsernameValid)).toBeTruthy();
});

test('basics.profiles[].username - invalid', () => {
  expect(validate(fixtures.profilesUsernameInvalid)).toBeFalsy();
});

test('basics.profiles[].url - valid', () => {
  expect(validate(fixtures.profilesUrlValid)).toBeTruthy();
});

test('basics.profiles[].url - invalid', () => {
  expect(validate(fixtures.profilesUrlInvalid)).toBeFalsy();
});
