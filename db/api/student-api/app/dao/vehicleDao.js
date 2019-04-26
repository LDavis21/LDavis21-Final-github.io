const Vehicle = require('../model/vehicle');
const daoCommon = require('./common/daoCommon');

class VehicleDao {
    constructor() {
        this.common = new daoCommon();
    }
    findAll() {
        let sqlRequest = "SELECT * FROM vehicle";
        return this.common.findAll(sqlRequest).then(rows => {
            let vehicles = [];
            for (const row of rows) {
                vehicles.push(new Vehicle(
                        row.id,
                        row.vehicle_name,
                        row.brand,
                        row.year,
                        row.doors,
                        row.seats,
                        row.speed,
                        row.fuel_type
                    )
                );
            }
            return vehicles;
        });
    }
}

module.exports = VehicleDao; 