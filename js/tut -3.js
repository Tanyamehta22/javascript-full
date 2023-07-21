console.log('tut -3');
// VARIABLES IN JS
// var , let ,const
var name = "harry";
var channel;
var marks= 34;
// channel='code with harry'
console.log(name, channel, marks);
console.log(name);

// RULES FOR CREATING JAAVASCRIPT VARIABLES--
/*

1) CANNOT START WITH NUMBERS.
2) CAN START WITH LETTER, NUMBERS, _ OR $.
3) ARE CASE SENSITIVE.

*/

Var city= 'delhi';
console.log(city);

// WE USE CONS WHEN WE DON'T WANT ANYONE TO CHANGE THE VALUE AND WE HAVE TO ALWAYS ASSIGN VALUE IN THEM, CANNOT LEAVE ONLY BY INITIALISING//

const ownersName= 'hari ram';
// ownersnam ="harry"; //cannot do this (error)
console.log(ownersName);
const fruit = 'orange';



// IN LET BLOCK LEVEL IS CREATED ( LOCAL VARIABLE IS CREATED)
{
    Let city= "rampur";
    city="kolkata"; // local variable will be changed
    console.log(city); // we will get rampur-local variable
}
console.log(city); // we will get delhi only- global variable



// WHEN WE USE CONST WITH ARRAY, WE CAN CHANGE THE ARRAY BUT CANNOT MAKE THE SAME ARRAY AGAIN

const arr1=[12,34,56,78,2];
//arr1.push(45);------- this can be done but we cannot clear array and write new elements.
console.log(arr1)

/* MOST COMMON PROGRAMMING CASE TYPES:

1) camelCase (first small baki words ke firt letter can be capital)----commonly used.

2) kebab-case (ekh seek rahegi bech mei 2 kebab ke)

3) snake_case

4)PascalCase

*/
