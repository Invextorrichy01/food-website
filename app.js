const express = require('express');
const expressLayout = require("express-ejs-layouts");
const app = express();

app.use(express.static("./public"))
app.use(expressLayout)
app.set('layout', "./layouts/main")
app.set('view engine', 'ejs')

const PORT = 5000;

app.use("/", require("./routes/main"));

app.listen(PORT, () => {
    console.log(`app is listening on PORT ${PORT}`);
});