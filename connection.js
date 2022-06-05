const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const { Pool, Client } = require('pg')
const port = 4000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
  }))

  
const pool = new Pool({
    Server: "localhost",
    Database: "postgres",
    Port : 5432,
    Username : "postgres",
    Password :"vip#@990",
})
const getUsers = (request,response)=>{
    pool.query('SELECT * FROM country',(err,result)=>{
        if(err){
            throw err;
        }
       else{console.log("connection done");}
    })
}
app.get('/',(req,res)=>{
    res.json({info:"who the fuck are you"})
})
app.listen(port,()=>{
    console.log("Server is Running")
})
getUsers();