import { calculator } from "./calculator.js";

test("5 + 5 = 10", () => {
  expect(calculator.add(5, 5)).toBe(10);
});

test("5 - 5 = 0", () => {
  expect(calculator.subtract(5, 5)).toBe(0);
});

test("5 * 5 = 25", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test("5 / 5 = 1", () => {
  expect(calculator.divide(5, 5)).toBe(1);
});
