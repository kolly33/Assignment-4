const fs = require("fs")


const postItem = (req, res)=>{

const itemsDB = fs.readFileSync("./db/items,json")
const Items = JSON.parse(itemsDB)

const itemTopost = req.body


const lastId = item[itemsDB.lengt-1].id
const newId = lastId+1

const postWithId = {...itemTopost, id:newId}
itemsDB.push(postWithId)
fs.writeFile("./db/items.json", JSON.stringify(items),(err)=>{
    if (err){
        res.status(500)
    }
    res.status(200).json(postWithId)
})


}


const getItems = (req, res)=>{
const items = fs.readFileSync("./db/items.json")
return res.status(200).send(items)
}

const getOneItem = (req, res)=>{
    const getOneItem = fs.readFileSync("./db/items.json")
    return res.status(200).send(items)


    } 




