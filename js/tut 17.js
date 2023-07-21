// EVENTS AND EVENTS OBJECT IN JAVASCRIPT----
// EVENTS ARE BASICALLY ACTIONS THAT WE PERFORM LIKE CLICK, COPY,PASTE ETC-----------

document.getElementById('heading').addEventListener('click',function(e){
    console.log("you have clicked the heading");// when we click this will come in console.
    location.href="//codewithharry.com))" //when we click we will land to this page.

    variable = e.target;// will show e.target in console
    variable = e.target.className;//will give class
    variable = e.target.classList; //will give class list
    variable = Array.from(e.target.classList); //will show the array of class list
    variable = e.target.id; //will shiow id name

    variable = e.offsetX; // it will click different value jitna hum horzintally move kr rhe h vaise value change hote rahegi.
    variable= e.offsetY; // vertical value change
    variable = e.clientX;// browser window ke relative bataata h ki kitna dor click kra.
    variable = e.clientY;
        
    console.log(variable);

    // MOUSE OVER EVENT---
    
    document.getElementById('heading').addEventListener('mouseover',function(e){
        
    console.log(variable);
    }
}});
    


 







 