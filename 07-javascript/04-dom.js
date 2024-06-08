// Exercise #1:

const copyButton = document.getElementById("copy");
const userInput1 = document.getElementById("userInput1");
const outputDiv = document.querySelector(".output");

copyButton.addEventListener("click", () => {
  outputDiv.textContent = userInput1.value;
});

// Exercise #2:

const userInput2 = document.getElementById("userInput2");
const inputEventExampleOutput = document.querySelector("#inputEventExample p");

userInput2.addEventListener("input", () => {
  inputEventExampleOutput.textContent = userInput2.value;
});
