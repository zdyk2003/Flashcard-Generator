var fs = require('fs');
var inquirer = require('inquirer');
var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
};

BasicCard.prototype.printCards = function() {
	console.log("====================")
	console.log("Front: " + this.front);
	console.log("Back: " + this.back);
	console.log("====================");
};

function logBasicCards() {
	for (var i = 0; i < basic_cards.length; i++) {
	
	var basicTxt = "\nFront: " + basic_cards[i].front + "\nBack: " + basic_cards[i].back;
	// console.log(basicTxt);
	// console.log(basic_cards.length);
	fs.appendFile("basic.txt", basicTxt, function(error, data) {
		if(error) {
			console.log(error);
		}
		else{
			return;
		}
	});
	} 
};


//put the basic cards into an array
var basic_cards = [];

var basicCardCreate = function() {

	if (basic_cards.length < 2) {

		inquirer.prompt([
		{
			name: "front",
			message: "Enter question for the front of card"  
		},
		{ 
			name: "back",
			message: "Enter answer to the question"
		}
		]).then(function(answers) {
			
			var newBasicCard = new BasicCard(
				answers.front,
				answers.back);

				if(basic_cards.length < 2) {
					basic_cards.push(newBasicCard);
				}
				basicCardCreate();
			});
	}
	else { 
		console.log("====================")
		console.log("All cards have been made");
		for (var i = 0; i < basic_cards.length; i++) {
			basic_cards[i].printCards();
		
		}
		logBasicCards();
	};	
};
module.exports = basicCardCreate;