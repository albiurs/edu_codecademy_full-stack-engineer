// Combining Import Statements
//
// We can import the collection of objects and functions with the same data.
//
// We can use an import keyword to import both types of variables as such:
//
// import { specialty, isVegetarian, isLowSodium } from './menu';
//
// import GlutenFree from './menu';




import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './07.0_combining_export_statements.mjs';
import meetsSpeedRangeRequirements from './07.0_combining_export_statements.mjs';


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

function displaySpeedRangeStatus() {
    availableAirplanes.forEach(function(element) {
        console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
    });
}

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();

