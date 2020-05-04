const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const usersData = require('../models/users');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();

//using body-parser
app.use(bodyParser.json());

router.get("/", (req, res) => {
    res.send("This is a users homepage ...");
    console.log("Now, connecting to database ...\n");
    mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }
        , () => {
        console.log("Databse connected ...\n");
        const test = new usersData({name: "Lucy laing", address: "Lucy ko pussy", phone: "chatya chatai"});
       // test.save().then(()=>console.log("created lucy pussy")).catch(()=>console.log("Never lucy pussy"));
        usersData.find({}).then((data)=>console.log(data));
        });
});



router.post("/", (req, res) => {
    res.send("This is users page on a post method ...");
    console.log("Now, connecting to database ...\n");
    mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }
        , () => {
        console.log("Databse connected ...\n");
        //console.log(`From params: name: ${req.query.name},  address: ${req.query.address},
         //   phone:${req.query.phone}, email:${req.query.email}`);
        //console.log(req.query);

        //creating new collection user and inserting it to the db
        const user1 = new usersData({
            name: req.query.name,
            address: req.query.address,
            phone: req.query.phone
        });

        user1.save().then(()=> {
            console.log("New user should be created ...\n check on the mongo shell\n\n");
            //now closing database
            mongoose.connection.close().then(() => console.log("DB CLOSED .... \n"))
        })
        .catch(err=> console.log("Error => " + err));

        console.log("Last line debug .. \n")
        
    });


    //closing the connection with db
   /* mongoose.connection.close().then(() => {
        console.log("\n\nDatabase connection was terminated successfully ....\n");
    });*/
});




module.exports = router;