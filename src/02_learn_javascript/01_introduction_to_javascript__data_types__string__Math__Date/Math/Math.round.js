/**
 * Hello World
 * @returns {string}
 */
const greetWorld = () => 'Hello, World!';

console.log(greetWorld());

/**
 * age-dependent decision if one can vote.
 * @param age
 * @returns {boolean}
 */
const canIVote = age => age >= 18 ? true : false;

console.log(canIVote(18));
console.log(canIVote(17));


/**
 * Agrees if two statements are equal
 * @param statement_one
 * @param statement_two
 * @returns {string}
 */
const agreeOrDisagree = (statement_one, statement_two) => statement_one === statement_two ? 'You agree!' : 'You disagree!';

console.log(agreeOrDisagree("aa", "bb"));
console.log(agreeOrDisagree("aa", "aa"));


/**
 * calculates in which phase of life one is depending on the age
 * @param age
 * @returns {string}
 */
const lifePhase = age => {
    if(age >= 0 && age <= 3) {
        return 'baby';
    } else if(age >= 3 && age <= 12) {
        return 'child';
    } else if(age >= 13 && age <= 19) {
        return 'teen';
    } else if(age >= 20 && age <= 64) {
        return 'adult';
    } else if(age >= 65 && age <= 140) {
        return 'senior citizen';
    } else {
        return 'This is not a valid age';
    }
}

console.log(lifePhase(-1));
console.log(lifePhase(0));
console.log(lifePhase(3));
console.log(lifePhase(4));
console.log(lifePhase(12));
console.log(lifePhase(13));
console.log(lifePhase(19));
console.log(lifePhase(20));
console.log(lifePhase(64));
console.log(lifePhase(65));
console.log(lifePhase(140));
console.log(lifePhase(141));


/**
 * calculates the final avarage grade of three Number between 0 and 100.
 * @param grade1
 * @param grade2
 * @param grade3
 * @returns {string}
 */
const finalGrade = (grade1, grade2, grade3) => {
    if(!(grade1 < 0) && !(grade1 > 100) && !(grade2 < 0) && !(grade2 > 100) && !(grade3 < 0) && !(grade3 > 100)) {
        final_grade = (grade1 + grade2 + grade3) / 3;

        if(final_grade >= 0 && final_grade <= 59) {
            return 'F';
        } else if(final_grade >= 60 && final_grade <= 69) {
            return 'D';
        } else if(final_grade >= 70 && final_grade <= 79) {
            return 'C';
        } else if(final_grade >= 80 && final_grade <= 89) {
            return 'B';
        } else if(final_grade >= 90 && final_grade <= 100) {
            return 'A';
        } 
    }
    else {
            return 'You have entered an invalid grade.';
    }
}

console.log(finalGrade(10, 20, 30));


/**
 * Reports the rank of a name.
 * @param rank
 * @param lastName
 * @returns {string}
 */
const reportingForDuty = (rank, lastName) => (`${rank} ${lastName} reporting for duty!`);

console.log(reportingForDuty('Pivate', 'Fido'));


/**
 * Roll two dices and get the sum.
 * @returns {number}
 */
const rollTheDice = () => {
    // Math.random() gives us a random Number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a Number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
      let die1 = Math.floor(Math.random() * 6) + 1;
      let die2 = Math.floor(Math.random() * 6) + 1;
      return die1 + die2;
}

console.log(rollTheDice());


/**
 * calculates the weight of a mass on another planet.
 * @param earthWeight
 * @param planet
 * @returns {string|number}
 */
const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
        case 'Mercury':
            return earthWeight * 0.378;
            break;
        case 'Venus':
            return earthWeight * 0.907;
            break;
        case 'Mars':
            return earthWeight * 0.377;
            break;
        case 'Jupiter':
            return earthWeight * 2.36;
            break;
        case 'Saturn':
            return earthWeight * 0.916;
            break;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
            break;
    }
}

console.log(calculateWeight(1, 'Mercury'));


/**
 * returns if an input value is truthy or falsy
 * @param value
 * @returns {boolean}
 */
const truthyOrFalsy = (value) => {
    if(
        value === false ||
        value === 0 ||
        value === -0 ||
        value === 0n ||
        value === "" ||
        value === null ||
        value === undefined ||
        value === NaN
    ) {
        return false;
    }
    return true;
}

/* 
const truthyOrFalsy = value => {
    if (value) {
        return true
    }
    return false
}
 */

/*
// As a function declaration:
function truthyOrFalsy(value) {
    if (value) {
        return true
    } else {
        return false
    }
}

// Using a ternary: 
const truthyOrFalsy = value => value ? true : false 
*/

console.log(truthyOrFalsy(0n));
console.log(truthyOrFalsy('xx'));


/**
 * calculate the Number of imaginary Friends
 * @param totalNumberOfFriends
 * @returns {number}
 */
const numImaginaryFriends = totalNumberOfFriends => {
    numOfImaginaryFriends = Math.round(totalNumberOfFriends * .33);
    return numOfImaginaryFriends;
}

console.log(numImaginaryFriends(100));


/**
 * genereate a slilly scentense
 * @param adjective
 * @param verb
 * @param noun
 * @returns {string}
 */
const sillySentence = (adjective, verb, noun) => {
    return (`I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`);
}

console.log(sillySentence('excited', 'love', 'functions'));


/**
 * How old were you in a specific year?
 * @param currentAge
 * @param year
 * @returns {string}
 */
const howOld = (currentAge, year) => {
    let currentYear = new Date().getFullYear();
    let yearOfBirth = currentYear - currentAge;
    let yearDifference = year - currentYear;
    let newAge = currentAge + yearDifference;
    console.log(currentYear);
    console.log(yearOfBirth);
    console.log(yearDifference);
    console.log(newAge);

    if(year > currentYear) {
        return `You will be ${currentAge + yearDifference} in the year ${year}`;
    } else if(year < yearOfBirth) {
        return `The year ${year} was ${yearOfBirth - year} years before you were born`;
    } else if(year < currentYear && year > yearOfBirth) {
        return `You were ${newAge} in the year ${year}`;
    }
}

console.log(howOld(48, 2019));


/**
 * calculate genetic relationship
 * @param percentSharedDNA
 * @returns {string}
 */
const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'


/**
 * calculates the tip provided on a full price
 * @param quality
 * @param total
 * @returns {number}
 */
const tipCalculator = (quality, total) => {
    switch (quality) {
        case 'bad':
            return total * .05;
            break;
        case 'ok':
            return total * .15;
            break;
        case 'good':
            return total * .2;
            break;
        case 'excellent':
            return total * .3;
            break;
        default:
            return total * .18;
    }
}

console.log(tipCalculator('bad', 100));


/**
 * return emoticons
 * @param emotion
 * @returns {string}
 */
const toEmoticon = emotion => {
    switch(emotion) {
        case 'shrug':
            return '|_{"}_|';
            break;
        case 'smiley face':
            return ':)';
            break;
        case 'frowny face':
            return ':(';
            break;
        case 'winky face':
            return ';)';
            break;
        case 'heart':
            return '<3';
            break;
        default:
            return '|_(* ~ *)_|';
            break;
    }
}

console.log(toEmoticon('shrug'));
console.log(toEmoticon('any_input'));



const colorMessage = (favoriteColor, shirtColor) => {
    if(favoriteColor === shirtColor) {
      return 'The shirt is your favorite color!';
    }
}

console.log(colorMessage('blue', 'blue'));
