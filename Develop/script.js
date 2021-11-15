// Assignment Code

var generateBtn = document.querySelector("#generate");

var charslconly = "abcdefghijklmnopqrstuvwxyz";
var charslttrsonly = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charslttrnmbr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charscmplt = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var inptpsswrdlngth = window.prompt("How long would you like your password to be? Please use numeric values only.")
var psswrdlngth = parseInt(inptpsswrdlngth);

console.log(psswrdlngth);

var cse = window.prompt("Would you like to include capitalized letters or only lower case? Please type yes or no.")
var casecorrect = cse.toLowerCase();

console.log(casecorrect);

var num = window.prompt("Would you like to include numbers? Please type yes or no.")
var numcorrect = num.toLowerCase();

console.log(numcorrect);

// Write password to the #password input

var writePassword = function() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
