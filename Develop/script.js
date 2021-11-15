// Assignment Code

var generateBtn = document.querySelector("#generate");

// character sets

// lowercase only
var charslwc = "abcdefghijklmnopqrstuvwxyz";

// lowercase and uppercase letters only
var charslttr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// letters and numbers only
var charslttrnmbr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// letters, numbers, and special characters (the complete list)
var charscmplt = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// lowercase letters and numbers only
var charslwcnmbr = "0123456789abcdefghijklmnopqrstuvwxyz";

// lowercase letters and special characters only
var charslwcspcl = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()";

// lowercase letters, special characters, and numbers only
var charslwcspclnmbr = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()";

// lowercase letters, uppercase letters, and special characters only
var charslttrspcl = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// creating a blank password for the loop to add on to
var psswrd = ""

var psswrdgen = function() {

  var inptpsswrdlngth = window.prompt("How long would you like your password to be? Please use a numeric value between 8 and 128.")

  while(true) {

    var psswrdlngth = parseInt(inptpsswrdlngth);
    console.log(psswrdlngth);
  
    if(psswrdlngth > 128 || psswrdlngth < 8) {
    
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

              psswrd += charscmplt.substring(roundednumber, roundednumber +1);

              console.log(psswrd)

              // first test done, it works!

            }

          } else {

            // use charslttrnmbr here
            for(var i = 1; i <= psswrdlngth; i++) {

              var pickanumber = Math.random() * (charslttrnmbr.length - 1) +1;
              var roundednumber = Math.round(pickanumber);
              console.log(pickanumber);
              console.log(roundednumber);
              console.log(charslttrnmbr.length);

              psswrd += charslttrnmbr.substring(roundednumber, roundednumber +1);

              console.log(psswrd)

            }

          }

        } else {

          var spcl = window.confirm("Would you like to include special characters? Select okay to include, cancel to exclude");

          console.log(spcl);

          if(spcl = true) {

            // use charslttrspcl here
            for(var i = 1; i <= psswrdlngth; i++) {

              var pickanumber = Math.random() * (charslttrspcl.length - 1) +1;
              var roundednumber = Math.round(pickanumber);
              console.log(pickanumber);
              console.log(roundednumber);
              console.log(charslttrspcl.length);

              psswrd += charslttrspcl.substring(roundednumber, roundednumber +1);

              console.log(psswrd)

            }

          } else {

            // use charslttr here
            for(var i = 1; i <= psswrdlngth; i++) {

              var pickanumber = Math.random() * (charslttr.length - 1) +1;
              var roundednumber = Math.round(pickanumber);
              console.log(pickanumber);
              console.log(roundednumber);
              console.log(charslttr.length);

              psswrd += charslttr.substring(roundednumber, roundednumber +1);

              console.log(psswrd)

            }

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
            for(var i = 1; i <= psswrdlngth; i++) {

              var pickanumber = Math.random() * (charslwcspclnmbr.length - 1) +1;
              var roundednumber = Math.round(pickanumber);
              console.log(pickanumber);
              console.log(roundednumber);
              console.log(charslwcspclnmbr.length);

              psswrd += charslwcspclnmbr.substring(roundednumber, roundednumber +1);

              console.log(psswrd)

            }

          } else {

            // use charslwcnmbr here
            for(var i = 1; i <= psswrdlngth; i++) {

              var pickanumber = Math.random() * (charslwcnmbr.length - 1) +1;
              var roundednumber = Math.round(pickanumber);
              console.log(pickanumber);
              console.log(roundednumber);
              console.log(charslwcnmbr.length);

              psswrd += charslwcnmbr.substring(roundednumber, roundednumber +1);

              console.log(psswrd)

            }

          }

        } else {

          var spcl = window.confirm("Would you like to include special characters? Select okay to include, cancel to exclude");

          console.log(spcl);

          if(spcl = true) {

            // use charslwcspcl here
            for(var i = 1; i <= psswrdlngth; i++) {

              var pickanumber = Math.random() * (charslwcspcl.length - 1) +1;
              var roundednumber = Math.round(pickanumber);
              console.log(pickanumber);
              console.log(roundednumber);
              console.log(charslwcspcl.length);

              psswrd += charslwcspcl.substring(roundednumber, roundednumber +1);

              console.log(psswrd)

            }

          } else {

            // use charslwc here
            for(var i = 1; i <= psswrdlngth; i++) {

              var pickanumber = Math.random() * (charslwc.length - 1) +1;
              var roundednumber = Math.round(pickanumber);
              console.log(pickanumber);
              console.log(roundednumber);
              console.log(charslwc.length);

              psswrd += charslwc.substring(roundednumber, roundednumber +1);

              console.log(psswrd)

            }

          }

        }

        }

}

psswrdgen();

// Write password to the #password input

var writePassword = function() {

  var password = psswrd

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
