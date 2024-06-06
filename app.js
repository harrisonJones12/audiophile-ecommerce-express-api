// const routes = require('./routes/index');
const express = require('express')
// import cors from "cors"
const cors = require('cors')

// import expressCspHeader from "express-csp-header";

// const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');

const products = require('./routes/products.js');

const helmet = require('helmet')


const PORT = process.env.PORT || 5050;



const app = express();

app.use(cors())

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

app.use(express.json());

app.use("/", products)

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})