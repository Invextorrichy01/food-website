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


module.exports = router;