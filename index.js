const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config()

/* 1. Conectamos nuetsro proyecto por un puerto */
console.log(`Connect in the port ${process.env.PORT}`);

/* Método liste: variedad 2(puerto, función flecha) */
app.listen(process.env.PORT, () => { console.log(`Connect in the port ${process.env.PORT}`) });

/* endpoint: http://localhost:3000 */
/* Connect with mongodb */
mongoose.set('strictQuery', false);

mongoose.connect(process.env.STRING_CONNECTION).then(() => { console.log('Success connection') }).catch((err) => { console.error(err) });