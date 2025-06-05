
// Objects of Objects
const person = {
    perInfo : {
        Name : "Bardan",
        Age : 23,
        Height : 65,
        Weight : 156,
    },
    car : {
        Make : "Acura",
        Model : "TL",
        Year : 2004,
        Color : "Silver"
    },
    education : {
        Degree : "Associate Degree",
        College : "Dallas College"
    }
};

//Methods

const person2 = {
    perInfo : {
        name : "Bardan",
        age : 23,
        height : 65,
        weight : 156,
    },
    car : {
        make : "Acura",
        model : "TL",
        year : 2004,
        color : "Silver",
        // Methods
        //One Way
        runVeh : function(){
            console.log("Vehicle running");
            console.log(this);
        },
        stopVeh() {
            console.log("Stopping vehicle");
        }
    },
    education : {
        degree : "Associate Degree",
        college : "Dallas College"
    }
};

console.log(this);



//Functions 

// Definition
// function morningRout(){
//     console.log("Wake Up");
//     console.log("Freshen Up");
//     console.log("Breakfast");
// }

// Another ways of defining function

// let rout = function (){
//     console.log("Wake Up");
//     console.log("Freshen Up");
//     console.log("Breakfast");
// }

// Another ways of defining function = using arrow

// let rout = () => {
//     console.log("Wake Up");
//     console.log("Freshen Up");
//     console.log("Breakfast");
// }


// Higher Order Function
/* Function that takes function as argument*/

let doThis = () => {
    console.log("Have to do this in morining.");
}
 
let rout = (doThis) => {
        doThis();

        console.log("Wake Up");
        console.log("Freshen Up");
        console.log("Breakfast");

        
    }

rout(doThis);

// Gives error and stop the code
//console.lg(0);

// If error, executes catch and continue executing code.
// try{
//     console.lg(0/0);
// }catch{
//     console.log("error");
// }

// console.log("I am here");

// setInterval

// let mul = setInterval( (num = 10) => {
//     for(let i = num; i <= num*10; i+=10)
//     {
//         console.log(i);
//     }
//     console.log(this);
// }, 2000);

// setTimeout(() => {
//     clearInterval(mul);
//     console.log("stopped");
// }, 6000);


// forEach
// Map
// filter
// some
// every
// reduce
let array = [10, 3, 7, 15, 4, 25];

// array.forEach((el) => {
//     console.log(el);
// });

// let divideByFive = array.map( (el) => (el%5));
// console.log(divideByFive);

// let divisibleByFive = array.filter( (el) => (el%5 == 0));
// console.log(divisibleByFive);

// let someOdd = array.some( (el) => (el%2 != 0));
// console.log(someOdd);

// let everyOdd = array.every( (el) => (el%2 != 0));
// console.log(everyOdd);

let result = [8, 15, 2, 6, 10, 3].reduce( (res, el) => {
    console.log(`Res = ${res}`);
    console.log(`El = ${el}`);
    return res+el;
}, 5);

console.log(result);

// Spread for array

let arr = [5, 29, 4, 94, 2, 6, 23, 54];

let min = Math.min(arr[0], arr[1], arr[2]);
console.log(min);

min = Math.min(...arr);
console.log(min);

// new array

let newArray = [...arr];
console.log(newArray);

// combine multiple array
let secArr = [13, 1, 9, 25, 5, 94];

let combineArr = [...arr, ...secArr];
console.log(combineArr);
console.log(combineArr.length);

// spread for object literals

const student = {
    name : "bardan",
    age : 23,
    subject : ["math", "sci", "eng"],
    gpa : 3.5
};

console.log({...student});

// add id on copied data
const studentCopy = {...student, id : 34}; 
console.log(studentCopy);

let grades = ['C', 'A', 'B'];
const studentCopy2 = {...student, ...grades};
console.log(studentCopy2);


// Rest = combine different values together in an array

function func(...args){
    console.log(args);
}

func(3, 0, 1, 5, 12, 5);

//arguments
let func2 = function (a, b, c, d){
    console.log(arguments);
}

func2(3, 4, 5);

// Destructuring = store values in multiple variable

// For array

let atheletePosition = ["Dinesh", "Amit", "Bardan", "Laxmi", "Simran"];

let [manager, photographer, ...others] = atheletePosition;


// For objects
// Looks for key similar to the declared variable
// in object passed on right side and if found
// value is copied to that variable, not found - error

const student2 = {
    name : "bardan",
    age : 23,
    subject : ["math", "sci", "eng"],
    gpa : 3.5
};

let {age, ...remaining} = student2;
let {subject : course} = student2;
// overrides by the student2 propert so displays bardan
let {name : changedName = "Kris"} = student2;

// new property
let {city = "Euless"} = student2;