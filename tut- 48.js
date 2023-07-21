console.log("this is tutorial 48");
// REGULAR EXPRESSIONS:
  // Basic functions
  // Metacharacter symbols
  // character sets


  // ---- CHARACTER SET= WE USE []-------

let regex = /h[a-z]rry/; // can be any character from a to z
regex = /h[aty]rry/; // can be an a,t or y
regex = /h[^aty]rry/; // cannot be any a,t or y
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; // we can have as many charcter sets as we want

  // -----QUANTIFIERS- WE USE {}-----
  regex = /har{2}y/; // r can ocur exactly 2 times
  regex = /har{0,2}y/; // r can ocur exactly 0 to 2 (0 or 1 or 2) times2

  //------GROUPING -  WE USE PARANTHESIS FOR GROUPING ()-----
  regex = /(har){2}([0-9]r){3}/;

// const str = "harry bhai";
str= "harry bhai"
str ="harhar1r2r5r bhai";

let result = regex.exec(str);
console.log("the result from exec is", result);

if(regex.test(str)){
    console.log(`the string ${str} matches the expression ${regex.source}`);

}

else{
    
    console.log(`the string ${str}does not match the expression ${regex.source}`);

}

