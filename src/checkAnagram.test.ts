import { expect, test } from "vitest";
import checkAnagram from "./anagram.ts";

test("should return true for anagrams", () => {
  expect(checkAnagram("rat", "art")).toBe(true);
  expect(checkAnagram("listen", "silent")).toBe(true);
  expect(checkAnagram("rail safety", "fairy tales")).toBe(true);
});

test("should return true for anagrams", () => {
  expect(checkAnagram("hello", "world")).toBe(false);
  expect(checkAnagram("foo", "bar")).toBe(false);
  expect(checkAnagram("123", "341")).toBe(false);
});
