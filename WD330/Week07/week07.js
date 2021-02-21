let squareDiv = document.getElementById("square");
let helloDiv = document.getElementById("hello");
let sayHelloDiv = document.getElementById("sayHelloDiv");
let iffy1Div = document.getElementById("iffy1");
let iffy2Div = document.getElementById("iffy2");
let swappingDiv = document.getElementById("swapping");
let partyDiv = document.getElementById("party");
let recursiveDiv = document.getElementById("recursive");
let promiseDiv = document.getElementById("promise");

const dora = { name: 'Dora'};
const ashlee = { name: 'Ashlee'};

// Square function (arrow).
const square = x => x*x;
let appendSquare = " = " + square(5);
//squareDiv.innerHTML = square(5);
squareDiv.append(appendSquare);

// sayHello function (arrow).
//const sayHello = () => `Hello, my name is ${this.name}`;
function sayHello() {
    return `Hello, my name is ${this.name}.`;
}
let appendHello = sayHello.call(dora);
helloDiv.append(appendHello);

// Using the call() method.
function sayHelloAshlee(greeting='Hello') {
    return `${greeting} My name is ${this.name}.`;
}
let appendSayHello = sayHelloAshlee.call(ashlee, 'Howdy!');
sayHelloDiv.append(appendSayHello);

// IFFE
(function() {
    const name = 'Ikora Rey';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(), today = days[date.getDay()];

    let appendiffy1 = `Welcome back ${name}. Today is ${today}.`;

    iffy1Div.append(appendiffy1);
})();

// IFFE as a block format.
{
    const name = 'Commander Zavala';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(), today = days[date.getDay()];

    let appendiffy2 = `Welcome back ${name}. Today is ${today}.`;

    iffy2Div.append(appendiffy2);
}

// Swapping Values.
let [a, b] = [1, 2];
[a, b] = [b, a];

let appendSwapping = `a = ${a}. b = ${b}.`;

swappingDiv.append(appendSwapping);

// Functions that define and redefine themselves.
function party() {
    let amazing = `>> Wow! This is amazing!`;

    party = function() {
       amazing = `>> Been there, got the T-Shirt.`;

       return amazing;
    }

    return amazing;
}

const beachParty = party;
const addP1 = document.createElement('p');
const addP2 = document.createElement('p');
const addP3 = document.createElement('p');
const addP4 = document.createElement('p');
const lineBreak = document.createElement('br');

// First Call
addP1.append(beachParty());
addP1.appendChild(lineBreak);
partyDiv.appendChild(addP1);

// Second Call
addP2.append(party());
addP2.appendChild(lineBreak);
partyDiv.appendChild(addP2);

// Third Call
addP3.append(party());
addP3.appendChild(lineBreak);
partyDiv.appendChild(addP3);

// Fourth Call
addP4.append(beachParty());
addP4.appendChild(lineBreak);
partyDiv.appendChild(addP4);

// Recursive Fuctions
function factorial(factorialN) {
    if (factorialN === 0) {
        return 1;
    }
    else {
        return factorialN * factorial(factorialN - 1);
    }
}

let appendRecursive = factorial(5);
recursiveDiv.append(appendRecursive);

//Promises
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) +1;
    }
}

const addP5 = document.createElement('p');
const addP6 = document.createElement('p');
const addP7 = document.createElement('p');

addP5.append(">> Before the roll..");
addP5.appendChild(lineBreak);
promiseDiv.appendChild(addP5);

const roll = new Promise( (resolve, reject) => {
    const m = dice.roll();
    if(m > 1) {
        setTimeout( () => {resolve(m)}, m*2000);
    }
    else {
        setTimeout( () => reject(m), m*2000);
    }
});

roll.then(result => addP6.append(`>> I rolled a ${result}.`))
    .catch(result => addP6.append(`>> Drat! . . . I rolled a ${result}!`));
addP6.appendChild(lineBreak);
promiseDiv.appendChild(addP6);

addP7.append(">> After the roll.");
addP7.appendChild(lineBreak);
promiseDiv.appendChild(addP7);

// AJAX
const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

// URL's assigned to variables. Cleaner and easier.
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

// Event handler for the Number Button.
// Constructs a fetch request. Returns a promise.
textButton.addEventListener('click', () => {
    fetch(textURL).then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.text() )
    .then( text => outputDiv.innerText = text )
    .catch( error => console.log('There was an error:', error))
    },false);
    
// Event handler for the Fact button.
apiButton.addEventListener('click', () => {
    fetch(apiURL).then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
         })
        .then( response => response.json() )
        .then( data => outputDiv.innerText = data.value )
        .catch( error => console.log('There was an error:', error))
    },false);
    