const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

//create a new students

/*app.post("/students", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});*/

//using async await

app.post("/students", async (req, res) => {
  console.log(req.body);

  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/holiday", async (req, res) => {
  console.log(req.body);

  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get the student data

app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(200).send(studentsData);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get the student data by id

app.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentsData = await Student.findById(_id);
    if (!studentsData) {
      return res.status(404).send();
    } else {
      res.send(studentsData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

//update the students by id

app.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateStudents);
  } catch (e) {
    res.status(404).send(e);
  }
});

//update the delete
app.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(_id);
    if (!_id) {
      return res.status(400).send();
    }
    res.send(deleteStudent);
  } catch {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
