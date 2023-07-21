console.log("this is tutorial 31,js");

class employee {
    constructor (givename,givenexperience,givendivison){
        this.name=givename;
        this.experience = givenexperience;
        this.givendivison = givendivison;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningyear(){
        return 2020-this.experience;

    }

    static add(a,b){
        return a+b;
    }

    
}

class programmer extends employee{
    constructor(givenName, givenexperience,givendivison, language, github){

        super(givenName,givenexperience,givendivison);

        this.language = language;
        this.github = github;
    }

    favoritelanguage(){
        if(this.language=='python'){
            return 'python';
        }

        else{

            return 'javascript';
        }
    }

    static multiply(a,b){
        return a*b;
    }
}

// harry = new employee("harry", 56, "division");
// console.log(harry.joiningyear());

// console.log(employee.add(34,5))
rohan = new programmer("rohan", 3,"lays", "go", "rohan420")
console.log(rohan)
console.log(rohan.favoritelanguage())
console.log(programmer.multiply(2,7));