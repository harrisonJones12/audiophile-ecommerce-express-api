const express = require('express');


const db = require('../db/conn.js');

const router = express.Router();

let products;

const getProducts = async () => {

    const productsCollection = await db.collection('products');

    products = await productsCollection.findOne({ name: "YX1 Wireless Earphones" });


}



router.get("/get-products", async (req, res) => {
    await getProducts();
    // console.log('products', products);
    res.send({ products }).status(200);
});

module.exports = router;