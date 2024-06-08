// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

// Fetch jQuery objects representing specific elements in the DOM
let $userInput1 = $("#userInput1");
let $copy = $("#copy");
let $output1 = $("#output1");

// Add an event listener on the target element
$copy.on("click", function () {
  // Callback function to handle event
  console.log("click event");
  $output1.text($userInput1.val());
});

// Exercise #2:
// When the user enters input text, copy the user input to the output area

// Fetch jQuery objects representing specific elements in the DOM
let $userInput2 = $("#userInput2");
let $output2 = $("#output2");

// Add an event listener on the target element
$userInput2.on("input", function () {
  // Callback function to handle event
  console.log("input event");
  $output2.text($userInput2.val());
});
