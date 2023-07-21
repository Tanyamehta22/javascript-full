console.log("tutorial 41")
// Arrow functions---

// creating a regular function---
// const harry = function(){
//     console.log("this is the best person ever")
// }

// converting it to an arow function=---
// const harry = ()=>{
//     console.log("this is the best person ever")
// }
// harry();

// function returning something--
// const greet = function(){
//     return "GOOD MORNING";
// // 
// const greet = ()=> "good morning";

// arrow function to return object we reuire braces--
const greet = ()=> ({name : "harry"});

// arrow function for one parameters(do not requiree parenthesis)---
const greet = name => "good morning" + name

//arrow function for more than one parameters( require parenthesis)--
const greet = (name, ending)
=> "good morning" + name + ending;

console.log(greet('harry', bye)) 