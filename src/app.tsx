import { useState } from "preact/hooks";
import checkAnagram from "./anagram";
import "./app.css";
export default function App() {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [result, setResult] = useState("");
  let isAnagram: boolean = false;
  function handleWord1(e) {
    setWord1(e.target.value);
  }
  function handleWord2(e) {
    setWord2(e.target.value);
  }
  function handleAnagram() {
    isAnagram = checkAnagram(word1, word2);
    isAnagram
      ? setResult("It is an anagram")
      : setResult("It is not an anagram");
  }
  return (
    <>
      <header>
        <h1>Anagram Checker</h1>
      </header>
      <main>
        <input
          type="text"
          value={word1}
          onChange={handleWord1}
          placeholder="Enter the first word or phrase"
        ></input>
        <input
          type="text"
          value={word2}
          onChange={handleWord2}
          placeholder="Enter the second word or phrase"
        ></input>
        <button onClick={handleAnagram}>Compare</button>
        <p>{result}</p>
      </main>
    </>
  );
}
