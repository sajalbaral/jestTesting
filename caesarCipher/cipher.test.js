import { caesarCipher } from "./cipher.js";

test("abc -> def", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("xyz -> abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
