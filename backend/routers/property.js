const { property } = require("../models/property");
const express = require("express");
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const fetchedProperties = await property.find();
    fetchedProperties
      ? res.status(200).json({ data: fetchedProperties, status: true })
      : res.status(404).json({ data: [], status: false });
  } catch (e) {
    res.status(400).json({ data: {}, status: false });
  }
});

router.get("/getOne/:id", async (req, res) => {
  try {
    const fetchedProperties = await property.findById(req.params.id);
    fetchedProperties
      ? res.status(200).json({ data: fetchedProperties, status: true })
      : res.status(404).json({ data: {}, status: false });
  } catch (e) {
    res.status(400).json({ data: {}, status: false });
  }
});

router.post("/new", async (req, res) => {
  try {
    let newProperties = new property({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    newProperties = await newProperties.save();
    newProperties
      ? res.status(200).json({ data: newProperties, status: true })
      : res.status(404).json({ data: {}, status: false });
  } catch (e) {
    res.status(400).json({ data: {}, status: false });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    let updateProperty = await property.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
      { new: true }
    );
  
    updateProperty
      ? res.status(200).json({ data: updateProperty, status: true })
      : res.status(404).json({ data: {}, status: false });
  } catch (e) {
    res.status(400).json({ data: {}, status: false });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedProperty = await property.findByIdAndDelete(req.params.id);
    deletedProperty
      ? res.status(200).json({ data: deletedProperty, status: true })
      : res.status(404).json({ data: deletedProperty, status: false });
  } catch (e) {
    res.status(400).json({ data: {}, status: false });
  }
});

module.exports = router;
