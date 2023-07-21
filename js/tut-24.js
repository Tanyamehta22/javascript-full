console.log("welcome to tutorial 24");
let today = new Date();
let otherDate = new Date('8-4-20000 04:20:22');
otherDate = new Date('june 13 2002');
otherDate= new Date("09/6/2000"); // MM/DD/YYYY FORMAT
// console.log(otherDate);
let a;
a= otherDate.getDay();// sun-0 mon-1 tues-2...and so on
a= otherDate.getDate();
a=otherDate.getMinutes();
a=otherDate.getSeconds();
a=otherDate.getHours();
a=otherDate.getTime();
a=otherDate.getMilliseconds();a=otherDate.getMonth(); // months starts from 0
console.log(a);
otherDate.setDate(23);
otherDate.setMonth(3);
otherDate.setFullYear(2000);
otherDate.setMinutes(1);
otherDate.setHours(1);
otherDate.setHours(1);
console.log(otherDate);




console.log(typeof today);