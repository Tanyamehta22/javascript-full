console.log("ajax tutorial in ov=ne video");

let fetchBTm = document.getElementById('fetchBtn');

fetchBtn.addEventListerner('click', buttonclickHandler)

function buttonclickHandler(){
    console.log('you have clicked the fetchBtn');

    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    // xhr.open('GET', 'harry.txt', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('content-type', 'applicattion/ json);

    //what to do on progress(optional)
    xhr.onprogress = function(){
        console.log('on progress');
    }

    // readystate call(optional)
    // xhr.onreadystatechange = function(){
    //     console.log('ready state is', xhr.readyState);
    // }

    // what to do when response is ready
    xhr.onload= function(){
        if(this.status==200){
            console.log(this.responseText)
        }
        else{
            console.log('some error occured')
        }
    
    }

    //send the request
    params=" {njalkmsm}"
    xhr.send(params);

    console.log('we are done');

}

let popHandler = document.getElementById('popHandler');
popBtn.addEventListerner('click', popHandler);

function popHandler(){
    console.log('you have clicked the pop handler');

    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // what to do when response is ready
    xhr.onload= function(){
        if(this.status==200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name}</li>`;
            }
            list.innerHTML= str;

        }
        else{
            console.log('some error occured')
        }
    
    }

    //send the request
    
    xhr.send();

    console.log('we are done fetching employees');

}

