import { MongoClient } from "mongodb";

import { config } from 'dotenv';

config()

const connectionString = process.env.DATABASE_CONNECTION_URL || "";

const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.log(e);
}

let db = conn.db("shop");

export default db;