//LOCAL AND SESSION STORAGE IN JAVASCRIPT-------
console.log('this is tut 20');
//limitation- we cannot add an array--
let impArray= ['adrak', 'pyaz, ']

//add a key-value pair inside local storage
localStorage.setItem('name', 'harry');
localStorage.setItem('name2', 'rohan');
localStorage.setItem('sabzi', JSON.stringify(impArray))
// JSON will convert the array into string.
 

// clears the entire local storage
localStorage.clear();

//clear a particular key-value pair.
localStorage.removeItem('name');
 

// Retrieve an item from the local storage.
let name = JSON.parse(localStorage.getItem('name2'));
//JSON.parse take string as argument and return an array.
console.log(name)

// LOCAL STORAGE IS DIFFERENT FOR DIFFERENT WEBSITES.
// SESSION STORAGE HAVE SAME FUNCTION AS LOCAL STORAGE BUT IN A PARTICUPAR TIME.
sessionStorage.setItem('sessionname', 'sharry');
sessionStorage.setItem('sessionname2', 'srohan');
sessionStorage.setItem('sessionsabzi', JSON.stringify(impArray))
sessionStorage.clear()