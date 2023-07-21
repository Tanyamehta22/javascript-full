console.log("this is tutorial 28");

//object literal : object prototype

let obj = {
    name: "harry",
    channel: "code with harry",
    address: "mars"
}

function obj(givenName){
    this.name = givenName
}

obj.prototype.getName = function(){
    return this.name;
}

obj.prototype.setName = function(newName){
    this.name = newName;
}

let obj2 = new obj("ram");
console.log(obj);