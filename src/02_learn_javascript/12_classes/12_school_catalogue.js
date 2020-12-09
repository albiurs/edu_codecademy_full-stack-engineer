// School Catalogue
//
// Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.
//
// We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:
//
// School
//     Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
//     Getters: all properties have getters
//     Setters: the numberOfStudents property has a setter
//     Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
//
// Primary
//     Includes everything in the School class, plus one additional property
//     Properties: pickupPolicy (string)
//
// Middle
//     Does not include any additional properties or methods
//
// High
//     Includes everything in the School class, plus one additional property
//     Properties: sportsTeams (array of strings)
//
// If you’re looking for a challenge, create the constructor() and getters for the four classes above. Then, use the setter and methods specifications in steps five, six, and seven to finish the project.
//
// If you get stuck during this project or would like to see an experienced developer work through it, click “Get Help“ to see a project walkthrough video.


class School {

    constructor(name = '', level = 'primary' || 'middle' || 'high', numberOfStudents = 0) {
        this._name = '';
        this._level = '';
        this._numberOfStudents = '';
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeachers = ['']) {
        let randIndex = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randIndex];
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get level() {
        return this._level;
    }

    set level(value) {
        this._level = value;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(newNumberOfStudents) {
        Number.isInteger(newNumberOfStudents) ? this._numberOfStudents = newNumberOfStudents : console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
}



class PrimarySchool extends School {

    constructor(name, numberOfStudents, pickupPolicy = '') {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }

    set pickupPolicy(value) {
        this._pickupPolicy = value;
    }
}



class MiddleSchool extends School {

    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents);
    }
}



class HighSchool extends School {

    constructor(name, numberOfStudents, sportsTeams = ['']) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    // == getters & setters ==
    get sportsTeams() {
        return this._sportsTeams;
    }

    set sportsTeams(value) {
        this._sportsTeams = value;
    }
}



const lorraineHansbury = new PrimarySchool(
    'Lorraine Hansbury',
    514,
    'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
);

lorraineHansbury.quickFacts();

console.log(
    School.pickSubstituteTeacher(
        ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']
    )
);      // logs a random name from the array

console.log(lorraineHansbury);  // log the whole class object



const alSmith = new HighSchool(
    'Al E. Smith',
    415,
    ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
);

console.log(alSmith.sportsTeams);       // [ 'Baseball', 'Basketball', 'Volleyball', 'Track and Field' ]
console.log(alSmith["sportsTeams"]);    // [ 'Baseball', 'Basketball', 'Volleyball', 'Track and Field' ]

console.log(alSmith);  // log the whole class

