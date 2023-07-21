// PROMISE: BEST VIDEO ON PROMISES
//- RESOLVE
// -REJECT
// -PENDING
// NOTE- PROMISE ARE USED AS AN ALTERNATIVE FOR CALLBACK FUNCTION

function func1(){
    return nre Promise(function(resolve, reject){
        setTimeout(() => {
            const error = true;
            if(!error){
                console.log('Function: Your promises has been resolved')
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('sorry not fulfilled');
            }
            
        }, 
        2000);
    })
}

func1().then(function(){
    console.log("harry: thanks for resolving")
}).catch(function(error){
    console.log("harry: Very bad bro. Reason:" + error)
})
