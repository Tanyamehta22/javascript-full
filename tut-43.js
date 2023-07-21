// ASYNC / AWAIT --- ( ANOTHER WAY TO FETCH DATA WITHOUT USING DOUBLR .THIS)

console.log("this is tutorial 43");

async function harry(){
    console.log(' inside harry function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users= await response.json();
    console.log('users resolved')
    return users;

    // return "harry";
    
}

console.log("before calling harry")
let a = harry();
console.log("after calling harry")
console.log(a);
a.then(data => console.log(data))
console.log("last line of this js file")