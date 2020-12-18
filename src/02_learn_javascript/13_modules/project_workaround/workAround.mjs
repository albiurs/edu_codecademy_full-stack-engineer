// import default export
import Employee from "./employee.mjs";

// import from export as alias
import {salary, setSalary, cadre, tax, benefits, bonus, reimbursement} from "./employee.mjs";


/*
Test import default export
 */
function getEmployeeInformation(inputSalary) {
    Employee.salary = inputSalary;
    console.log('Cadre: ' + Employee.getCadre());
    console.log('Tax: ' + Employee.calculateTax());
    console.log('Benefits: ' + Employee.getBenefits());
    console.log('Bonus: ' + Employee.calculateBonus());
    console.log('Reimbursement Eligibility: ' + Employee.reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);



/*
Test import from export as alias
 */
function getEmployeeInformationTwo(inputSalary) {
    // https://stackoverflow.com/questions/48168601/change-the-value-of-imported-variable-in-es6
    // salary = inputSalary;    // direct assignment to imported variable is not possible!!!
    setSalary(inputSalary);     // setterFunction() required to assign new value to imported variable!!!
    console.log('Cadre: ' + cadre());
    console.log('Tax: ' + tax());
    console.log('Benefits: ' + benefits());
    console.log('Bonus: ' + bonus());
    console.log('Reimbursement Eligibility: ' + reimbursement() + '\n');
}

getEmployeeInformationTwo(10000);
getEmployeeInformationTwo(50000);
getEmployeeInformationTwo(100000);

