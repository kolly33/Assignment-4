const express = require('express')
const itemRoute = require("./routes/items.js")
const usersRoute = require("./users/users.router.js")


const app = express()

const port = 5000

app.use("/items", itemsRoute)
app.use("/users", usersRoute)

app.listen(port, ()=>{
    console.log(`app has started runing at http://localhost:${port}`)
})