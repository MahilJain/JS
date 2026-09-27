// ============================================================================
// JAVASCRIPT COMPLETE REVISION ROADMAP
// From Basics to Expert Level
// ============================================================================

// ============================================================================
// LEVEL 1: FUNDAMENTALS
// ============================================================================

// ----------------------------------------------------------------------------
// 1.1 VARIABLES & DATA TYPES
// ----------------------------------------------------------------------------

// Variables: containers for storing data
// var - function scoped, can be redeclared (old way, avoid)
// let - block scoped, can be reassigned
// const - block scoped, cannot be reassigned

var oldWay = "I'm function scoped"; // Avoid using var
let modernWay = "I'm block scoped"; // Use for values that change
const CONSTANT = "I can't be reassigned"; // Use for constants

// Data Types:
// 1. Primitive: string, number, boolean, undefined, null, symbol, bigint
// 2. Reference: objects, arrays, functions

let myString = "Hello World"; // String
let myNumber = 42; // Number (integers and floats)
let myBoolean = true; // Boolean (true/false)
let myUndefined; // Undefined (declared but not assigned)
let myNull = null; // Null (intentional absence of value)
let mySymbol = Symbol("unique"); // Symbol (unique identifier)
let myBigInt = 9007199254740991n; // BigInt (very large integers)

// Type checking
console.log(typeof myString); // "string"
console.log(typeof myNumber); // "number"
console.log(typeof myBoolean); // "boolean"

// EXERCISE 1.1: Create variables for your name, age, isStudent status, and favorite number
// Try changing a const and observe the error


// ----------------------------------------------------------------------------
// 1.2 OPERATORS
// ----------------------------------------------------------------------------

// Arithmetic Operators
let a = 10, b = 3;
console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.333...
console.log(a % b); // Modulus (remainder): 1
console.log(a ** b); // Exponentiation: 1000
console.log(++a); // Increment: 11
console.log(--b); // Decrement: 2

// Comparison Operators
console.log(5 == "5"); // Loose equality: true (converts types)
console.log(5 === "5"); // Strict equality: false (checks type too)
console.log(5 != "5"); // Loose inequality: false
console.log(5 !== "5"); // Strict inequality: true
console.log(10 > 5); // Greater than: true
console.log(10 >= 10); // Greater than or equal: true

// Logical Operators
console.log(true && false); // AND: false (both must be true)
console.log(true || false); // OR: true (at least one must be true)
console.log(!true); // NOT: false (inverts boolean)

// Assignment Operators
let x = 5;
x += 3; // x = x + 3 (same for -=, *=, /=, %=)
console.log(x); // 8

// EXERCISE 1.2: Calculate the area of a circle (πr²) and check if it's greater than 50
let radius = 4;
let area = Math.PI * radius ** 2;
console.log(area > 50); // true/false depending on radius

// ----------------------------------------------------------------------------
// 1.3 CONDITIONALS
// ----------------------------------------------------------------------------

// if-else statement
let ageConditionals = 20;
if (ageConditionals >= 18) {
    console.log("You are an adult");
} else if (ageConditionals >= 13) {
    console.log("You are a teenager");
} else {
    console.log("You are a child");
}

// Ternary operator (shorthand)
let canVote = ageConditionals >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"

// switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("Weekend is coming!");
        break;
    default:
        console.log("Regular day");
}

// EXERCISE 1.3: Create a grade calculator (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60)
let A = 90, B = 80, C = 70, D = 60;
function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if(score >= 80 && score < 90){
        return "B"; 
    } else if(score >= 70 && score < 80){
        return "C";
    } else if(score >= 60 && score < 70){
        return "D";
    } else {
        return "F";
    }    

// ----------------------------------------------------------------------------
// 1.4 LOOPS
// ----------------------------------------------------------------------------

// for loop - when you know iteration count
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

// while loop - when condition-based iteration
let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`);
    count++;
}

// do-while loop - executes at least once
let num = 0;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num < 3);

// for...of loop - iterating over iterable objects
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

// for...in loop - iterating over object properties
let person = { name: "John", age: 30, city: "NYC" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// break and continue
for (let i = 0; i < 10; i++) {
    if (i === 3) continue; // Skip iteration when i is 3
    if (i === 7) break; // Exit loop when i is 7
    console.log(i);
}

// EXERCISE 1.4: Print all even numbers from 1 to 20 using different loop types
for(let i = 1 ; i <= 20; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

while(i <= 20){
    if(i %2 == 0){
        console.log(i);
    }
}


// ============================================================================
// LEVEL 2: INTERMEDIATE CONCEPTS
// ============================================================================

// ----------------------------------------------------------------------------
// 2.1 FUNCTIONS
// ----------------------------------------------------------------------------

// Function Declaration (hoisted - can be called before declaration)
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"

// Function Expression (not hoisted)
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8

// Arrow Functions (ES6+) - concise syntax
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

// Arrow function with multiple statements
const calculate = (a, b) => {
    let sum = a + b;
    let product = a * b;
    return { sum, product };
};

// Default Parameters
function power(base, exponent = 2) {
    return base ** exponent;
}
console.log(power(3)); // 9 (uses default exponent = 2)
console.log(power(3, 3)); // 27

// Rest Parameters (collect remaining arguments) (...numbers) means -> rest of the arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// EXERCISE 2.1: Create a function that takes an array of numbers and returns average
function avg(arr) {
    let total = arr.reduce((sum, num) => sum + num, 0);
    return total / arr.length;
}
console.log(avg([1, 2, 3, 4, 5])); // 3

// ----------------------------------------------------------------------------
// 2.2 SCOPE & HOISTING
// ----------------------------------------------------------------------------

// Global Scope - accessible everywhere
let globalVar = "I'm global";

function scopeDemo() {
    // Function Scope - accessible within function
    let functionVar = "I'm in function scope";
    
    if (true) {
        // Block Scope - accessible within block
        let blockVar = "I'm in block scope";
        console.log(blockVar); // Works
    }
    // console.log(blockVar); // Error: blockVar is not defined
    
    console.log(functionVar); // Works
    console.log(globalVar); // Works
}

// Hoisting - var and function declarations are moved to top
console.log(hoistedVar); // undefined (declaration hoisted, not initialization)
var hoistedVar = "I'm hoisted";

hoistedFunction(); // Works! Function declarations are fully hoisted
function hoistedFunction() {
    console.log("I can be called before declaration");
}

// let and const are NOT hoisted in the same way (Temporal Dead Zone)
// console.log(notHoisted); // ReferenceError
// let notHoisted = "Error";

// EXERCISE 2.2: Experiment with scope by trying to access variables from different scopes


// ----------------------------------------------------------------------------
// 2.3 CLOSURES
// ----------------------------------------------------------------------------

// Closure: function that has access to outer function's variables
// even after outer function has returned

function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
}

const closure = outerFunction("outside");
closure("inside"); // "Outer: outside, Inner: inside"

// Practical example: Counter with private variable
function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
// console.log(counter.count); // undefined (private!)

// EXERCISE 2.3: Create a function that generates unique IDs using closures


// ----------------------------------------------------------------------------
// 2.4 ARRAYS
// ----------------------------------------------------------------------------

// Array creation
let arr = [1, 2, 3, 4, 5];
let mixedArr = [1, "two", true, { name: "obj" }, [1, 2]];

// Common array methods

// Adding/Removing elements
arr.push(6); // Add to end: [1,2,3,4,5,6]
arr.pop(); // Remove from end: [1,2,3,4,5]
arr.unshift(0); // Add to beginning: [0,1,2,3,4,5]
arr.shift(); // Remove from beginning: [1,2,3,4,5]

// Slicing and splicing
let sliced = arr.slice(1, 3); // [2, 3] (doesn't modify original)
arr.splice(2, 1, 99); // Remove 1 element at index 2, insert 99

// Iteration methods
arr.forEach((item, index) => console.log(`${index}: ${item}`));

// Transformation methods
let doubledArr = arr.map(x => x * 2); // [2, 4, 198, 8, 10]
let filtered = arr.filter(x => x > 3); // Elements > 3
let reduced = arr.reduce((sum, x) => sum + x, 0); // Sum all elements

// Finding elements
let found = arr.find(x => x > 3); // First element > 3
let foundIndex = arr.findIndex(x => x > 3); // Index of first element > 3
let includes = arr.includes(99); // true if 99 exists

// Sorting
let sortNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
sortNumbers.sort((a, b) => a - b); // Ascending: [1,1,2,3,4,5,6,9]
sortNumbers.sort((a, b) => b - a); // Descending: [9,6,5,4,3,2,1,1]

// Other useful methods
let joined = arr.join("-"); // Convert to string with separator
let spread = [...arr, 6, 7]; // Spread operator
let concatenated = arr.concat([6, 7]); // Merge arrays

// EXERCISE 2.4: Given [1,2,3,4,5,6,7,8,9,10], filter evens, double them, sum the result


// ----------------------------------------------------------------------------
// 2.5 OBJECTS
// ----------------------------------------------------------------------------

// Object creation
let user = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    isActive: true,
    // Method shorthand
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};

// Accessing properties
console.log(user.name); // Dot notation
console.log(user["email"]); // Bracket notation (useful for dynamic keys)

// Adding/Modifying properties
user.phone = "123-456-7890"; // Add new property
user.age = 31; // Modify existing

// Deleting properties
delete user.phone;

// Object methods
let keys = Object.keys(user); // ["name", "age", "email", "isActive", "greet"]
let values = Object.values(user); // Array of values
let entries = Object.entries(user); // [[key, value], ...]

// Object destructuring
let { name, age: ageDestructured } = user;
console.log(name, ageDestructured); // "John Doe" 30

// Spread operator
let updatedUserObj = { ...user, age: 32, city: "NYC" };

// Object shorthand
let firstName = "Jane";
let lastName = "Smith";
let student = { firstName, lastName }; // { firstName: "Jane", lastName: "Smith" }

// this keyword
let car = {
    brand: "Toyota",
    model: "Camry",
    getInfo() {
        return `${this.brand} ${this.model}`;
    }
};
console.log(car.getInfo()); // "Toyota Camry"

// EXERCISE 2.5: Create a book object with properties and a method to display book info


// ----------------------------------------------------------------------------
// 2.6 DOM MANIPULATION (Browser Environment)
// ----------------------------------------------------------------------------

// Selecting elements
// let element = document.getElementById("myId");
// let elements = document.getElementsByClassName("myClass");
// let tags = document.getElementsByTagName("div");
// let query = document.querySelector(".myClass"); // First match
// let queryAll = document.querySelectorAll(".myClass"); // All matches

// Modifying elements
// element.textContent = "New text content";
// element.innerHTML = "<strong>Bold text</strong>";
// element.style.color = "blue";
// element.style.backgroundColor = "yellow";

// Adding/Removing classes
// element.classList.add("newClass");
// element.classList.remove("oldClass");
// element.classList.toggle("active");
// element.classList.contains("myClass"); // true/false

// Creating and adding elements
// let newDiv = document.createElement("div");
// newDiv.textContent = "I'm new!";
// document.body.appendChild(newDiv);

// Removing elements
// element.remove();
// parent.removeChild(child);

// Attributes
// element.getAttribute("href");
// element.setAttribute("href", "https://example.com");
// element.removeAttribute("disabled");

// EXERCISE 2.6: Create a todo list with add/remove functionality (needs HTML)


// ----------------------------------------------------------------------------
// 2.7 EVENTS
// ----------------------------------------------------------------------------

// Adding event listeners
// let button = document.querySelector("button");
// button.addEventListener("click", function(event) {
//     console.log("Button clicked!");
//     console.log(event.target); // The clicked element
// });

// Common events: click, dblclick, mouseenter, mouseleave, keydown, keyup, submit, change, load

// Event object properties
// event.preventDefault(); // Prevent default behavior
// event.stopPropagation(); // Stop event bubbling
// event.target; // Element that triggered event
// event.currentTarget; // Element with event listener

// Removing event listeners
// function handleClick() { console.log("Clicked"); }
// button.addEventListener("click", handleClick);
// button.removeEventListener("click", handleClick);

// Event delegation (for dynamic elements)
// document.body.addEventListener("click", function(e) {
//     if (e.target.matches(".dynamic-button")) {
//         console.log("Dynamic button clicked");
//     }
// });

// EXERCISE 2.7: Create a form that validates input on submit (needs HTML)


// ============================================================================
// LEVEL 3: ADVANCED CONCEPTS
// ============================================================================

// ----------------------------------------------------------------------------
// 3.1 ES6+ FEATURES
// ----------------------------------------------------------------------------

// Template Literals
let username = "Alice";
let message = `Welcome, ${username}!
This is a multi-line
template literal.`;

// Destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, second, rest); // 1 2 [3,4,5]

let { name: userName, age: userAge } = { name: "Bob", age: 25 };

// Spread and Rest
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Enhanced object literals
let propName = "score";
let student1 = {
    name: "Charlie",
    [propName]: 95, // Computed property name
    study() { return "Studying..."; } // Method shorthand
};

// Optional Chaining (?.)
let userProfile = { address: { city: "NYC" } };
console.log(userProfile?.address?.city); // "NYC"
console.log(userProfile?.contact?.phone); // undefined (no error)

// Nullish Coalescing (??)
let value = null;
console.log(value ?? "default"); // "default" (only for null/undefined)
console.log(0 ?? "default"); // 0 (0 is not null/undefined)

// EXERCISE 3.1: Refactor old code using ES6+ features (destructuring, arrow functions, etc.)


// ----------------------------------------------------------------------------
// 3.2 PROMISES
// ----------------------------------------------------------------------------

// Promise: represents eventual completion (or failure) of async operation

// Creating a promise
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 1000);
});

// Consuming a promise
myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Cleanup code"));

// Promise chaining
function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, name: "User" }), 1000);
    });
}

function fetchPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 1000);
    });
}

fetchUser()
    .then(user => {
        console.log("User:", user);
        return fetchPosts(user.id);
    })
    .then(posts => console.log("Posts:", posts))
    .catch(error => console.error(error));

// Promise.all - wait for all promises
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(results => console.log(results)); // [1, 2, 3]

// Promise.race - first settled promise wins
Promise.race([
    new Promise(resolve => setTimeout(() => resolve("fast"), 100)),
    new Promise(resolve => setTimeout(() => resolve("slow"), 500))
]).then(result => console.log(result)); // "fast"

// Promise.allSettled - wait for all, regardless of outcome
Promise.allSettled([
    Promise.resolve(1),
    Promise.reject("error"),
    Promise.resolve(3)
]).then(results => console.log(results));

// EXERCISE 3.2: Create a promise-based function to simulate API call with success/failure


// ----------------------------------------------------------------------------
// 3.3 ASYNC/AWAIT
// ----------------------------------------------------------------------------

// Async/await: syntactic sugar over promises, makes async code look synchronous

// Async function always returns a promise
async function getData() {
    return "Data fetched";
}
getData().then(data => console.log(data));

// Await pauses execution until promise resolves
async function fetchData() {
    try {
        let user = await fetchUser(); // Wait for promise
        console.log("User:", user);
        
        let posts = await fetchPosts(user.id); // Wait for next promise
        console.log("Posts:", posts);
        
        return { user, posts };
    } catch (error) {
        console.error("Error:", error);
    }
}

// Parallel execution with async/await
async function parallelFetch() {
    try {
        // Start both promises simultaneously
        let [users, posts] = await Promise.all([
            fetchUser(),
            fetchPosts(1)
        ]);
        console.log({ users, posts });
    } catch (error) {
        console.error(error);
    }
}

// Error handling with async/await
async function safeFetch() {
    try {
        let data = await fetchData();
        return data;
    } catch (error) {
        console.error("Caught:", error);
        return null;
    } finally {
        console.log("Cleanup");
    }
}

// EXERCISE 3.3: Convert promise chain from 3.2 to async/await syntax


// ----------------------------------------------------------------------------
// 3.4 MODULES (ES6)
// ----------------------------------------------------------------------------

// Exporting (in module.js)
// export const PI = 3.14159;
// export function square(x) { return x * x; }
// export default class Calculator { }

// Named exports
// export { PI, square };

// Importing
// import Calculator from './module.js'; // Default import
// import { PI, square } from './module.js'; // Named imports
// import * as MathUtils from './module.js'; // Import all
// import { PI as CirclePI } from './module.js'; // Rename import

// Dynamic imports
// async function loadModule() {
//     const module = await import('./module.js');
//     module.square(5);
// }

// EXERCISE 3.4: Create a utility module with math functions and import in main file


// ----------------------------------------------------------------------------
// 3.5 CLASSES
// ----------------------------------------------------------------------------

// Class declaration
class Animal {
    // Constructor
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    // Instance method
    speak() {
        return `${this.name} makes a sound`;
    }
    
    // Getter
    get info() {
        return `${this.name} is a ${this.species}`;
    }
    
    // Setter
    set nickname(value) {
        this._nickname = value;
    }
    
    // Static method (called on class, not instance)
    static compareAnimals(a1, a2) {
        return a1.species === a2.species;
    }
}

let dog = new Animal("Buddy", "Dog");
console.log(dog.speak()); // "Buddy makes a sound"
console.log(dog.info); // Getter

// Inheritance
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog"); // Call parent constructor
        this.breed = breed;
    }
    
    // Override parent method
    speak() {
        return `${this.name} barks!`;
    }
    
    // New method
    fetch() {
        return `${this.name} is fetching`;
    }
}

let retriever = new Dog("Max", "Golden Retriever");
console.log(retriever.speak()); // "Max barks!"
console.log(retriever.fetch()); // "Max is fetching"

// Private fields (ES2022)
class BankAccount {
    #balance = 0; // Private field
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); // Error: private field

// EXERCISE 3.5: Create a Vehicle class hierarchy (Vehicle -> Car -> ElectricCar)


// ----------------------------------------------------------------------------
// 3.6 PROTOTYPES
// ----------------------------------------------------------------------------

// Every object has a prototype (parent object)
// Prototype chain: object -> prototype -> prototype -> ... -> null

// Constructor function (pre-ES6 classes)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to prototype
Person.prototype.greet = function() {
    return `Hi, I'm ${this.name}`;
};

let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

console.log(person1.greet()); // "Hi, I'm Alice"
console.log(person1.greet === person2.greet); // true (shared method)

// Prototype chain
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (end of chain)

// Object.create - create object with specific prototype
let personProto = {
    greet() { return `Hello from ${this.name}`; }
};

let person3 = Object.create(personProto);
person3.name = "Charlie";
console.log(person3.greet()); // "Hello from Charlie"

// Checking prototype
console.log(person1 instanceof Person); // true
console.log(Person.prototype.isPrototypeOf(person1)); // true

// EXERCISE 3.6: Create a prototype chain: Animal -> Mammal -> Human


// ----------------------------------------------------------------------------
// 3.7 ERROR HANDLING
// ----------------------------------------------------------------------------

// try-catch-finally
function riskyOperation() {
    try {
        // Code that might throw error
        let result = JSON.parse("invalid json");
        return result;
    } catch (error) {
        // Handle error
        console.error("Error occurred:", error.message);
        return null;
    } finally {
        // Always executes (cleanup)
        console.log("Operation completed");
    }
}

// Throwing custom errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero!");
    }
    return a / b;
}

try {
    divide(10, 0);
} catch (error) {
    console.error(error.message);
}

// Custom error classes
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateAge(age) {
    if (age < 0) {
        throw new ValidationError("Age cannot be negative");
    }
    if (age > 150) {
        throw new ValidationError("Age too high");
    }
    return true;
}

try {
    validateAge(-5);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation failed:", error.message);
    } else {
        throw error; // Re-throw if not validation error
    }
}

// Error handling with async/await
async function fetchWithErrorHandling() {
    try {
        let response = await fetch("https://api.example.com/data");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch failed:", error);
        return null;
    }
}

// EXERCISE 3.7: Create a function that validates user input and throws custom errors


// ============================================================================
// LEVEL 4: EXPERT CONCEPTS
// ============================================================================

// ----------------------------------------------------------------------------
// 4.1 DESIGN PATTERNS
// ----------------------------------------------------------------------------

// Singleton Pattern - only one instance
const Singleton = (function() {
    let instance;
    
    function createInstance() {
        return { name: "Singleton Instance" };
    }
    
    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

let s1 = Singleton.getInstance();
let s2 = Singleton.getInstance();
console.log(s1 === s2); // true

// Module Pattern - encapsulation
const Calculator = (function() {
    // Private variables/functions
    let result = 0;
    
    function log(msg) {
        console.log(`[Calculator] ${msg}`);
    }
    
    // Public API
    return {
        add(x) {
            result += x;
            log(`Added ${x}, result: ${result}`);
            return this;
        },
        subtract(x) {
            result -= x;
            log(`Subtracted ${x}, result: ${result}`);
            return this;
        },
        getResult() {
            return result;
        }
    };
})();

Calculator.add(5).subtract(2); // Method chaining
console.log(Calculator.getResult()); // 3

// Observer Pattern - publish/subscribe
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
}

let emitter = new EventEmitter();
emitter.on("userLogin", data => console.log(`User logged in: ${data.name}`));
emitter.emit("userLogin", { name: "Alice" });

// Factory Pattern - object creation
class Car {
    constructor(type) {
        this.type = type;
    }
}

class CarFactory {
    static createCar(type) {
        switch(type) {
            case "sedan": return new Car("Sedan");
            case "suv": return new Car("SUV");
            default: return new Car("Unknown");
        }
    }
}

let sedan = CarFactory.createCar("sedan");

// EXERCISE 4.1: Implement a simple pub/sub system for a chat application


// ----------------------------------------------------------------------------
// 4.2 FUNCTIONAL PROGRAMMING
// ----------------------------------------------------------------------------

// Pure Functions - same input = same output, no side effects
function pureFn(a, b) {
    return a + b; // No external state modification
}

// Impure function (has side effects)
let total = 0;
function impureFn(x) {
    total += x; // Modifies external state
    return total;
}

// Higher-Order Functions - functions that take/return functions
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = multiplyBy(2);
let triple = multiplyBy(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// Function composition
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const addOne = x => x + 1;
const square = x => x * x;
const doubleIt = x => x * 2;

const combined = compose(doubleIt, square, addOne);
console.log(combined(3)); // ((3+1)^2)*2 = 32

// Currying - transform f(a,b,c) to f(a)(b)(c)
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

function add(a, b, c) {
    return a + b + c;
}

let curriedAdd1 = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6

// ============================================================================
// JAVASCRIPT REVISION PART 2 - EXPERT LEVEL & QUIZ
// ============================================================================

// ----------------------------------------------------------------------------
// 4.2 FUNCTIONAL PROGRAMMING (Continued)
// ----------------------------------------------------------------------------

// Currying - transform f(a,b,c) to f(a)(b)(c)
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

function add(a, b, c) {
    return a + b + c;
}

let curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6

// Immutability - never modify original data
const numbersImmutable = [1, 2, 3, 4, 5];

// Bad (mutates original)
// numbersImmutable.push(6);

// Good (creates new array)
const newNumbers = [...numbersImmutable, 6];
const doubledImmutable = numbersImmutable.map(x => x * 2);

// Immutable object updates
const userObj = { name: "John", age: 30 };
const updatedUserImmutable = { ...userObj, age: 31 }; // New object

// Memoization - cache function results
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log("From cache");
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

const fibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(40)); // Fast with memoization!

// Partial Application
function partial(fn, ...fixedArgs) {
    return function(...remainingArgs) {
        return fn(...fixedArgs, ...remainingArgs);
    };
}

function greet(greeting, name) {
    return `${greeting}, ${name}!`;
}

const sayHello = partial(greet, "Hello");
console.log(sayHello("Alice")); // "Hello, Alice!"

// EXERCISE 4.2: Create a pipe function (opposite of compose) and use it with 3+ functions


// ----------------------------------------------------------------------------
// 4.3 PERFORMANCE OPTIMIZATION
// ----------------------------------------------------------------------------

// Debouncing - delay execution until pause in events
function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Usage: search input
// const searchAPI = debounce((query) => {
//     console.log("Searching for:", query);
//     // API call here
// }, 500);
// inputElement.addEventListener("input", (e) => searchAPI(e.target.value));

// Throttling - limit execution frequency
function throttle(fn, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Usage: scroll event
// const handleScroll = throttle(() => {
//     console.log("Scroll position:", window.scrollY);
// }, 1000);
// window.addEventListener("scroll", handleScroll);

// Lazy Loading
function lazyLoad(fn) {
    let cached;
    return function() {
        if (cached === undefined) {
            cached = fn();
        }
        return cached;
    };
}

const expensiveOperation = lazyLoad(() => {
    console.log("Computing...");
    return Array(1000000).fill(0).map((_, i) => i * i);
});

// Virtual Scrolling concept
// For large lists, only render visible items
class VirtualList {
    constructor(items, itemHeight, containerHeight) {
        this.items = items;
        this.itemHeight = itemHeight;
        this.visibleCount = Math.ceil(containerHeight / itemHeight);
    }
    
    getVisibleItems(scrollTop) {
        const startIndex = Math.floor(scrollTop / this.itemHeight);
        const endIndex = startIndex + this.visibleCount;
        return this.items.slice(startIndex, endIndex);
    }
}

// Web Workers - run code in background thread
// In main.js:
// const worker = new Worker('worker.js');
// worker.postMessage({ data: [1, 2, 3] });
// worker.onmessage = (e) => console.log("Result:", e.data);

// In worker.js:
// self.onmessage = (e) => {
//     const result = heavyComputation(e.data);
//     self.postMessage(result);
// };

// EXERCISE 4.3: Implement a debounced search with at least 300ms delay


// ----------------------------------------------------------------------------
// 4.4 MEMORY MANAGEMENT
// ----------------------------------------------------------------------------

// Memory Leaks - common causes and fixes

// 1. Global variables (avoid)
// var leakyGlobal = "I live forever"; // Use let/const in proper scope

// 2. Forgotten timers
let intervalId = setInterval(() => {
    console.log("Running...");
}, 1000);

// Fix: Clear when done
function cleanup() {
    clearInterval(intervalId);
}

// 3. Detached DOM references
// let button = document.getElementById("myButton");
// document.body.removeChild(button);
// button is still referenced, preventing garbage collection
// Fix: button = null;

// 4. Closures retaining large objects
function createClosure() {
    const largeArray = new Array(1000000).fill("data");
    
    return function() {
        // This retains reference to largeArray
        return largeArray[0];
    };
}

// Better: only keep what you need
function createBetterClosure() {
    const largeArray = new Array(1000000).fill("data");
    const firstItem = largeArray[0];
    
    return function() {
        return firstItem; // Only retains firstItem, not entire array
    };
}

// WeakMap and WeakSet - don't prevent garbage collection
let weakMap = new WeakMap();
let obj = { name: "temp" };
weakMap.set(obj, "metadata");
// When obj is no longer referenced elsewhere, it can be garbage collected

// Memory profiling tips
// - Use Chrome DevTools Memory profiler
// - Take heap snapshots before/after operations
// - Look for detached DOM nodes
// - Monitor memory timeline

// EXERCISE 4.4: Identify and fix memory leak in a timer-based application


// ----------------------------------------------------------------------------
// 4.5 EVENT LOOP & CONCURRENCY
// ----------------------------------------------------------------------------

// JavaScript Event Loop: Call Stack -> Microtask Queue -> Macrotask Queue

console.log("1. Synchronous"); // Call stack

setTimeout(() => {
    console.log("2. Macrotask (setTimeout)"); // Macrotask queue
}, 0);

Promise.resolve().then(() => {
    console.log("3. Microtask (Promise)"); // Microtask queue
});

console.log("4. Synchronous"); // Call stack

// Output order: 1, 4, 3, 2
// Explanation:
// 1. Sync code runs first (Call Stack)
// 2. Microtasks run (Promises, queueMicrotask)
// 3. Macrotasks run (setTimeout, setInterval, I/O)

// Detailed example
async function asyncDemo() {
    console.log("A");
    
    setTimeout(() => console.log("B"), 0);
    
    await Promise.resolve();
    console.log("C");
    
    Promise.resolve().then(() => console.log("D"));
    
    console.log("E");
}

// Output: A, C, E, D, B

// Process.nextTick (Node.js) - runs before microtasks
// process.nextTick(() => console.log("nextTick"));
// Promise.resolve().then(() => console.log("Promise"));
// Output: nextTick, Promise

// requestAnimationFrame (Browser) - before next repaint
// requestAnimationFrame(() => {
//     console.log("Animation frame");
//     // DOM updates here
// });

// setImmediate (Node.js) - macrotask, after I/O
// setImmediate(() => console.log("Immediate"));
// setTimeout(() => console.log("Timeout"), 0);
// Output order depends on when they're scheduled

// Concurrency patterns

// 1. Sequential execution
async function sequential() {
    const result1 = await fetch("url1"); // Wait
    const result2 = await fetch("url2"); // Wait
    return [result1, result2];
}

// 2. Parallel execution
async function parallel() {
    const [result1, result2] = await Promise.all([
        fetch("url1"), // Both start simultaneously
        fetch("url2")
    ]);
    return [result1, result2];
}

// 3. Race condition
async function raceExample() {
    const fastest = await Promise.race([
        fetch("url1"),
        fetch("url2"),
        new Promise((_, reject) => 
            setTimeout(() => reject("Timeout"), 5000)
        )
    ]);
    return fastest;
}

// EXERCISE 4.5: Predict the output order of mixed sync/async code


// ----------------------------------------------------------------------------
// 4.6 MODERN FRAMEWORKS/LIBRARIES OVERVIEW
// ----------------------------------------------------------------------------

// React - Component-based UI library
// const MyComponent = ({ name }) => {
//     const [count, setCount] = React.useState(0);
//     
//     return (
//         <div>
//             <h1>Hello {name}</h1>
//             <button onClick={() => setCount(count + 1)}>
//                 Clicks: {count}
//             </button>
//         </div>
//     );
// };

// Vue - Progressive framework
// const app = Vue.createApp({
//     data() {
//         return { message: 'Hello Vue!' }
//     },
//     template: '<h1>{{ message }}</h1>'
// });

// Angular - Full framework
// @Component({
//     selector: 'app-root',
//     template: '<h1>{{title}}</h1>'
// })
// export class AppComponent {
//     title = 'Hello Angular';
// }

// Svelte - Compile-time framework
// <script>
//     let count = 0;
// </script>
// <button on:click={() => count++}>
//     Clicks: {count}
// </button>

// State Management
// - Redux: const store = createStore(reducer);
// - MobX: const state = observable({ count: 0 });
// - Zustand: const useStore = create((set) => ({ ... }));

// Build Tools
// - Webpack: Module bundler
// - Vite: Fast dev server and bundler
// - Parcel: Zero-config bundler
// - esbuild: Extremely fast bundler

// Testing
// - Jest: JavaScript testing framework
// - Mocha + Chai: Test framework + assertion library
// - Cypress: End-to-end testing
// - Testing Library: UI testing utilities

// EXERCISE 4.6: Research one framework and create a simple counter app


// ----------------------------------------------------------------------------
// 4.7 ADVANCED ASYNC PATTERNS
// ----------------------------------------------------------------------------

// Generator Functions - pausable functions
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Infinite generator
function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const seq = infiniteSequence();
console.log(seq.next().value); // 0
console.log(seq.next().value); // 1

// Async generators
async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

(async () => {
    for await (const num of asyncGenerator()) {
        console.log(num);
    }
})();

// Symbol.iterator - make objects iterable
const range = {
    from: 1,
    to: 5,
    
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (let num of range) {
    console.log(num); // 1, 2, 3, 4, 5
}

// Async iteration
async function* fetchPages(url) {
    let page = 1;
    while (page <= 3) {
        const data = await fetch(`${url}?page=${page}`);
        yield await data.json();
        page++;
    }
}

// EXERCISE 4.7: Create a generator that yields Fibonacci numbers


// ============================================================================
// COMPREHENSIVE QUIZ
// ============================================================================

// ----------------------------------------------------------------------------
// SECTION 1: FUNDAMENTALS (10 Questions)
// ----------------------------------------------------------------------------

/* Q1. What will be the output?
let x = 5;
let y = x++;
console.log(x, y);
a) 5, 5
b) 6, 5
c) 6, 6
d) 5, 6
*/

/* Q2. Which is true about const?
a) Value cannot be changed
b) Cannot be reassigned
c) Both a and b
d) Always creates immutable objects
*/

/* Q3. What's the output?
console.log(typeof null);
console.log(typeof undefined);
a) "object", "undefined"
b) "null", "undefined"
c) "object", "object"
d) "null", "null"
*/

/* Q4. What's the difference between == and ===?
a) No difference
b) == checks type, === doesn't
c) === checks type and value, == only value
d) === is faster
*/

/* Q5. What will this print?
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
a) 0, 1, 2
b) 3, 3, 3
c) 0, 0, 0
d) undefined, undefined, undefined
*/

/* Q6. Which loop executes at least once?
a) for
b) while
c) do-while
d) for...of
*/

/* Q7. What's the output?
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a.length);
a) 3
b) 4
c) undefined
d) Error
*/

/* Q8. What does NaN === NaN return?
a) true
b) false
c) undefined
d) Error
*/

/* Q9. Which operator doesn't exist in JavaScript?
a) **
b) ===
c) <>
d) ??
*/

/* Q10. What's the output?
console.log(5 + "5" - 5);
a) 50
b) 0
c) "50"
d) 555
*/

// ----------------------------------------------------------------------------
// SECTION 2: INTERMEDIATE (10 Questions)
// ----------------------------------------------------------------------------

/* Q11. What's the output?
function test() {
    console.log(a);
    var a = 5;
}
test();
a) 5
b) undefined
c) ReferenceError
d) null
*/

/* Q12. What does a closure capture?
a) Only variables
b) Only functions
c) Variables and their scope
d) Nothing
*/

/* Q13. What's the output?
const arr = [1, 2, 3];
const [a, , c] = arr;
console.log(a, c);
a) 1, 3
b) 1, 2
c) 1, undefined
d) Error
*/

/* Q14. Which array method doesn't mutate the original array?
a) push()
b) splice()
c) map()
d) sort()
*/

/* Q15. What's the output?
const obj = { a: 1, b: 2 };
const { a: x, b: y } = obj;
console.log(x);
a) undefined
b) a
c) 1
d) Error
*/

/* Q16. What does 'this' refer to in arrow functions?
a) The calling object
b) The enclosing scope
c) Global object
d) undefined
*/

/* Q17. What's the output?
[1, 2, 3].map(x => x * 2).filter(x => x > 3);
a) [2, 4, 6]
b) [4, 6]
c) [2, 4]
d) [6]
*/

/* Q18. Which is NOT a valid way to create an object?
a) new Object()
b) Object.create()
c) {}
d) Object()
*/

/* Q19. What's the output?
const arr = [1, 2, 3];
arr.length = 0;
console.log(arr);
a) [1, 2, 3]
b) []
c) undefined
d) Error
*/

/* Q20. What does spread operator do?
a) Creates shallow copy
b) Creates deep copy
c) Deletes elements
d) Nothing
*/

// ----------------------------------------------------------------------------
// SECTION 3: ADVANCED (10 Questions)
// ----------------------------------------------------------------------------

/* Q21. What's the output?
Promise.resolve(1)
    .then(x => x + 1)
    .then(x => { throw new Error("error"); })
    .catch(() => 1)
    .then(x => console.log(x));
a) 1
b) 2
c) Error
d) undefined
*/

/* Q22. What's the difference between Promise.all and Promise.race?
a) No difference
b) all waits for all, race for first
c) all is faster
d) race is deprecated
*/

/* Q23. What's the output?
async function test() {
    return 1;
}
console.log(test());
a) 1
b) Promise { 1 }
c) undefined
d) Error
*/

/* Q24. Which is TRUE about async/await?
a) It's syntactic sugar over promises
b) It makes code synchronous
c) It's faster than promises
d) It can't handle errors
*/

/* Q25. What's the output?
class Parent {
    name = "Parent";
}
class Child extends Parent {
    getName() {
        return this.name;
    }
}
console.log(new Child().getName());
a) undefined
b) "Parent"
c) "Child"
d) Error
*/

/* Q26. What's the prototype of an object literal?
a) Object
b) Object.prototype
c) null
d) undefined
*/

/* Q27. What's the output?
const obj = Object.create(null);
console.log(obj.toString());
a) "[object Object]"
b) Error
c) undefined
d) null
*/

/* Q28. Which is NOT a module system?
a) CommonJS
b) ES6 Modules
c) AMD
d) JSON
*/

/* Q29. What does Object.freeze() do?
a) Makes object immutable
b) Makes properties read-only
c) Both a and b
d) Nothing
*/

/* Q30. What's the output?
try {
    throw new Error("test");
} catch(e) {
    return 1;
} finally {
    return 2;
}
a) 1
b) 2
c) Error
d) undefined
*/

// ----------------------------------------------------------------------------
// SECTION 4: EXPERT (10 Questions)
// ----------------------------------------------------------------------------

/* Q31. What's the output order?
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
a) A, D, C, B
b) A, B, C, D
c) A, D, B, C
d) A, C, D, B
*/

/* Q32. What's a pure function?
a) Function with no side effects
b) Function that always returns same output for same input
c) Both a and b
d) Function with return statement
*/

/* Q33. What's currying?
a) Transform f(a, b) to f(a)(b)
b) Optimize function calls
c) Cache results
d) Compose functions
*/

/* Q34. What's the purpose of debouncing?
a) Speed up execution
b) Delay execution until pause
c) Execute immediately
d) Cache results
*/

/* Q35. What runs first after call stack is empty?
a) Macrotasks
b) Microtasks
c) Timers
d) I/O operations
*/

/* Q36. What's the output?
function* gen() {
    yield 1;
    yield 2;
}
const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
a) 1, 2, undefined
b) 1, 2, 2
c) 1, 1, 2
d) Error
*/

/* Q37. What's a WeakMap used for?
a) Strong references
b) Prevent memory leaks
c) Faster lookups
d) Store primitives
*/

/* Q38. What's the Singleton pattern?
a) One instance per class
b) Multiple instances
c) No instances
d) Abstract pattern
*/

/* Q39. What's memoization?
a) Caching function results
b) Optimizing loops
c) Compressing code
d) Type checking
*/

/* Q40. What's the Observer pattern?
a) Watch variables
b) Publish-subscribe mechanism
c) Monitor performance
d) Debug tool
*/

// ============================================================================
// ANSWER KEY
// ============================================================================

/* 
FUNDAMENTALS (Q1-Q10):
1. b    2. b    3. a    4. c    5. b
6. c    7. b    8. b    9. c    10. a

INTERMEDIATE (Q11-Q20):
11. b   12. c   13. a   14. c   15. c
16. b   17. b   18. d   19. b   20. a

ADVANCED (Q21-Q30):
21. a   22. b   23. b   24. a   25. b
26. b   27. b   28. d   29. c   30. b

EXPERT (Q31-Q40):
31. a   32. c   33. a   34. b   35. b
36. a   37. b   38. a   39. a   40. b

SCORING:
36-40: Expert Level ⭐⭐⭐⭐⭐
30-35: Advanced ⭐⭐⭐⭐
24-29: Intermediate ⭐⭐⭐
18-23: Beginner+ ⭐⭐
Below 18: Keep practicing! ⭐
*/

// ============================================================================
// PRACTICAL CODING EXERCISES
// ============================================================================

// EXERCISE 1: Create a debounced search function
// Requirements: Debounce user input with 300ms delay
function createDebouncedSearch() {
    // Your code here
}

// EXERCISE 2: Implement a simple Promise-based cache
// Requirements: Store results, return cached if available
class PromiseCache {
    constructor() {
        // Your code here
    }
    
    async get(key, fetchFn) {
        // Your code here
    }
}

// EXERCISE 3: Create a custom event emitter
// Requirements: on, off, emit methods, support multiple listeners
class CustomEventEmitter {
    // Your code here
}

// EXERCISE 4: Implement function composition
// Requirements: compose(f, g, h)(x) should return f(g(h(x)))
function compose(...fns) {
    // Your code here
}

// EXERCISE 5: Create a memoized recursive Fibonacci
// Requirements: Use memoization to optimize
function fibonacci(n) {
    // Your code here
}

// EXERCISE 6: Implement a simple virtual DOM differ
// Requirements: Compare two objects and return differences
function diff(oldVNode, newVNode) {
    // Your code here
}

// EXERCISE 7: Create a retry mechanism with exponential backoff
// Requirements: Retry failed promises with increasing delay
async function retryWithBackoff(fn, maxRetries = 3) {
    // Your code here
}

// EXERCISE 8: Implement a simple state management system
// Requirements: Subscribe to changes, update state immutably
class StateManager {
    // Your code here
}

// EXERCISE 9: Create a custom iterator for a data structure
// Requirements: Make a linked list iterable
class LinkedList {
    // Your code here with Symbol.iterator
}

// EXERCISE 10: Implement a simple async queue
// Requirements: Process promises sequentially
class AsyncQueue {
    // Your code here
}

// ============================================================================
// 🎯 REVISION ROADMAP SUMMARY
// ============================================================================

/*
WEEK 1: Fundamentals
- Day 1-2: Variables, Data Types, Operators
- Day 3-4: Conditionals, Loops
- Day 5-7: Practice exercises, small projects

WEEK 2: Intermediate
- Day 1-2: Functions, Scope, Closures
- Day 3-4: Arrays, Objects
- Day 5-6: DOM Manipulation, Events
- Day 7: Practice project (Todo app)

WEEK 3: Advanced
- Day 1-2: ES6+ Features, Promises
- Day 3-4: Async/Await, Modules
- Day 5-6: Classes, Prototypes, Error Handling
- Day 7: Practice project (API integration)

WEEK 4: Expert
- Day 1-2: Design Patterns, Functional Programming
- Day 3-4: Performance, Memory Management
- Day 5-6: Event Loop, Modern Frameworks
- Day 7: Build comprehensive project

🏆 FINAL PROJECT IDEAS:
1. Real-time chat application
2. Task management system with drag-drop
3. Weather app with geolocation
4. E-commerce product filter/search
5. Blog with markdown editor
6. Game (snake, tetris, quiz)
7. Dashboard with data visualization
8. Music player with playlist
9. Social media feed with infinite scroll
10. Calendar/scheduling app

📚 RECOMMENDED RESOURCES:
- MDN Web Docs (documentation)
- JavaScript.info (tutorials)
- FreeCodeCamp (practice)
- LeetCode/HackerRank (algorithms)
- GitHub (read others' code)

💪 PRACTICE TIPS:
1. Code every day (consistency > intensity)
2. Build projects, not just tutorials
3. Read others' code
4. Contribute to open source
5. Teach what you learn
6. Debug without looking at solutions first
7. Refactor old code with new knowledge
8. Stay updated with JS news

Good luck with your revision! 🚀
*/