console.log("this is my tutorial 42");

// FETCH API----------------------------

// Button with id myBtn
let myBtn =  document.getElementById("myBtn");

// div with id content
let content =  document.getElementById("content");

// function getData(){
//     console.log("started getdata")
//     url = "harry.txt";
//     fetch(url.then((response) => {
//         console.log("Inside first then")
// return response.text(;)

//     }).then((data)=>{ 
//         console.log("inside second then")
//         console.log(data);
//     })
//  }


// NOW TO GET A JSON FROM URL-------
function getData(){
    console.log("started getdata")
    url = "https.//api.github.com/users";
    fetch(url.then((response) => {
        console.log("Inside first then")
        return response.json();

    }).then((data)=>{ 
        console.log("inside second then")
        console.log(data);
    })
 }



// FOR POST DATA--------------------------
 function postData(){
    url = "https.//dummy.restapiexample.com/api/v1/create";
     data= ("name:"ghasa" , "salary":"123", "age":"23" )
     params = {
        method:"post",
        headers:{
            'content-type:'application/java'
        },
        body: data  
        //  body: JSON.stringify(data);---used when data is not in string
     } 

     // USING ARROW FUNCTON----
     fetch(url, params).then(response =>response.json())
    .then(data=>console.log(data)33
    )
 }


// console.log("before running getData")
// getData()
// console.log("after running getData")
postData()