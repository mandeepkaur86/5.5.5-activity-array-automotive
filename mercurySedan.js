//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")
const carModule = require("./vehicle")


//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "red", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.
let c = new carModule.Car("Toyota", "Highlander", "2023", "White", "2000","8", "80");
console.log("Make : "+c.make);
console.log("Model:"+ c.model);
console.log("passengers: " + c.passengers);
console.log("mileage: "+ c.mileage);
console.log("started: "+ c.started);

c.loadPassenger(3);
c.fillFuel(40);
c.loadPassenger(10);
c.start();

c.accelerate();
console.log("passengers: " + c.passengers);
c.loadPassenger(2);
console.log("passengers: " + c.passengers);
console.log("mileage: "+ c.mileage);
console.log("started: "+ c.started);

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
