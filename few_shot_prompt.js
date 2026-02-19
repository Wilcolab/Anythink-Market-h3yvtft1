// Example few-shot prompt file

/*
This file illustrates a few-shot prompt for a text transformation
function, such as converting strings to camelCase or snake_case.
*/

const examples = [
  { input: "hello world", output: "helloWorld" },
  { input: "convert_to_snake", output: "convertToSnake" },
  { input: "  spaced-out text ", output: "spacedOutText" }
];

module.exports = { examples };