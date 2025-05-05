const express = require('express');
const Category = require('../models/Category');
const router = express.Router()

router.get("", async (req, res) => {
    try {
      const categories = await Category.find().limit(3)
      res.render("index", {categories});
    } catch (error) {
        console.log(error);
    }
});
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find()
    res.render("categories", {categories});
  } catch (error) {
      console.log(error);
  }
});
router.get("/menus", async (req, res) => {
  try {
    res.render("menus");
  } catch (error) {
      console.log(error);
  }
});
router.get("/reservation", async (req, res) => {
  try {
    res.render("reservation");
  } catch (error) {
      console.log(error);
  }
});
router.get("/blogs", async (req, res) => {
  try {
    res.render("blogs");
  } catch (error) {
      console.log(error);
  }
});
router.get("/about", async (req, res) => {
  try {
    res.render("about");
  } catch (error) {
      console.log(error);
  }
});


module.exports = router;