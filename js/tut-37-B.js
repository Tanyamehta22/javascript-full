// callback function- ekh function ke andar function hone ko callback function bolte h

console.log('this is tutorial 37 and 39-b on callback function and promises')

// Pretend that this response is comig from the server

const students = [
    { name: "harry", subject: "javascript" },
    { name: "rohan", subject: "machine learning" }
]


function enrollStudent(student, c) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }

        }, 5000);
    })
}


function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (studen) {
            str += `<li> ${students.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("students have been fetched");
    }, 1000);
}

let newstudent = { name: "sunny", subject: "python" }
enrollStudent(newstudent).then(getStudents).catch(function () {
    console.log("Some error occured")
})
// getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()