//  ARRAYS AND OBJECTS IN JAVASCRIPT----------

 console.log('WE ARE IN TUT7.js and lets discuss about arrays');
 Let marks=[34,23,24,56,78]; //if const we cannot change by  methods--
 const fruits=['orange', 'apple', 'banana'];
 const mixed=['str',34,[3,4]];

 const arr=new Array(23,234,45,'orange');
 console.log(arr);
//  console.log(mixed);
//  console.log(fruits[0];)
//  // INDEXING IN ARRAY STARTS WITH 0----

//  //PROPERTIES ARE WITHOUT BRACKET EG--
//  console.log(arr.length);
//  //METHODS ARE WITH BRACKETS----------
//  console.log(array.isarray('dfdf'));

arr[0]= 'harry';
let arrelement=arr[0];
//console.log('element:' , arrelement);
// console.log(arr);


// FINDING INDEX OF AN ELEMENT----
console.log(marks);
Let value= marks.indexOf(34);
console.log(value)

//MUTATING OR MODIFYING ARRAYS----
marks.push(3564);
marks.unshift(990); //unshift push the element in the starting
marks.pop() //will remove the element from the last--
marks.shift() //will remove from the starting of the array--
marks.splice(1,3) //will tell from where to which index we have to remove the elemnts---

marks.reverse() //array ultha hu jayega--

let marks2=[1,2,3,3]
marks= marks.concat(marks2);
console.log(marks);




//OBJECTS--------------------------------------
//( CAN BE USED TO STORE KEY-VALUE PAIR)
Let myobj = {
    name:'harry',
    channel :'codewithharry',
    isactive: true,
    marks: [1,5,23,4]
}

console.log(myobj)
console.log(myobj.isactive)
console.log(myobj['channel']) 
//OR we can also write console.log(myobj.channel)



