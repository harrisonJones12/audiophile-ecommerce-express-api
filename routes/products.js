const express = require('express');

// import db from '../db/conn.mjs'

const db = require('../db/conn.js');

const router = express.Router();

let products;

const getProducts = async () => {

    const productsCollection = await db.collection('products');


    products = await productsCollection.findOne({ name: "YX1 Wireless Earphones" });
    // console.log('products', products)

}



router.get("/get-products", async (req, res) => {
    // console.log('shopdb', shopdb)
    await getProducts();
    console.log('products', products);
    res.send({ products }).status(200);
});

// export default router;
module.exports = router;