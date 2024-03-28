describe("checkAnagram", () => {
  test("should return true for two anagrams", () => {
    const word1 = "rat";
    const word2 = "art";
    const result = checkAnagram(word1, word2);
    expect(result).toBe(true);
  });
  test("should return false for two non-anagrams", () => {
    const word1 = "rat";
    const word2 = "bat";
    const result = checkAnagram(word1, word2);
    expect(result).toBe(false);
  });
  test("should return false for words with different lengths", () => {
    const word1 = "rat";
    const word2 = "arts";
    const result = checkAnagram(word1, word2);
    expect(result).toBe(false);
  });
  test("should return true for two empty strings", () => {
    const word1 = "";
    const word2 = "";
    const result = checkAnagram(word1, word2);
    expect(result).toBe(true);
  });
});
