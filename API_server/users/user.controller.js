const fs = require("fs")

const createUser = (req, res,)=>{
const userDate = fs.readFileSync("./db/users.json")
const userDB = JSON.parse(usersData)


const newUser = req.body
newUser.api_key = `${newUser.username}${newUser.password}`

if(newUser.username==="Mariam"){
    newUser.user_type = "Admin"
}

else{newUser.user_type = "user"}

userDB.push(newUser)
fs.writeFile("./db/user.json", JSON.stringify(userDB), (err)=>{
    if(err){
        res.status(500).json({
            message: "internal server error"
        })
    }
    res.status(200).json(newUser)
})

}