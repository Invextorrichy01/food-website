const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload');
const Category= require('../models/Category')
const adminLayout = '../views/layouts/admin';

router.get("/dashboard", async (req, res) => {
    try {
        res.render('admin/dashboard', { layout: adminLayout})
    } catch (error) {
        console.log(error);
    }
});
router.get('/addnew', async(req, res) =>{
    try {
        res.render("admin/addNew", { layout: adminLayout });
    } catch (error) {
        console.log(error);
    }
});
router.post('/category', upload.single('image'), async(req, res) =>{
    try {
        const {name} = req.body;
        const image = "/uploads/" + req.file.filename;
        const newCategory = new Category({ name, image});
        await Category.create(newCategory);
        res.redirect("/dashboard");
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;