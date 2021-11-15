// Assignment Code

var generateBtn = document.querySelector("#generate");

var charslwc = "abcdefghijklmnopqrstuvwxyz";
var charslttr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charslttrnmbr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charscmplt = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charslwcnmbr = "0123456789abcdefghijklmnopqrstuvwxyz";
var charslwcspcl = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
var charslwcspclnmbr = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
var charslttrspcl = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var psswrdgen = function() {

  var inptpsswrdlngth = window.prompt("How long would you like your password to be? Please use a numeric value between 8 and 128.")

  while(true) {

    var psswrdlngth = parseInt(inptpsswrdlngth);
    console.log(psswrdlngth);
  
    if(psswrdlngth > 127 || psswrdlngth < 7) {
    
      var inptpsswrdlngth = window.prompt("The password length you input is invalid. Please try again!");

      continue;

    } else if(psswrdlngth <= 128 || psswrdlngth >= 8) {

    break;  

    }

  }

  var cse = window.confirm("Would you like to include capitalized letters? Select okay for capital & lower case, cancel for only lower case");
      
      console.log(cse);

      if(cse = true) {

        var num = window.confirm("Would you like to include numbers? Select okay to include, cancel to exclude");
        console.log(num);

        if(num = true) {

          var spcl = window.confirm("Would you like to include special characters? Select okay to include, cancel to exclude");

          console.log(spcl);

          if(spcl = true) {

            // use charscmplt here
            for(var i = 1; i <= psswrdlngth; i++) {

              var pickanumber = Math.random() * (charscmplt.length - 1) +1;
              var roundednumber = Math.round(pickanumber);
              console.log(pickanumber);
              console.log(roundednumber);
              console.log(charscmplt.length);


              

              

            }

          } else {

            // use charslttrnmbr here

          }

        } else {

          var spcl = window.confirm("Would you like to include special characters? Select okay to include, cancel to exclude");

          console.log(spcl);

          if(spcl = true) {

            // use charslttrspcl here

          } else {

            // use charslttr here

          }

        }

      } else {

        var num = window.confirm("Would you like to include numbers? Select okay to include, cancel to exclude");
        console.log(num);

        if(num = true) {

          var spcl = window.confirm("Would you like to include special characters? Select okay to include, cancel to exclude");

          console.log(spcl);

          if(spcl = true) {

            // use charslwcspclnmbr here

          } else {

            // use charslwcnmbr here

          }

        } else {

          var spcl = window.confirm("Would you like to include special characters? Select okay to include, cancel to exclude");

          console.log(spcl);

          if(spcl = true) {

            // use charslwcspcl here

          } else {

            // use charslwc here

          }

        }

        }

}

psswrdgen();








// Write password to the #password input

var writePassword = function() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
