const { MongoClient } = require('mongodb');

const { config } = require('dotenv');

config();

const connectionString = process.env.DATABASE_CONNECTION_URL || "";

const client = new MongoClient(connectionString);

let db;

async function conectToDb() {
    db = client.db('shop');
}

conectToDb().catch(console.dir);


module.exports = db;