// FUNCTIONS IN JS---------
console.log('this is tut 10');
function greet(name, thank='thank you') // default value of thank you is given

{
    let msg=`happy birthday ${name} how i wish----- ${thank}!`;
    return msg;
}

let name ='gehnk';
let name2='hbdjgkjn';

greet( name,'thanks a lot');




//ANOTHER SYNTAX FOR FUNCTION--------
console.log('this is tut 10');

const mygreet = function greet(name, thank='thank you') // default value of thank you is given

{
    let msg=`happy birthday ${name} how i wish----- ${thank}!`;
    return msg;
}

let name ='gehnk';
let name2='hbdjgkjn';

let val=mygreet( name,'thanks a lot');

console.log(val);



// OBJECT KE ANDAR FUNCTIONS-------
const myobj={
    name="skillF",
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game())


//SCOPE-------------------------
if(1){
    var i=234;
    console.log(i)
}

console.log(i);

function ui(name)
{
    let i=9;
    console.log(i);
    return`this is a $(name) ui`;

}

console.log(ui("harry"),i)

// LET/CONS HAVE SCOPE IN BLOCK LEBEL ONLY!!

// VAR HAS SCOPE OUTSIDE THE FUNCTION ALSO.