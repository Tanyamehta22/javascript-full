console.log('the file is tutorial 51');
//INTERATORS

function fruitIterator(values) {
    let nextIndex = 0;
    // we will return an object
    return {
        next: function(){
            if(nextIndex < values,length){
                // we will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else{
                // we will return below object with only done
                return {
                    done: true
                }
            }
            }
        }
    }


const myArray = ['apple', 'grapes', 'oranges', 'bhindi'];
console.log("my array is", myArray)


//Using the iterator
const fruits= fruitIterator(myArray);
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)

