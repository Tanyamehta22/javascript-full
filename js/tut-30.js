console.log("this is tutorial 30");

const proto = {
    slogan: function(){
        return 'this company is the best';

    },
    changeName: function(newName){
        this.name= newName
    }
}
 
// // this creates haryy object
// const harry= object.create(proto);
// harry.name = "harry";
// harry.role ="programmer";

// this also creates harry object
const harry = object.create(proto, {

    name: {value :"harry", writable: true },
    role: {value: "programmer"},
})

harry.changeName( "harry2")
// console.log(harry1)


// employee constructor
function employee(name,salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;

}

//slogan
employee.prototype.slogan = function(){
    return `this company is the best. Regards, ${this.name}`;
}

// create an object from this constructor now
let harryobj =new employee("harry", 283743,78);
console.log(harryObj.slogan())

// programer
function programmer(name, salary, experience,language){
    employee.call(this,name,salary,experience);
    this.language =language;
}

// INHERIT THE PROTOTYPR
programmer.prototype = objrct.create(employee.prototype);

// MANUALLY SET THE CONSTRUCTOR
programmer.prototype.constructor = programmer;

let rohan= new programmer("rohan",2,0,"javascript");
console.log(rohan);




 

 