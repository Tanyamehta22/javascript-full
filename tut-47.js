console.log('this is tutorial 47');

let regex = /harrsdfgy/;

// lets look into some metacharacter symbola
regex =/^harrdc/; //^ means expression will match if string starts with
regex = /harry$/; //  $ at the end of the string means ends with
regex = /h.rry/; // matches any one character
regex = /h*rry/; // matches any 0 or more charcters
regex = /ha?rryi?t/; // ? after character means that character is optional
regex = /h\*rry/ // when we want to match with the exact *


let str = "harry is harry";

let result = regex.exec(str);
console.log("the result from exec is", result);

if(regex.test(str)){
    console.log(`the string ${str} matches the expression ${regex.source}`);

}

else{
    
    console.log(`the string ${str}does not match the expression ${regex.source}`);

}