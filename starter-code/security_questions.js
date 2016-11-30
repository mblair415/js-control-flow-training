console.log("security_questions.js loaded");


var securityQuestions = [
	{ question: "Where were you born", answer: "Texas" },
 	{ question: "What is your favorite number", answer: "43" },
	{ question: "What is your favorite fruit", answer: "pineapple" }
];

// prompt("this is a test");

for (var i = 0; i < securityQuestions.length; i++) {
	var userAnswer = prompt(securityQuestions[i].question);
	if (userAnswer !== securityQuestions[i].answer) {
		alert("I don't know you!  That's my purse!");
    break;
	}
}
