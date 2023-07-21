// CREATING,REMOVING AND REPLACING ELEMENTS-----
console.log("this is tut 16");
let element= document.createElement('li');
let text = document.createAttribute.TextNode('i am a text node');
element.appendChild(text)


//ADD A CLASS NAME TO THE li Eement--
element.className='childul';
element.id='createdLi';
element.setAttribute('title','mytitle');
// eleement.innerText = 'hello this is created by harry';
 //if we want to bold this then instead of innerText use innerHtml.
// element.innerHTML="hello this is created by harry";


//using query selector to target ul----
let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul)
// console.log(eleement)


//REPLACEMENT OF ELEMENTS------------------
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode
('this is  created node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);
let myul =document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));

// REMOVE ELEMENT------------------------
myul.removeChild(document.getElementById('lui'));
// REMOVE ATTRIBUTE ( EXAMPLE- ID,CLASS ETC)----
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');

// We can also set attribue-------------
elem2.setAttribute('title' , 'myelem2title');
console.log(elem2,pr) 



// QUICK QUIZ--CREAATE A HEADING ELEMENT WITH TEXT AS "Go to codewithharry" and create an a tag outside it with href = "https://www.codewithharry.com"