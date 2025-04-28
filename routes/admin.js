const express = require('express')
const router = express.Router()
const adminLayout = '../views/layouts/admin';

router.get("/dashboard", async (req, res) => {
    try {
        res.render('admin/dashboard', { layout: adminLayout})
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;