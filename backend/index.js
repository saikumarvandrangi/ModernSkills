const express = require('express')
const dotenv = require('dotenv')
const mysql = require("mysql2")

const cors = require("cors")
const path = require('path')

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())


const __diname = path.resolve()
// app.use('/', express.static(path.join(__dirname,'/')))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__diname, 'frontend/build')))
    app.get('*',(req,res) =>
    res.sendFile(path.resolve(__diname, 'frontend', 'build', 'index.html'))
    )
}
else{
    app.get('/', (req,res) =>{
        res.send('API RUNNING');
    })
}

const db = mysql.createConnection({
    user:"modernskills",
    host:"modernskills.c8dxbpcuiplz.us-east-1.rds.amazonaws.com",
    password:"Dev0ps123",
    database:"modernskills"
});

//Register 

app.post('/register', (req, res) =>{

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, password],
        (err,result) =>{
            if(result){
                console.log(result)
            }
            
            
        }
    )
})

//Login
app.post('/login', (req, res) =>{

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err,result) =>{
            if(err){
                res.send({err:err})
            }
            
            if(result.length > 0){
                res.send(result)
            }else{
                res.send({message: "Wrong Username/Password"})
            }
            
            
        }
    )
})

const PORT = 5000

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`RUNNING in ${process.env.NODE_ENV} in ${PORT}`)
})