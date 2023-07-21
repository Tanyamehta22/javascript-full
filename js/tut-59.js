console.log("this is tutorial 59")

// Symbols- it generate a unique primitive.
const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');

// console.log('Symbol is', sym1);
//console.log('Type of symbol is', typeof sym1);
console.log(sym1 === sym2);

const a ='this is'
const b = 'this is'

console.log(a === b)
console.log(null === null)
console.log(undefined === undefined)

const k1 = Symbol('identifier for k1');
const k2 = Symbole('for k2');

myObj = {};
myObj[k1]= "harry";
myObj[k2]= "Rohan";
myObj["name"]= "good boy";
myObj[4]= "Good int"


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); // ALERT!! ::cannot do thid to get Rohan it is same as myObj["k2"]

// SYMBOLS ARE IGNORED IN FOR IN LOOP----
for (key in myObj){
    console.log(key, myObj[key])
}

// oject into json--done by JSON.stringify
console.log(JSON.stringify(myObj));





 