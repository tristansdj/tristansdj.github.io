/*
This is a comment with line breaks,
like in CSS
*/

// this is a single line comment (doesn't work in CSS)

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myName;
myName = 'Chris';

let myAge = 293;

myVar = 20;
var myVar;

let myArray = ['Chris', 20];
let firstItem = myArray[0];

let dog = { name: 'Spot', breed: 'Dalmatian"'};
let dogType = typeof dog;

let checkAge = (myAge === 21);

const iceCream = 'chocolate';
const myIceCream = prompt('What is your favorite icecream?')
if (myIceCream === iceCream) {
    alert('I love chocolate ice cream');
} else {
    alert("I don't like chocolate ice cream");
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

document.querySelector('body').onClick = function () {
    alert("Stop poking me!");
}

// Change the image upon clicking it 
let myImage = document.querySelector('#my-image');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Tristan-in-the-wild.jpeg') {
        myImage.setAttribute('src', 'images/Near-the-falls.jpeg');
    } else {
        myImage.setAttribute('src', 'images/Tristan-in-the-wild.jpeg');
    }
}

// Adding a personalized welcome message
let myButton = document.querySelector("button");
let myHeading2 = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading2.textContent = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading2.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}