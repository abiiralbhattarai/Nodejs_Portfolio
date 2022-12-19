//Node.js MongoDB server

require("./models/db");

const express = require("express");
const path = require("path");
const handleBars = require("handlebars");
const exphbs = require("express-handlebars");

const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype");

const bodyparser = require("body-parser");
const studentController = require("./controllers/studentController");
var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.get("/", (req, res) => {
  res.send(`
    <h2> Welcome to Students Database!!</h2>
    <h3>Click here to get access to the <b> <ahref="/student/list">Database</a> </b></h3>
    `);
});

app.set("views",path.join(__dirname,"/views/"));

app.engine(
    "hbs",
    exphbs({
        handleBars:allowInsecurePrototypeAccess(handleBars),
        extname:"hbs",
        defaultLayout:"mainLayout",
        layoutsDir:__dirname + "/views/layouts"
    })

);

app.set("view engine","hbs");
app.listen(5000,()=>{
    console.log("Express server started at port:5000")
});

app.use("/student",studentController);
