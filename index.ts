#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
      name: "UserGuessNumber",
      type: "number",
      message: "Please guess a number between 1-10:",
    },
]);
console.log(answers);

if (answers.UserGuessNumber === randomNumber) {
    console.log('Congratulations! You guessed the right number');
} else {
    console.log('You guessed the wrong number');
}
