// const routes = require('./routes/index');
import express from "express";
import cors from "cors"

import csp from "express-csp-header";

import products from './routes/products.mjs';

const PORT = process.env.PORT || 5050;

// const usePortOrUrl = 'https://audiophile-v1qp.onrender.com'


const app = express();

app.use(csp({
    policies: {
        'default-src': [csp.NONE],
        'img-src': [csp.SELF],
    }
}));


app.use(cors());
app.use(express.json());

app.use("/", products)

// app.use((err, _req, res, next) => {
//     res.status(500).send("Uh oh! An unexpected error occured")
// })

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})