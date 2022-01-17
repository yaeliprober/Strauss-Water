const express = require("express");
const dotenv = require('dotenv')
const bodyParser= require('body-parser')
const routes = require('./src/routes/api')
const cors =require('cors')
const db = require("./src/db/database");

const app = express();

dotenv.config()
app.use(cors())
app.use(bodyParser.json())
app.use(routes)



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
});
