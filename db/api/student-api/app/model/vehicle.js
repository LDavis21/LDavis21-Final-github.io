class Vehicle {
    constructor(id, vehicle_name, brand, year, doors, seats, speed, fuel_type) {
        this.id = id;
        this.vehicle_name = vehicle_name;
        this.brand = brand;
        this.year = year;
        this.doors = doors;
        this.seats = seats;
        this.speed = speed;
        this.fuel_type = fuel_type
    }
}

module.exports = Vehicle;