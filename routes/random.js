const express = require('express')
const randomNumberRouter = express.Router()
const randomNumberController = require("../controller/randomNumber")

randomNumberRouter.get("/api/randoms", randomNumberController);

module.exports = randomNumberRouter;