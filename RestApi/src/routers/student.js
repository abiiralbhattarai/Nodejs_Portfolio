const express = require("express");
const router = new express.Router();
const Student = require("../models/students");
//create a new students
/*router.post("/students", (req, res) => {
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

router.post("/students", async (req, res) => {
  console.log(req.body);

  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/holiday", async (req, res) => {
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

router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(200).send(studentsData);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get the student data by id

router.get("/students/:id", async (req, res) => {
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

router.patch("/students/:id", async (req, res) => {
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
router.delete("/students/:id", async (req, res) => {
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

module.exports = router;
