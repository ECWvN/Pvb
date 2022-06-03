const { PermDeviceInformation } = require('@mui/icons-material');
const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "u535375",
    host: "10.19.50.28",
    password: "Nh5Mpf",
    database:"pvb",

});

app.post('/register',(req, res)=>{

    const userName = req.body.userName;
    const email = req.body.email;
    const password =req.body.password;
    const birthDate = req.body.birthDate;
    const phonenumber= req.body.phonenumber;


    db.query("INSERT INTO pvb (username, email, password, birth-date, phonenumber) values (?,?,?,?,?)",
    [userName,email,password,birthDate,phonenumber],
    (err, result =>{
        console.log(err)
    }))
})

app.listen(22, ()=> {
    console.log("yey");
})