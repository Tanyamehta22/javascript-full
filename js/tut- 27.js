console.log('this is tut 27');

//objects literal for creating objects
let car = {
    name: 'maruti 800',
    topspeed: 89,
    run: function () {
        console.log("car is running");
    }
}


// we have already seen constructors like these:
//new date();

//creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topspeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function () {
        console.log(`this car is slower by ${200 - this.topSpeed}  Km/H than Mercedes`)
    }
}

car1 = new GeneralCar('Nissan', 180);
car2 = new GeneralCar("alto", 80);
car3 = new GeneralCar('Mercedes', 200);
console.log(car1, car2, car3);