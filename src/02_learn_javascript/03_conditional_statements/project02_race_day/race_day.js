let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
const age = 25;

if(age > 18 && registeredEarly) {
    raceNumber += 1000;
}

if(age > 18 && registeredEarly) {
    console.log(`You will race at 9:30 and your race number will be ${raceNumber}`);
} else if (age > 18 && !registeredEarly) {
    console.log(`You will race at 11:00 and your race number will be ${raceNumber}`);
} else if (age < 18 ) {
    console.log(`You will race at 12:30 and your race number will be ${raceNumber}`);
} else {
    console.log('Please contact the registration desk.');
}
