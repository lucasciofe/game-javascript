//machine choice
var machine = 3;
function randomNumber(machine) {
  return Math.floor(Math.random() * machine + 1);
}

// this line bellow is for deploy test
// alert(randomNumber(machine));

// set 10 games and scores 
var game = 10;
var userScore = 0;
var robotScore = 0;

//looping for 10 games 
for(var i = 0; i < game ; i++){
  
  var machineChoice = randomNumber(machine); //call function randomNumber each time in the loop e and after reset the var machineChoice

  //collect data from user
  // 1 Rock 2 Paper 3 Scissor
  alert("Rock (1), Paper(2) and Scissor(3)")
  var choose = prompt("Choose your option: ")

 //Rock loop
  if (choose == 1) {
    if(machineChoice== 2){
      alert("Paper beats rock, Machine Win!");
      robotScore++;
    }else if(machineChoice==3){
      alert("Rock beats scissors, You Win!!!");
      userScore++;
    }else {
      alert("Drawn, try it again!");
    }
// Paper loop
  }else if (choose == 2){
    if (machineChoice== 1){
      alert("Paper beats rock, You Win!");
      userScore++;
    }else if (machineChoice == 3){
      alert("Scissor beats paper, Machine Win!");
      robotScore++;
    }else {
      alert("Drawn, try it again");
    }
//Scissor loop
  }else if (choose == 3){
    if (machineChoice == 1){
      alert("Rock beats scissor, Machine Win!");
      robotScore++
    }else if (machineChoice == 2){
      alert("Scissor beats paper, You win!");
      userScore++
    }else {
      alert("Drawn, try it again")
    }
  
  }

//invalid enter
  else {
    alert("Invalid number, try it again!!");
  }

}

alert("You win: "+ userScore + " Machine win: " + robotScore)