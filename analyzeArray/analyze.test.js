import { analyzeArray } from "./analyze.js";

test("average 2 2 2 is 2", () => {
  const arr = [2, 2, 2];
  expect(analyzeArray(arr).average).toBe(2);
});

test("min 1 2 3 is 1", () => {
  const arr = [1, 2, 3];
  expect(analyzeArray(arr).minimum).toBe(1);
});

test("max 1 2 3 is 3", () => {
  const arr = [1, 2, 3];
  expect(analyzeArray(arr).maximum).toBe(3);
});

test("length 1 2 3 is 3", () => {
  const arr = [1, 2, 3];
  expect(analyzeArray(arr).leng).toBe(3);
});

test("returns statistics of a numeric array", () => {
  const arr = [1, 8, 3, 4, 2, 6];

  expect(analyzeArray(arr)).toEqual({
    average: 4,
    minimum: 1,
    maximum: 8,
    leng: 6,
  });
});
