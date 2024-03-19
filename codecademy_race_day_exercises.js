// TASK 1
// Review Math.random code
let raceNumber = Math.floor(Math.random() * 1000);

// TASK 2
// Create a variable that indicates whether a runner registered early or not,
let earlyRegistration = false;

// TASK 3
// Creating var for runnersAge
let runnersAge = 21;

// TASK 4
// Create a control flow statement that checks whether the runner is an adult and resgistered early. Add 1000 to their race number if true. 
if (runnersAge > 18 && earlyRegistration === true) {
  raceNumber += 1000;
}

// TASK 5, 6, 7, and 9
// Create a control flow statement that checks for adult, early registration and late registration. Use console.log() to show race message and race number. Also include else if for youth runners.
if (runnersAge > 18 && earlyRegistration === true) {
  console.log(`Congratulations athlete, your race will start at 9:30 am and your race number will be: ${raceNumber}, good luck!`)
} else if (runnersAge > 18 && earlyRegistration === false) {
  console.log(`Congratulations athlete, your race will start at 11:00 am and your race number will be: ${raceNumber}, good luck!`)
} else if (runnersAge < 18) {
  console.log(`Congratulations athlete, your race will start at 12:30 pm and your race number will be: ${raceNumber}, good luck!`)
} else { // TASK 9
  console.log('Hi Athlete, it look\'s like you\'re 18 year\'s old. Please see the registration desk to continue with your registration. Thank you, and good luck out there!')
}

// TASK 8
// Try a few different combinations with earlyRegistration and runnersAge to verify that your code is working as expected. 

// TASK 9
// Don't forget about runners exactly 18 years old! Include an additional else statement in the control flow for runners exactly 18 years old instructing them to see the registration desk. 







