console.log("tutorial 25");

// EXCERISE -2 SOLUTION-----
 
// create a new element
let divElem = document.createElement('div');


// add text to that created element
let val =localStorage.getItem('text');
let text;
if (val==null){
    text = document.createTextNode('this is my element. click to eit it');
}
else {
    text= document.createTextNode(val);
}
 
divElem.appendChild(text);


// give element id, style and class
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style', 'border:2px solid black; width: 15px; margin: 34px; padding: 23 px;');


// grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


// Insert the element before element with id first
container.insertBefore(divElem, first);

console.log(divElem,container,first)

//add event listerner to the divElem
divElem.addEventListener('click',function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
        let html = elem.innerHTML;
        divElem.innerText= `<textarea class="textarea form-control" id="textarea" rows= "3"> ${html}</textarea>`;
    }
    //listern for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function(){
        elem.innerHTML = textarea.ariaValueMax;
        localStorage.setItem('text', textarea.value);    })
    
});

 

