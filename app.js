require('dotenv').config()
const express = require('express');
const expressLayout = require("express-ejs-layouts");
const connectDB = require("./config/db");
const app = express();

const PORT = 5000;
connectDB();

app.use(express.static("./public"))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(expressLayout)
app.set('layout', "./layouts/main")
app.set('view engine', 'ejs')

app.use("/", require("./routes/main"));
app.use("/", require("./routes/admin"));


app.listen(PORT, () => {
    console.log(`app is listening on PORT ${PORT}`);
});