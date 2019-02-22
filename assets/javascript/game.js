//create variable to hold random number to match
var targetNumber = [Math.floor((Math.random() * 100) + 10)];
//print number to page
$("#objective").text(targetNumber);

//create variables for resulting number, wins, and losses
var counter = 0;
var wins = 0;
var losses = 0;

//create variables that hold random numbers assigned to each crystal
var blueOptions = [Math.floor((Math.random() * 10) + 1)];
var greenOptions = [Math.floor((Math.random() * 10) + 1)];
var purpleOptions = [Math.floor((Math.random() * 10) + 1)];
var whiteOptions = [Math.floor((Math.random() * 10) + 1)];

//create loop for blue crystal 
for (var i = 0; i < blueOptions.length; i++) {
  //create variable to hold image
  var crystalBlue = $("<img>");
  //add class for css
  crystalBlue.addClass("crystal-blue");
  //link image of crystal
  crystalBlue.attr("src", "assets/images/blue.jpg");
  //add attribute
  crystalBlue.attr("data-crystalvalue", blueOptions[i]);
  $("#crystals-blue").append(crystalBlue);
}

//loop for green crystal
for (var i = 0; i < greenOptions.length; i++) {
  //create variable to hold image
  var crystalGreen = $("<img>");
  //add class for css
  crystalGreen.addClass("crystal-green");
  //link image of crystal
  crystalGreen.attr("src", "assets/images/green.jpg");    
  crystalGreen.attr("data-crystalvalue", greenOptions[i]);
  $("#crystals-green").append(crystalGreen);
}

//loop for purple crystal
for (var i = 0; i < purpleOptions.length; i++) {
  var crystalPurple = $("<img>");
  crystalPurple.addClass("crystal-purple");
  crystalPurple.attr("src", "assets/images/purple.jpg");
  crystalPurple.attr("data-crystalvalue", purpleOptions[i]);    
  $("#crystals-purple").append(crystalPurple);
}

//loop for white crystal
for (var i = 0; i < whiteOptions.length; i++) {
  var crystalWhite = $("<img>");
  crystalWhite.addClass("crystal-white");
  crystalWhite.attr("src", "assets/images/white.jpg");
  crystalWhite.attr("data-crystalvalue", whiteOptions[i]);
  $("#crystals-white").append(crystalWhite);
}



//onclick function for blue
$(".crystal-blue").on("click", function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  $("#result").text(counter);
      if (counter == targetNumber) {
          wins ++;
          $("#wins").text(wins);
          $("#alert").text('You Win!');
          reset();
      }else if (counter >= targetNumber) {
          losses++;
          $("#losses").text(losses);
          $("#alert").text('You Lose!');
          reset();
      }        
});

//onclick function for green
$(".crystal-green").on("click", function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  $("#result").text(counter);
      if (counter == targetNumber) {
          wins ++;
          $("#wins").text(wins);
          $("#alert").text('You Win!');
          reset();
      }else if (counter >= targetNumber) {
          losses++;
          $("#losses").text(losses);
          $("#alert").text('You Lose!');
          reset();
      }
});

//onclick function for purple
$(".crystal-purple").on("click", function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  $("#result").text(counter);
      if (counter == targetNumber) {
          wins ++;
          $("#wins").text(wins);
          $("#alert").text('You Win!');
          reset();
      }else if (counter >= targetNumber) {
          losses++;
          $("#losses").text(losses);
          $("#alert").text('You Lose!');
          reset();
      }
});

//onclick function for white
$(".crystal-white").on("click", function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  $("#result").text(counter);
      if (counter == targetNumber) {
          wins ++;
          $("#wins").text(wins);
          $("#alert").text('You Win!');
          reset();
      }else if (counter >= targetNumber) {
          losses++;
          $("#losses").text(losses);
          $("#alert").text('You Lose!');
          reset();
      }
});

function reset (){
  counter=0;
  $("#objective").text(targetNumber);
  targetNumber=[Math.floor((Math.random() * 100) + 20)];
  $("#result").text(counter);
  blueOptions = [Math.floor((Math.random() * 10) + 1)];
  greenOptions = [Math.floor((Math.random() * 10) + 1)];
  purpleOptions = [Math.floor((Math.random() * 10) + 1)];
  whiteOptions = [Math.floor((Math.random() * 10) + 1)];
}