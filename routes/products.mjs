import express from "express";
import db from '../db/conn.mjs'

const router = express.Router();

router.get("/get-products", async (req, res) => {
    const collection = await db.collection("products");
    const results = await collection.find({}).toArray();
    res.send(results).status(200);
});

export default router;