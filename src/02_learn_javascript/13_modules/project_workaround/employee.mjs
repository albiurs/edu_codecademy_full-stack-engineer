// WorkAround
//
// WorkAround is a human resources program that returns basic information about an employee, based on salary data. Using WorkAround, one can use an employee’s salary data to:
//
//     return the cadre of the of the employee, in other words, whether this employee is entry level, mid level, or senior level.
//     calculate employee tax rates
//     return employee benefits
//     calculate employee bonuses
//     calculate the total amount an employee can be reimbursed based on the total value of their health, housing, or wellness benefits
//
// WorkAround currently contains the data and functions in a single file, though they would like to modify the program so it makes use of JavaScript modules. Specifically, WorkAround asks you to demonstrate the different ways to export and import modules.


/*
Object to be exported
 */
let Employee = {
    salary: 100000,

    getCadre: function() {
        if (this.salary >= payGrades.entryLevel.minSalary && this.salary <= payGrades.entryLevel.maxSalary) {
            return 'entryLevel';
        } else if (this.salary >= payGrades.midLevel.minSalary && this.salary <= payGrades.midLevel.maxSalary) {
            return 'midLevel';
        } else return 'seniorLevel';
    },

    calculateTax: function() {
        return payGrades[this.getCadre()].taxMultiplier * this.salary;
    },

    getBenefits: function () {
        return payGrades[this.getCadre()].benefits.join(', ');
    },

    calculateBonus: function () {
        return .02 * this.salary;
    },

    reimbursementEligibility: function () {
        let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
        let totalBenefitsValue = 0;
        let employeeBenefits = payGrades[this.getCadre()].benefits;
        for (let i = 0; i < employeeBenefits.length; i++) {
            totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
        }
        return totalBenefitsValue;
    }
}



/*
The same as above, but as individual variables and functions to be exported
 */
let salary = 100000;

function setSalary(newSalary) {
    salary = newSalary;
}

let payGrades = {
    entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
    midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
    seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

function getCadre() {
    if (salary >= payGrades.entryLevel.minSalary && salary <= payGrades.entryLevel.maxSalary) {
        return 'entryLevel';
    } else if (salary >= payGrades.midLevel.minSalary && salary <= payGrades.midLevel.maxSalary) {
        return 'midLevel';
    } else return 'seniorLevel';
}

function calculateTax() {
    return payGrades[getCadre()].taxMultiplier * salary;
}

function getBenefits() {
    return payGrades[getCadre()].benefits.join(', ');
}

function calculateBonus() {
    return .02 * salary;
}

function reimbursementEligibility() {
    let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
    let totalBenefitsValue = 0;
    let employeeBenefits = payGrades[getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
        totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
}


/*
Exports
 */

// export as alias
export {salary, setSalary, getCadre as cadre, calculateTax as tax, getBenefits as benefits, calculateBonus as bonus, reimbursementEligibility as reimbursement};

// export default
export default Employee;