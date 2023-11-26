
// This code prints hello world!
console.log('hello world!');

let a = 5;
let b = 2;
console.log("a = ", a, ", b = ", b);

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);

console.log("a % b = ", a % b); // remainder division
console.log("a ** b = ", a ** b); // power, 5^2 = 25

console.log("a-- = ", a--, ", b++ = ", b++);
console.log("a = ", a, ", b = ", b);

console.log("--a = ", --a, ", ++b = ", ++b);
console.log("a = ", a, ", b = ", b);

a -= 4; // a = a - 4
console.log("a = ", a);

b += 3; // b = b + 3
console.log("b = ", b);

a = "7";
console.log("typeof a = ", typeof a, ", typeof b = ", typeof b);

// while comparing number in string explicitly converts to number.
console.log("a == b", a == b);

a++;
b = "8";

console.log("typeof a = ", typeof a);
console.log("typeof b = ", typeof b);

console.log("a = ", a, ", b = ", b);
console.log("a == b", a == b); // == can typecast string to number
console.log("a != b", a != b);

console.log("a === b", a === b); // === also checks datatype
console.log("a !== b", a !== b);

b++;
console.log("a = ", a, ", b = ", b);
console.log("a <= b", a <= b);
console.log("a >= b", a >= b);

a = false;
b = true;

console.log("a && b = ", a && b);
console.log("a || b = ", a || b);

console.log("!a = ", !a);
console.log("!b = ", !b);

// odd-even
let number = 10;

if (number % 2 === 0) {
        console.log('Even');
} else {
    console.log("Odd");
}

// if-else
let mode = 'light';

if (mode === 'dark') {
    color = 'black';
} else if (mode === 'light') {
    color = 'white';
} else {
    color = 'other';
}

console.log(mode);
console.log(color);

// single line condition
var age = 25;
// var age = 16;

let result = age >= 18 ? "adult" : "not adult";
console.log(result);

// Switch's MDN Documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Papayas':
  case 'Mangoes':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// Same as print() and input() used in python.
alert('hello world!');
let Name = prompt('Enter name :');
console.log('Hello', Name);

// Task 1
let num = prompt("Enter a number : ");
let n = 3;

if (num % n === 0) {
    console.log(num, `is a multiple of ${n}`);
} else {
    console.log(num, `is a NOT multiple of ${n}`);
}

// Task 2
let score = prompt('Enter your score : ');
grade = undefined;

if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 70 && score <= 89) {
    grade = 'B';
} else if (score >= 60 && score <= 79) {
    grade = 'C';
} else if (score >= 50 && score <= 69) {
    grade = 'D';
} else if (score >= 0 && score <= 59) {
    grade = 'F';
} else {
    console.log(score, 'is Out of Range.')
}

console.log('Your Grade is', grade);
console.log('Bye!')
