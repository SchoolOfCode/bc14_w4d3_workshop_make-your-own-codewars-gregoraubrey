//👉 Write your tests below here:
import { toScreamingKebab } from './main.js';
import { test, expect } from '@jest/globals';

test('toScreamingKebab should return a string from a string', () => {
  expect(typeof toScreamingKebab("TESTING")).toBe("string");
});

test('toScreamingKebab should return a string from a number', () => {
    expect(typeof toScreamingKebab(7)).toBe("string");
});

test('toScreamingKebab should return a string from a boolean', () => {
    expect(typeof toScreamingKebab(true)).toBe("string");
});

test('toScreamingKebab should return a string from null', () => {
    expect(typeof toScreamingKebab(null)).toBe("string");
});

test('toScreamingKebab should return a string from undefined', () => {
    expect(typeof toScreamingKebab(undefined)).toBe("string");
});

//.toEqual(expect.any(String)) is a matcher that checks if the value is a single string
test('toScreamingKebab should concatenate multiple arguments into one string', () => {
    expect(toScreamingKebab("A", "B", "C", "D", )).toEqual(expect.any(String));
});

test('toScreamingKebab should add a hyphen between each argument', () => {
    expect(toScreamingKebab("E", "F", "G", "H", )).toBe("E-F-G-H");
});

test('toScreamingKebab should capitalise all lowercase letters', () => {
    expect(toScreamingKebab("iJKl", )).toBe("IJKL");
});

test('toScreamingKebab should replace spaces with hyphens', () => {
    expect(toScreamingKebab("M N O P", )).toBe("M-N-O-P");
});

test('toScreamingKebab should replace underscores with hyphens', () => {
    expect(toScreamingKebab("Q_R_S_T", )).toBe("Q-R-S-T");
});

test('toScreamingKebab should replace repeated spaces with a single hyphen', () => {
    expect(toScreamingKebab("U V  W   X", )).toBe("U-V-W-X");
});

test('toScreamingKebab should replace repeated underscores with a single hyphen', () => {
    expect(toScreamingKebab("Y_Z__A___B", )).toBe("Y-Z-A-B");
});

test('toScreamingKebab should replace repeated hyphens with a single hyphen', () => {
    expect(toScreamingKebab("C-D--E---F", )).toBe("C-D-E-F");
});

test('toScreamingKebab should return a string in SCREAMING-KEBAB-CASE', () => {
    expect(toScreamingKebab("one_two tHREe-foUR", 5, true, null, undefined, "last")).toBe("ONE-TWO-THREE-FOUR-5-TRUE-NULL-UNDEFINED-LAST");
});