const { Vehicle } = require("./vehicleBaseClass");

class Car extends Vehicle{
    constructor(make,modal,year,color,mileage,maxPas, maxSpeed){
        super(make,modal,year,color,mileage);
        this.maxpassanger = maxPas;
        this.passengers =0;
        this.numberOfWheels =4;
        this.maximumSpeed = maxSpeed;
        this.maxSpeed =160;
        this.scheduleService = false;
    }

    loadPassenger(num)
    {
        let newpass = this.passengers + num;
        if(newpass > this.maxpassanger)
            console.log("Sorry ,too many people");
        else
            this.passengers = newpass;
    }

    scheduleService()
    {
        if(this.mileage > 3000)
            this.scheduleService = true;

    }
    fillFuel(f)
    {
        super.fuel = f;
    }
}
class Car2{
    constructor(make, model, year, color, mileage) {
    }
}

module.exports = {
    Car
}
