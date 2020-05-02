'use-strict';

 
var number = 5;
 var string = "Hello!";
 var sym = Symbol();
 var boolean = true;
 null;
 undefined;
 var obj = {}; 

console.log(4/0);
console.log('string'*9);


let something;  /* undefined */
console.log(something);  /*  null */
 
let person = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(person["name"]); 


let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];  /* массив */
console.log(arr[0])

// alert("Hello World!");
// Булиновое значение:
// let answer = confirm("Are you here?");
// console.log(answer);
//let answer = +prompt("Are you 18?", "Yes"); 
//console.log(typeof(answer)); // string
//console.log(typeof(null));

//Concationation
//console.log("arr" + "- object");
//console.log("4" + "- object");

let incr = 10,
decr = 10;

//Prefix
//console.log(++incr);
//console.log(--decr);

//Postfix
console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2"===2);

// And(&&), or(||), отрицание(!)
let isChecked = false, 
    isClosed = false;
console.log(isChecked || !isClosed);






