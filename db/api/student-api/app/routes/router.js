const express = require("express");
const router = express.Router();

router.use("/vehicle", require("./api/vehicleRoutes"));

//add more api routes here

module.exports = router; 