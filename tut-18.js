// MORE ON JAVASCIPRT EVENTS-------------------

console.log("this is tut 18");
let btn= document.getElementById('btn');
btn.addEventListerner('click',func1);

function func1(e){
    console.log('thanks',e);// this deafult behaviour is to submit
    e.preventDefault();//this is used to prevent the default behaviour but e should be given to the function as parameter.

}

// DOUBLE CLICK-------------------------
btn.addEventListerner('dblclick',func2);
function func2(e){
    console.log("thanks its a double click",e);
    e.preventDefault();
}

//MOUSE DOWN(it will consider all the clicks left, right ,middle)wherease in click it only considers left click----------------------------------
btn.addEventListerner('mousedown',func3);
function func3(e){
    console.log("thanks its a mouse down",e);
    e.preventDefault();
}
//similarly we have mouse up event

// MOUSE ENTER AND MOUSE LEAVE EVENT (WILL TELL IT WHEN WE ENTER MOUSE IN DOC AND WHEN WE LEAVE IT)---------------------------------

//MOUSE ENTER EVENT-------
document.querySelector('no').addEventListener('mouseenter', function(){
    console.log('you entered no')// no is class name
})


//MOUSE LEAVE EVENT-------
document.querySelector('no').addEventListener('mouseleave', function(){
    console.log('you exited no')// no is class name
})


//MOUSE MOVE--------------

document.querySelector('.container')
.addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor ='rgb(${e.offsetX}, ${e.offsetY},154)';//THIS WILL CHANGE THE BACKGROUND COLOUR DYNAMICALLY
    console.log('you triggered mouse move event') 
})






