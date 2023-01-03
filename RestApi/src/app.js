const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello I am Abiral");
});
app.get("/students", (req, res) => {
  res.send("Hello from other sides.");
});
//create a new students
app.post("/students", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body)
  res.send("Hello");
});
app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
