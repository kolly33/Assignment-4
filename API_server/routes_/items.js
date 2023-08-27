const express = require("express")
const bodyParser = require("body-parser")
const controller = ("../controller")
const globalMiddleware = require("../global.middleware")

const itemsRouter express.Router()

itemsRouter.use(bodyparser.json())

itemsRouter.get("/", globalMiddleware.checkApi_key, controller.getItems)

itemsRouter.get("/:id", globalMiddleware.checkApi_key, controller.getoneItems)

itemsRouter.post("/", globalMiddleware.checkApi_key, globalMiddleware.checkadmin, controller.checkadmin, controller.postItems)
itemsRouter.put("/:id", globalMiddleware.checkApi_key, globalMiddleware.checkadmin, controller.updateItems)
itemsRouter.delete("/:id", globalMiddleware.checkApi_key, globalMiddleware.checkadmin, controller.deleteitems)


module.exports = itemsRouter