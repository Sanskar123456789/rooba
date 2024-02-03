const { categories } = require("../models/category");
const express = require("express");
const router = express.Router();

router.get("/all", async function (req, res) {
  try {
    const allCategories = await categories.find();
    allCategories
      ? res.status(200).json({ data: allCategories, status: true })
      : res.status(404).json({ data: [], status: false });
  } catch (e) {
    res.status(400).json({ data: [], status: false });
  }
});

router.get("/getOne/:id", async function (req, res) {
  try {
    const oneCategory = await categories
      .findOne({ id: req.params.id })
      .populate("properties");
    oneCategory
      ? res.status(200).json({ data: oneCategory, status: true })
      : res.status(404).json({ data: {}, status: false });
  } catch (e) {
    res.status(400).json({ data: {}, status: false });
  }
});

router.post("/newCategory", async function (req, res) {
  try {
    let newCategory = new categories({
      name: req.body.name,
      newProperties: req.body.propertyIds,
    });
    newCategory = await newCategory.save();
    newCategory
      ? res.status(200).json({ data: newCategory, status: true })
      : res.status(404).json({ data: {}, status: false });
  } catch (e) {
    res.status(400).json({ data: {}, status: false });
  }
});

router.post("/addProperty/:id", async function (req, res) {
  try {
    let updateCategory = await categories.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        newProperties: req.body.propertyIds,
      },
      { new: true }
    );

    updateCategory
      ? res.status(200).json({ data: updateCategory, status: true })
      : res.status(404).json({ data: {}, status: false });
  } catch (err) {
    res.status(400).json({ data: {}, status: false });
  }
});

router.delete("/deleteCategory/:id", async function (req, res) {
  try {
    const deletedCategory = await categories.findByIdAndDelete(req.params.id);
    deletedCategory
      ? res.status(200).json({ data: deletedCategory, status: true })
      : res.status(404).json({ data: deletedCategory, status: false });
  } catch (e) {
    res.status(400).json({ data: {}, status: false });
  }
});

module.exports = router;
