// IF ELSE CONDITIONS AND SWITCHES IN JS-------
console.log('this is tutorial 8');
const age = 19;
const doesdrive= false;

if (age==19)
{
    console.log('age is 19')
}

else if(age===65) // == it only checks the value and not the type but === also checks the type ---- !== when both type and value do not match.
    console.log('age is 65')

else
{
 console.log("age is not 19")
}


// TO CHECK WHETHER A VARIBLE EXIST OR NOT------
if (typeof vari !== 'undefined'){
    console.log('Vari is defined');

}
else{
    console.log('Vari is not defined');
}



// AND(&&) WHEN BOTH CONDITION IS TRUE 
// OR (||) WHEN EVEN ONE CONDITION IS TRUE
if(doesdrive||age >18){
    console.log("you can drive");
}

else{
    console.log("you cannot drive");
}


// TERNIARY OPERATOR------------------------
// syntax- condition? true false(:) false
console.log(age==45? 'age is 45': 'age is not 45');


//SWITCH-----------------------------------
switch (age) {
    case 18:
        console.log('you are 18');
        break;
    case 45:
        console.log('you are 45');
        break;
    case 34:
        console.log('you are 34');
        break;
                
    default:
        console.log('you are 19');
        break;
}


 