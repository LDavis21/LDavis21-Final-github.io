const express = require("express");
const router = express.Router();

// controller here
const VehicleController = require("../../controller/vehicleController");
const vehicleController = new VehicleController();

// vehicle routes
router.get("/", function (req, res) {
    vehicleController.findAll(res);
    // res.send([{hello:"world"}]);
});

module.exports = router;  