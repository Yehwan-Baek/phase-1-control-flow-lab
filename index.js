function scuberGreetingForFeet(feet){
  // Write your code here!
  if(feet <= 400){
    console.log("This one is on me!")
  } else if(feet <= 2000){
    console.log("That will be twenty bucks.")
  } else if(2000 < feet && feet <= 2500){
    console.log("I will gladly take your thirty bucks.")
  } else {
    console.log("No can do.")
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  city === NYC ? console.log("ok, sounds good") : console.log("No go.")
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
  case 'generous' : console.log("Thank you so much.") ;
  case 'not as generous' : console.log("Thank you.") ;
  break;
  default : console.log("Bye.") ;
  }
}