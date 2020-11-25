var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;

for (let key in person) {
    console.log(key);   // returns the key
    text += person[key] + " ";
}

console.log(text);