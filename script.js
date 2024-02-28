const btn = document.querySelector(".btn");
const input = document.querySelector(".input-text");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  const checkInput = input.value;
  const len = checkInput.length;
  const startLetters = checkInput.substring(0, Math.floor(len / 2));
  const endLetters = checkInput.substring(len - Math.floor(len / 2));
  const flipedLetter = [...endLetters].reverse().join("");
  if (startLetters.toLowerCase() == flipedLetter.toLowerCase()) {
    result.innerHTML = `${checkInput.toUpperCase()} is a palindrome`;
  } else {
    result.innerHTML = `${checkInput.toUpperCase()} is NOT a palindrome`;
  }
});
