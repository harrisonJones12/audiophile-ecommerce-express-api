// const routes = require('./routes/index');
const express = require('express')
// import cors from "cors"
// const cors = require('cors')

// import expressCspHeader from "express-csp-header";

// const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');

// import products from './routes/products.mjs';
const products = require('./routes/products.js');

const helmet = require('helmet')


const PORT = process.env.PORT || 5050;

// const usePortOrUrl = 'https://audiophile-v1qp.onrender.com'


const app = express();

const scriptSources = ["'self'", "'unsafe-inline'", "'unsafe-eval'"];

app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: scriptSources,
            // ...
        },
    })
)

// app.use(cors());
app.use(express.json());

app.use("/", products)

// app.use((err, _req, res, next) => {
//     res.status(500).send("Uh oh! An unexpected error occured")
// })

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})