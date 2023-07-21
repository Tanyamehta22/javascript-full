console.log("this is tutorial 57");
// ********* MAPS IN JAVASCRIPT : WE CAN USE ANY TYPE OF KEY OR VALUE *****

const myMap = new Map();

const key1 = 'myStr', key2 = {}, key3 = function () { };

// Setting map values:
myMap.set(key1, 'This is a string');
myMap.set(key2, 'this is a blank obj');
myMap.set(key3, 'This is an empty function');

console.log(myMap);

// Getting the values from a Map
let value1 = myMap.get(key3);
console.log(value1);

// you can loop using for...of to get keys and values
for (Let[key1, value] of myMap){
    console.log('key, value');
}

// Get only keys
for (let key of myMap.keys()){
    console.log('key is', key);

}

// get only values
for (let key of myMap.values(){
    console.log('value is', value);
}

// You can loop through a map using for each loop
myMap.forEach(value, key)=>{
    console.log('key is', key);
    console.log('value is', value);
}

// Converting map to an array
let myArray = Array.from(myMap);
console.log('Map to array is', myArray);

// Converting map Keys to an array
let myKeyArray = Array.from(myMap.keys());
console.log('Map to keys array is', myKeysArray);

// Converting map values to an array
let myValuesArray = Array.from(myMap.values());
console.log('Map to values array is', myValuesArray);



