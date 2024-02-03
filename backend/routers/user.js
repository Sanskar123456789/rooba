const { user } = require("../models/users");
const express = require("express");
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    let fetchedUser = await user.find();
    delete fetchedUser.password
    fetchedUser
      ? res.status(200).json({ data: fetchedUser, status: true })
      : res.status(404).json({ data: [], status: false });
  } catch (e) {
    res.status(400).json({ data: {}, status: false });
  }
});

router.get("/getOne/:id", async (req, res) => {
  try {
    let fetchedUser = await user.findById(req.params.id);
    fetchedUser = fetchedUser.toObject();
    delete fetchedUser.password;
    fetchedUser
      ? res.status(200).json({ data: fetchedUser, status: true })
      : res.status(404).json({ data: {}, status: false });
  } catch (e) {
    res.status(400).json({ data: {}, status: false });
  }
});

router.post("/new", async (req, res) => {
  try {
    let newUser = new user({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      country: req.body.country,
      age: req.body.age
    });
    newUser = await newUser.save();
    newUser = newUser.toObject();
    delete newUser.password;
    newUser
      ? res.status(200).json({ data: newUser, status: true })
      : res.status(404).json({ data: {}, status: false });
  } catch (e) {
    res.status(400).json({ data: {}, status: false });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const findUser = await user.findById(req.params.id);
    if (!findUser) {
      res.status(404).json({ data: {}, status: false });
    }
    let updateUser = await user.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        country: req.body.country,
        age: req.body.age
      },
      { new: true }
    );
    updateUser = updateUser.toObject();
    delete updateUser.password;
    updateUser
      ? res.status(200).json({ data: updateUser, status: true })
      : res.status(404).json({ data: updateUser, status: false });
  } catch (err) {
    res.status(400).json({ data: {}, status: false });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    let deletedUser = await user.findByIdAndDelete(req.params.id);
    deletedUser = deletedUser.toObject();
    delete deletedUser.password;
    deletedUser
      ? res.status(200).json({ data: deletedUser, status: true })
      : res.status(404).json({ data: deletedUser, status: false });
  } catch (e) {
    res.status(400).json({ data: {}, status: false });
  }
});

module.exports = router;
