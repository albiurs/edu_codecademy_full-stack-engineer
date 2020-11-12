const _ = {
    // my _.clamp solution
    // clamp(number, lower, upper) {
    //     let arr = [number, lower, upper, ];
    //
    //     // sort array
    //     let counter = 0;
    //
    //     while(counter < arr.length - 1) {
    //         if(arr[counter] > arr[counter + 1]) {
    //             // swap number and lower
    //             let tmp = arr[counter];
    //             arr[counter] = arr[counter + 1];
    //             arr[counter + 1] = tmp;
    //         }
    //         counter ++;
    //     }
    //     return arr[1];
    // },

    // CodeCademy's _.clamp solution:
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    // my _.inRange solutoion
    inRange(number, start, end = 0) {
        if(start > end) {
            [start, end] = [end, start];
        }
        return number >= start && number < end;
    }
};

console.log(_.clamp(3, 2, 4));    // 3
console.log(_.inRange(2, 1, 3));    // true













// Do not write or modify code below this line.
module.exports = _;