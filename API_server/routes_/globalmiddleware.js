const fs = ("fs")

const checkApi_key = (req, res, next)=>{

const usersData = fs.readfilesync("./db/user.json")
const userDB = JSON.parse(usersData)

const apikey = req.header.api_key

if(!apikey){
return res.status(401).json({
    message:"you are not athenticated, api_key require",
})

}
const foundUser = userDB.find((user)=> user.api === apikey)
if(!founder){
    return res.status(401).json({
        message: "you are athenticated"
    })
}

next()
}

const checkAdmin = (req, res, next)=>{
const usersData = fs.readfilesync("./db/user,json")
const userDB = JSON.parse(usersData)

const apikey = req.headers.api_key

const founder = userDB.find(user=>user.api_key == apikey)

if(founder.user_type != "admin"){
return res.status(403).json({
    message:"you are not authorized"
})
}

next()
}

const checkItem = (req, res, next)=>{
    const item = ["goat", "lion"]

    if(item.includes(req.body.name)){
        return res.status(406).json({
            error: "this item is unacceptable, we dont accept goat and lion"
        })
    }
    next()

}

module.exports ={
    checkItem,
    checkApi_key,
    checkAdmin,
}