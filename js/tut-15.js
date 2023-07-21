// # CHILDREN, PARENT AND TRAVERSING THE DOM-----

// console.log('welcome to tutorial 15');

// let const= document.querySelector('.no');
// const = documentquerySelector(".contaner");
// let nodetype = const.childNodes[1].nodeName;
// let nodetype = const.childNodes[0].nodetype;
// # console.log(nodesName)
// # console.log(nodeType)
 
// #  NODE TYPES--
// #  1. Element
// #  2. Attribute
// #  3. Text node
// #  8. Comment
// #  9. document
// #  10. docTypes



// # console.log(const.childNodes); 
// # it will take into account the text as well as space.
// # console.log(const.children); 
// #it will take into account the tags div and all(only element).

let container = document.querySelector('div.container')
// # console.log(container.children[1].children[0].children) 
//  # bacho ka bacha nikal rhe h hum tags ke andar tags(traversing)

 console.log(container.firstrhild);
 console.log(container.firstElementChild);

 console.log(container.lastChild);
 console.log(container.lastElementChild);

 console.log(container.children);
//  console.log(container.childElementtCount); #count of child elements


// # CHAINING( TO NEXT THE NEXT SIBLING)------
console.log(container.firstEleementChild.parentNode
);
console.log(container.firstEleementChild.nextSibling);

console.log(container.firstEleementChild.nextElementSibling);
console.log
(container.firstElementChild.nextElementSibling.nextElementSibling);

 





 