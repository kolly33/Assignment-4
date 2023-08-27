const express = require("express")

const controller = require("./users.controller")
const middleware = require("./users.middleware")
const bodyparser = require("body-parser")

const userRouter = express.Router()

userRouter.use(bodyparser.json())

userRouter.post("/", middleware.checkbody, controller.createUser)


module.exports = userRouter 