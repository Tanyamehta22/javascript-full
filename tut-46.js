console.log("this is tutorial 46");
let reg = /harry/; // this is a regular expression literal in js
// reg = /harry/g; //g means global
// reg = /harry/i; //i means insensitive

console.log(reg);
console.log(reg.source);

let s = "this is great code with harry and also harry bhai";

//function to match expressions
// 1. exec() - this function will return an array for match or null for no match

let result = reg.exec(s);

// result = reg.exec(s);
// console.log(result);
// result= reg.exec(s);
// console.log(result);-----> we can use multiple exec with global flag

if (result) {
    console.log(result);
    console.log(result.input);
    console.log(result.index);
}


// 2. test() - return true or false
let result2 = reg.test(s);
// console.log(result2); ----> this will only print true if the 'reg' is there in the  string "s"

//  3. match() - It will return an array of results or null
 // let result3 = reg.match(s) ----> this is wrong!!
 let result3 = s.match(reg) //----> this is right

//  4. search() - returns index of first match else -1
//  let result4 = reg.search(s) ---> this is wrong!!
 let result4 = s.search(reg) //---> this is right
 //console.log(result4);

//  5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)
let results5 = s.replace(reg, 'SHUBHAM');
console.log(result5);




