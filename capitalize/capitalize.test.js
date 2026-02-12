import { capitalize } from "./capitalize.js";

test("Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Bye", () => {
  expect(capitalize("bye")).toBe("Bye");
});

test("Javascript", () => {
  expect(capitalize("javascript")).toBe("Javascript");
});
