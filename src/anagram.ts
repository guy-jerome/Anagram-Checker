export default function checkAnagram(word1: string, word2: string) {
  const wordStore: { [key: string]: number } = {};
  for (let char of word1) {
    if (wordStore[char] === undefined) {
      wordStore[char] = 1;
    } else {
      wordStore[char]++;
    }
  }
  for (let char of word2) {
    if (wordStore[char] === undefined) {
      return false;
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

const word1 = "rat";
const word2 = "art";
const result = checkAnagram(word1, word2);
console.log(result);
