// callback function- ekh function ke andar function hone ko callback function bolte h

console.log('this is tutorial 37 on callback function')

// Pretend that this response is comig from the server

const students = [
    {name: "harry", subject:"javascript"},
    {name:"rohan", subject: "machine learning"}
]


function enrollStudent(student, callback){
    setTimeout(function(){
        students.push(student);
        console.log("student has been enrolled");
        callback();
    },3000);
}


function getStudents(){
    setTimeout(function(){
        let str ="";
        students.forEach(function(studen){
            str += `<li> ${students.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("students have been fetched");
    }, 1000);
}

let newstudent = {name:"sunny", subject:"python"}
enrollStudent(newstudent,getStudents)
// getStudents();