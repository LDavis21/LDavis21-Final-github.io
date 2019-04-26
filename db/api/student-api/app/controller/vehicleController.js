const VehicleDao = require("../dao/vehicleDao");
const ControllerCommon = require("./common/controllerCommon");
// const Vehicle = require("../model/vehicle");

class VehicleController {

    constructor() {
        this.vehicleDao = new VehicleDao();
        this.common = new ControllerCommon();
    }

    findAll(res) {
        this.vehicleDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
}

module.exports = VehicleController; 