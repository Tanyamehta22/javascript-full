console.log('this is tutorial 58');

// Set stores unique values
const mySet = new Set();
console.log('this set looks like:', mySet);

// Adding values to this set
mySet.add('this');
mySet.add('my name');
mySet.add('this'); // will not be added as unique values are only allowed in a set
mySet.add('that');
mySet.add(345);
mySet.add(true);
mySet.add(false);
console.log('The set looks like this now:', mySet);


// Can make the set with the help of a constructor also----
// let mySet2 = new Set([1,45, 'this', false, {a:4, b:8}]);
// console.log('New set:', mySet2);


console.log(mySet.size); // get the size of the set

console.log(mySet.has(34)); // Check whether set has 34 or not... output: true

console.log(mySet.has(345)); // output: false

console.log('before removal', mySet);
mySet.delete('false') // remove an element from the set
console.log('after removal', mySet);


// Iterating a set

// 1. using for loop to iterate
for(let item of mySet){
 console.log('Item is :', item);
}

// 2. using for each to iterate a set
mySet.forEach((item)=>{
    console.log('item is :', item);
})

// Quiz: can we use Array.from(mySet) to convert set into array??
// answer: we can use Array.from(myset) to make array of set. ( help to remove duplicate in array).
