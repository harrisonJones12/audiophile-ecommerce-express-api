const express = require('express');
// const routes = require('./routes/index');
const cors = require('cors');

const PORT = process.env.PORT || 5050;

const app = express();

app.use(cors());
app.use(express.json());

app.use((err, _req, res, next) => {
    res.status(500).send("Uh oh! An unexpected error occured")
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})