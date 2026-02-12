import { reverseString } from "./reverseString.js";

test("hello", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("bye", () => {
  expect(reverseString("bye")).toBe("eyb");
});

test("project", () => {
  expect(reverseString("project")).toBe("tcejorp");
});
