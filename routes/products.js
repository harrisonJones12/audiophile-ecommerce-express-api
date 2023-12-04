const express = require('express');


const db = require('../db/conn.js');

const router = express.Router();

let products;
let productsCollection;

const getProducts = async () => {
    if (db) {
        productsCollection = await db.collection('products');
    }
    /*  call toArray to make data in products collection/cursor
    availble to be used */
    products = await productsCollection.find({}).toArray();

}



router.get("/get-products", async (req, res) => {
    await getProducts();
    // console.log('products', products);
    if (products) {
        res.send({ products }).status(200);
    }
});

module.exports = router;