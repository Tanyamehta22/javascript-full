// STRINGS : PROPERTIES, METHODS AND TEMPLATE LITERALSIN JAVASCRIPT--------------------

console.log('we are at tut6');
const name= 'harry';
const greeting= 'good morning';
// console.log(greeting + '' + name);

let html;
html= "<h1>this is heading</h1>"+
       "<p>this is my para</p>";

// STRING FUNCTIONS-


html=html.concat('this', 'str2');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);


// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('str')); //will return boolean(true or false)
// console.timeLog(html.includes('fg'));
// console.log(html.substring(1,6));
// console.log(html.substring(0,-4)); //will start from end
// console.log(html.slice(0,4))
// console.log(html.split('>'));
// console.log(html.replace('this', 'it'));

let fruit1= 'organe';
let fruit2 ='apple';
let myhtml= `hello ${name}
            <h1> this is my heading </h1>
            <p> you like ${fruit1} and ${fruit2}`; //``will get from above tab and on left side of 1

document.body.innerHTML= myhtml;            










