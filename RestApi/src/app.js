const express = require("express");
require("./db/conn");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello I am Abiral");
});
app.get("/students", (req, res) => {
  res.send("Hello from other sides.");
});
//create a new students
app.post("/students", (req, res) => {
  res.send("Hello");
});
app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
