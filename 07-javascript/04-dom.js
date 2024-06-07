// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

// Fetch JavaScript objects representing specific elements in the DOM
const copyButton = document.getElementById("copy");
const userInput1 = document.getElementById("userInput1");
const outputDiv = document.querySelector(".output");

// Add an event listener on the target element
copyButton.addEventListener("click", () => {
  // Callback function to handle event
  outputDiv.textContent = userInput1.value;
});

// Exercise #2:
// When the user enters input text, copy the user input to the output area

// Fetch JavaScript objects representing specific elements in the DOM
const userInput2 = document.getElementById("userInput2");
const inputEventExampleOutput = document.querySelector("#inputEventExample p");

// Add an event listener on the target element
userInput2.addEventListener("input", () => {
  // Callback function to handle event
  inputEventExampleOutput.textContent = userInput2.value;
});
