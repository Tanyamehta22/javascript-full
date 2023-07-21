console.log("This is tutorial 56 on for-in and for-of loops");

Let people = ["harry","rohan","Shillf","shubham", "vikram"];


// ************ FOR IN LOOP (can be used when object key are made to make it iterable**************


// TRADITIONAL FOR LOOP:
// for (let index=0; index<people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }




//1. ITERATING AN OBJECT
Let obj = {
    name:"Harry",
    language: "Javascript",
    hobbies: "Android app development"
}


//console.log(obj);
// 1.1  Iterating an object using traditional for loop:
//  for (let index=0; index <Object.keys(obj).length; index++)
//  {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
//  }


// 1.2 Iterating an object using for-in loops:
for (Let key in obj ){
    console.log(obj[key]);
}

// 2. ITERATING A STRING:
// we can use for in with strings to loop through all the characters:
myString = "this is my string";
for (let char in myString){
    console.log(myString[char]); 
}

// QUIZ: USE TRADITIONAL FOR LOOP TO ITERATE THRUGH THE SAME STRING:



// ************** FOR OF LOOP (can be used with any iterable)************
console.log("************for of loop starts here***********")
people = ["harry","rohan","Shillf","shubham", "vikram"];

for(let name of people){
    console.log(name);
}

for(let name of myString){
    console.log(name);
}



 
