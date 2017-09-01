var fs = require('fs');
var inquirer = require('inquirer');
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

inquirer.prompt([
	{
      type: "input",
      message: "What is your name?",
      name: "username"
    },
	{
      type: "list",
      message: "Which type of flashcard do you want to make?",
      choices: ["basic", "cloze"],
      name: "flashcard"
    }
]).then(function(answers) {	
      console.log("Welcome " + answers.username + "!");
      console.log("Let's create your " + answers.flashcard + " flashcards!");
      if(answers.flashcard.toLowerCase() === "basic") {
            BasicCard();
      } 
      else{
            ClozeCard();
            //if the user chooses to make cloze type flashcards, this function will run the clozeCardCreate function
      }
	});
