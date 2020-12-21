// A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number.
// For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.
//
// Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should
// have two methods:
//     encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the
//     alphabet based on the set shift value.
//     decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet
//     based on the set shift value.
//     In both methods, any character outside the alphabet should remain the same.
//     But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other
//     side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.
//
// Example:

// const cipher = new ShiftCipher(2);
// cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
// cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'

// Feel free to reference the Unicode Table
// https://en.wikipedia.org/wiki/List_of_Unicode_characters
// as well as the JavaScript String methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// including:
// toUpperCase(), toLowerCase(), charCodeAt() and fromCharCode()


class ShiftCipher {
    constructor(shiftNumber) {
        this.shiftNumber = shiftNumber;
        this.encryptFlag = null;
    }


    encrypt(str = '') {
        this.encryptFlag = true;
        let encryptedString = this.cryptomator(str);
        this.encryptFlag = null;
        return encryptedString;
    }


    decrypt(str = '') {
        this.encryptFlag = false;
        let decryptedString = this.cryptomator(str);
        this.encryptFlag = null;
        return decryptedString;
    }


    /**
     * cryptomator()
     * Encrypts or decrypts a string depending on the this.encryptFlag.
     * @param str
     * @returns {string}
     */
    cryptomator(str = '') {
        let strArr = str.split("");
        let newStrArr = [];
        let tmpShiftNumber = null;
        this.encryptFlag ? tmpShiftNumber = this.shiftNumber : tmpShiftNumber = -this.shiftNumber;

        for(let i=0; i<strArr.length; i++) {
            let char = str[i];
            let unicodeChar = char.charCodeAt(0);


            if((/[a-zA-Z]/).test(char)) {
                if(tmpShiftNumber >= 0) {
                    if(
                        (unicodeChar >= 65 && unicodeChar + tmpShiftNumber <= 90) ||
                        (unicodeChar >= 97 && unicodeChar + tmpShiftNumber <= 122)
                    ) {
                        unicodeChar += tmpShiftNumber;
                    } else {
                        unicodeChar = unicodeChar + tmpShiftNumber - 26;
                    }
                } else if (tmpShiftNumber < 0) {
                    if(
                        (unicodeChar <= 90 && unicodeChar + tmpShiftNumber >= 65) ||
                        (unicodeChar <= 122 && unicodeChar + tmpShiftNumber >= 97)
                    ) {
                        unicodeChar += tmpShiftNumber;
                    } else {
                        unicodeChar = unicodeChar + tmpShiftNumber + 26;
                    }
                }
            }

            newStrArr[i] = String.fromCharCode(unicodeChar);
        }

        if(this.encryptFlag) {
            return newStrArr.join("").toUpperCase();
        } else {
            return newStrArr.join("").toLowerCase();
        }

    }



}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // K NQXG VQ EQFG!
console.log(cipher.decrypt('K NQXG VQ EQFG!')); // i love to code!
console.log(cipher.encrypt('i <3 my puppy'));   // K <3 OA RWRRA
console.log(cipher.decrypt('K <3 OA RWRRA'));   // i <3 my puppy

const cipherTwo = new ShiftCipher(-1);
console.log(cipherTwo.encrypt('I love to code!')); // H KNUD SN BNCD!
console.log(cipherTwo.decrypt('H KNUD SN BNCD!')); // i love to code!














