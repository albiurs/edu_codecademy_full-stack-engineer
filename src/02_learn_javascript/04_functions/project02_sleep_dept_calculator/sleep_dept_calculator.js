const getSleepHours = day => {
    day = day.toLowerCase();
    if(day === 'monday') {
        return 8;
    } else if(day === 'tuesday') {
        return 8;
    } else if(day === 'wednesday') {
        return 8;
    } else if(day === 'thursday') {
        return 8;
    } else if(day === 'friday') {
        return 8;
    } else if(day === 'saturday') {
        return 8;
    } else if(day === 'sunday') {
        return 8;
    }

}

// console.log(getSleepHours('Monday'));


// function with implicit return value in ()
const getActualSleepHours = () => (
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday')
)

// console.log(getActualSleepHours());


const getIdealSleepHours = (idealSleepHours) => {
    return idealSleepHours * 7;
}

// console.log(getIdealSleepHours());


const calculateSleepDebt = idealSleepHours => {
    let actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours(idealSleepHours);

    if(actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week.')
    } else {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week.')
        console.log('You should get some rest!');
    }
}

calculateSleepDebt(8.5);
