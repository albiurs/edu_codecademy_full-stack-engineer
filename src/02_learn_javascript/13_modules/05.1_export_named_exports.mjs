// Import Named Imports
//
// To import variables that are declared, we simply use the original syntax that describes the variable name.
// In other words, exporting upon declaration does not have an impact on how we import the variables.
//
import { specialty, isVegetarian } from './05.0_export_named_exports.mjs';

console.log(specialty);





import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './05.0_export_named_exports.mjs';

function displayFuelCapacity() {
    availableAirplanes.forEach(function(element) {
        console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
    });
}

function displayStaffStatus() {
    availableAirplanes.forEach(element => {
        console.log(
            element.name +
            ' meets staff requirements: ' +
            meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff)
        );
    })
}

// function displayStaffStatus() {
//     availableAirplanes.forEach(function(element) {
//         console.log(
//             element.name +
//             ' meets staff requirements: ' +
//             meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff)
//         );
//     });
// }

function displaySpeedRangeStatus() {
    availableAirplanes.forEach(function(element) {
        console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
    });
}

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();

