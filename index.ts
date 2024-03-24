#! /usr/bin/env node
import inquirer from "inquirer";
// generate a random number
const randomNumber = Math.floor(Math.random() * 6 + 1);
// user input to guess a number
const input = await inquirer.prompt([
  { message: "Please guess a number:", type: "number", name: "guessedNumber" },
]);
// compare user input with random number and show result
if (input.guessedNumber === randomNumber) {
  console.log("Congratulations! You guessed right number.");
} else {
  console.log("You guessed wrong number.");
}