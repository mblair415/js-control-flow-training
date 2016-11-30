console.log("login.js loaded");

var userLogin = {
  userName : "Paul",
  userPassword : "123456"
};

var loginAttempt = 0;
var loggedIn = false;

while (!loggedIn) {
  userAnswer2 = prompt("Enter password for " + userLogin.userName + ".");
  if (userAnswer2 === userLogin.userPassword) {
    console.log("Passwords match!");
    loggedIn = true;
  } else {
    console.log("Bad password");
    // loginAttempt += 1;
  }
}

// var passwordInput;
//
// var loggedIn = false;
//
// while (!loggedIn){
// 	passwordInput = prompt("Enter password for user " + userLogin.userName + ".")
// 	if (passwordInput === userLogin.password){
// 		console.log("Passwords match!");
//     loggedIn = true;
// 	} else {
// 		console.log("Passwords do not match. Try Again!");
// 	}
// }
