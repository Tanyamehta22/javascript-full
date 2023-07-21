console.log("This is tutorial 49");

// CHARACTER CLASSES----------
let regex = /\war/; // word charaster- _ or alphabet or numbers
 regex = /\w+dlr/;  //\w+ means one or more word charcters
 regex=/\Wbhai/;  // Non word charater
 regex=/\W+bhai/;  // \W+ mwans more than obe non word charcter
regex = /number \d999/; //\d means digit
regex = /number \d+/; //\d+ means more than one digit
regex = /D999/; // \D mens non digit
regex = /\D+999/; // \D means moe than one non digit
regex =/\ska number/; // Match whitespace charater
regex = /\s+ka number/; // \s+ mens one or more than one whitespace charcters
regex= /\Ska number/; // match whitespace charcter
regex = /\s+ka number/; //match one or more tha non whitespace charcter
regex = /4r5r\h/; // word boundary


// Assertions
regex = /h(?=y)/; // y should be present h ke baad

regex = /h(?!y)/; // y should not be present h ke baad.

str = "harh7rd1r4r5ry%%$@bhai hdrryika number 899999harry9999";





let result = regex.exec(str);
console.log("the result from exec is", result);

if(regex.test(str)){
    console.log(`the string ${str} matches the expression ${regex.source}`);

}

else{
    
    console.log(`the string ${str}does not match the expression ${regex.source}`);

}