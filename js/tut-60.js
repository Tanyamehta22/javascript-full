console.log("This is tutorial 60");
// DESTRUCTURING IN JAVASCRIPT----

Let a,b ;
[a,b] =[ 34,564];
// console.log(a,b);

[a,b,c,...d]= [1,2,3,4,5,6,7,8,9,10,12,13];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)



// ARRAY DESTRUCTURING----------------------
({a,b,c} = {a:34, b:345, c:67, d:45, e:34})
// console.log(a,b,c)

({a,b,c,...d} = {a:34, b:345, c:67, d:45, e:34})
// console.log(a,b,c,d)

const fruits = ['apple', 'bananas', 'mangoes'];
[a,b,c] = fruits;
console.log(a,b,c)


// OBJECT DESTRUCTURING----------------------
const laptop = {
    model: "HP Paviltion",
    age: "23 days",
    gender: "male",
    net: 1233,
    start = function(){console.log('started')};
}

const {model, age, gender, net, start} =  laptop;
console.log(model,age,gender,net,start);
start()


