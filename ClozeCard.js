var fs = require('fs');
var inquirer = require('inquirer');

var cloze_cards = [];
var questionLoop = 1;


var ClozeCard = function(text, cloze) {
	this.fulltext = text;
	this.cloze = cloze;
	this.partial = function() {
	
}

ClozeCard.prototype.printCards = function() {
	console.log("====================")
	console.log("Front: " + this.fulltext);
	console.log("Back: " + this.cloze);
	console.log("====================");
};

}

function logClozeCards() {
	//* append the cloze.txt file with all of the cards

}

var clozeCardCreate = function() {
	//* have an inquirer prompt to ask for the full question 
	//* inquirer prompt question for the cloze portion of question to be left out.
	//* have an if/else statement with a loop that is set to determined number of questions so that the prompt runs through
	//  until all the questions and answers have been put into the array.
	//* print all the cards and answers to the console after the determined number in the loop is met
}


module.exports = clozeCardCreate;