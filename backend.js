const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 3000;

const app = express();

app.set('/Wizartopia_Project');
app.set('view-engine', 'html');
app.use("/static", express.static('static'));

app.use(express.urlencoded());

app.get('/', (req,res)=>{
    res.status(200).sendFile(__dirname + "/index.html");
});

app.listen(port, ()=>{
    console.log("http://localhost:3000");
});

const mongoose = require('mongoose');
const server = "hossainfarshid:JUITfh-891@clusterfarshid.vcl5snh.mongodb.net";
const database = "Wizardtopia";

const connect = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://${server}/${database}`);
        console.log("Connecion Successful");
    }
    catch(err){
        console.log("Connection could not be established");
    }
}
connect();


var Schema = mongoose.Schema({
    name:String,
    year:String,
    phone: Number,
    email:String,
    study:String
});
const Collection1 = mongoose.model("Collection 1", Schema);


app.post("/backend.js", (req, res)=>{
    var data = new Collection1(req.body);
    data.save().then(()=>{
        res.status(200).send("Your data has been updated to the database. Please exit the website");
    }).catch(()=>{
        res.send("OOPs, The data has not been saved. Please try again");
    });
});

// app.post == form action. The form action actions on the backend.js
// Therefore, the app that is the form itself will action or post on the backend.js.
// Thar is why, app.post os backend.js as well as the real app(form).post(action), form.action is backend.js










