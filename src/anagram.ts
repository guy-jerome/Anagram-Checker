export default function checkAnagram(word1: string, word2: string) {
  const wordStore: object = {};
  for (let char of word1) {
    if (wordStore[char] === undefined) {
      wordStore[char] = 1;
    } else {
      wordStore[char]++;
    }
  }
  for (let char of word2) {
    if (wordStore[char] === undefined) {
      false;
    } else {
      wordStore[char]--;
    }
  }

  for (let count in wordStore) {
    if (wordStore[count] !== 0) {
      return false;
    }
  }

  return true;
}
