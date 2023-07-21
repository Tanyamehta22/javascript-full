

// TYPE CONVERSION AND  TYPE COERCTION---
console.log('welcome to tut5');

// number to string
let myVar;
myVar = String(34)
// console.log(myVar,(typeof myVar));

// boolean to string
Let booleanVar = String(true);
// console.log(booleanVar , (typeof booleanVar));

// object to string
Let date = (new Date());
// console.log(date, (typeof date));

// array to string
Let arr= string([1,2345,678,667]);
// console.log(arr.length,(typeof arr));

// benfit of converting them into string is that we can apply strong functions in them, example- arr.length


// WE CAN ALSO USE tostring to convert into string.
let i = 45;
// console.log(i.toString())


//  WE CAN ALSO CONVERT STRING INTO NUMBER------------------------------


Let str1= Number("3456");

stri= Number("3456");

stri= Number("34f567") // this will give NaN(NOT A NO.)

stri= Number(true) // this will give defualt value as 1

stri=Number(false)// this will give default value as 0

// Parseint convert the string into no.
let number = 'parseInt('34');
console.log(number, (typeof number));

// Parsefloat convert the string into float
let number = 'parsefloat('34.23');
// tofixed is basically used to fix the no. of decimal points after dot.
console.log(number.tofixed(3), ((typeof number));



// TYE COERCION-----------------------------------

Let mystr= Number('345');
Let mynum = 34;

console.log(mystr + mynum);








