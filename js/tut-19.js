// SMART PAGE CRAWLER IN JS EXERCISE:1-------
let str = 'python';
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(elemenr){
href = element.href;
if(href.include(str)){
console.log(href); 
}
});