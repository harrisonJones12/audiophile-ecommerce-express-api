

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_CONNECTION_URL;
const routes = require('./routes/index');

mongoose.connect(mongoString);

// const database = mongoose.connection;

const app = express();

//Mongose code 

// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })



app.use(express.json());

app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})