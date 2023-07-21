// UNDERSTANDING DOM AND CREATING A WEBSITE LAYOUT-------------------------------------
console.log("welocme to tut 12.js");
let a=document;
a = document.all;
// a= document.body;
// a= document.forms;
// a= document.forms[0]; // if there are more then one form we can chose it with the help of this form[number]


Array.from(a).forEach(function(element){
    console.log(element);
})
// array.from(a) created an array of all the a elements and then we can iterate in them.

a= document.links;
 // it will give all the links from the document.
a= document.links[0];
a= document.links.href; 
a= document.images;
a= document.scripts;

// console.log(a);

// DOM- DOCUMENT OBJECT MODEL- THIS IS THE STRUCTURL REPRESENTATION OF AN OBJECT 

