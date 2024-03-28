"use strict";

function checkAnagram(word1, word2) {
  var wordStore = {};
  for (var _i = 0, word1_1 = word1; _i < word1_1.length; _i++) {
    var char = word1_1[_i];
    if (wordStore[char] === undefined) {
      wordStore[char] = 1;
    } else {
      wordStore[char]++;
    }
  }
  for (var _a = 0, word2_1 = word2; _a < word2_1.length; _a++) {
    var char = word2_1[_a];
    if (wordStore[char] === undefined) {
      false;
    } else {
      wordStore[char]--;
    }
  }
  for (var count in wordStore) {
    if (wordStore[count] !== 0) {
      return false;
    }
  }
  return true;
}

var word1 = "rat";
var word2 = "art";
var result = checkAnagram(word1, word2);
console.log(result);
