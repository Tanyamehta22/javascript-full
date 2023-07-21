// FOR,WHILE AND DO WHILE LOOPS IN JS-----
console.log('we are at tutorial 9')
//console.log(1)
//console.log(2)
//console.log(3)


// GENERAL LOOPS : FOR, WHILE, DO-HILE

// let a=34;
// a +=1;
// a++
// console.log(a); 


// 1. FOR LOOP---------------------------
for(Let i=0; i<100; i++)
{
    console.log(i);
}

// 2. WHILE LOOP-------------------------
Let j= 0;
while(j<10)
{
    console.log(j); 
    j+=1;
}
  

// 3. DO WHILE LOOP ( IT WILL ATLEAST RUN 1 TIMES AND THEN WILL CHECK THE CONDITION)--------------------------------------------
let k= 0;

do{
    console.log(k+1);

    k+=1;
}
    while (k<10);


 



//break:
do{
    console.log(k+1);
    if(k===5){
        break;
    }
    k+=1;
   }   while (k<10);
console.log('done');

//continue:
do{
    if(k===5){
        k==1
        continue;
    }
    console.log(k+1);
    k+=1;
} while (k<10);
console.log('done');


//ITERATE AN ARRAY USING FOREACH----
let arr=[2,5,6,4,2,3];
arr.forEach(function(elemennt,index,array ){
    console.log(element,index, array);
});

console.log('done'); 

//OR---SECOND METHOD TO ITERATE AN ARRAY----
let arr=[2,5,6,4,2,3];

for (let i=0; i<arr.length; i++)
{
    const element=arr[i];
    cpnsole.log(element)
}

console.log('done');


// ITERATE THROGH AN OBJECCT--------------------
let obj = {
    name: "rohan das";
    age: 78,
    type: "dangerous Programmer",
    os: "ubuntu"
}
for (let key in obj){
    console.log(`the ${key}of object is ${obj[key]}`)
}

console.log('done');





