console.log('WELCOME TO TUTORIAL 14');
  /*
  element selector;
  1. single element selector
  2. multi element selector

  */

  //1. single element selector
let Element = document.getElementById("myfirst");
//element = element.className;
//element = elemenr.childNodes;
// element=element.parentNode;
element.style.color= 'red';
element.innerText = 'Harry is a good boy';
element.innerHTML = '<b>harry is a good boy</b>';
// console.log(element.innerHTML);
// console.log(element.innerHTML);

let sel= document.querySelector('#myfirst'); //id
sel= document.querySelector('.child');// class(single class)
sel= document.querySelector('b'); // html tag
sel.style.color = 'green'; 
console.log(sel);


// 2. MULTI ELEMENT SELECTOR---------
let elems = document.getElementsByClassName('child');

elems = document.getElementsByClassName('container');

elems = document.getElementsByTagName('div');
console.log(elems)


 // ITERATE THROUGH EACH ELEMENT---------

Array.from(elems).forEach(element=>{
    console.log(element);
    element.style.color = 'blue';
});
console.log(elems[0].getElementsByClassName('child'));

//OR

for(Let index = 0; index<elems.length;index++){
    console.element=elems[index];
    console.log(element);
    element.style.color = 'blue';
}
 

