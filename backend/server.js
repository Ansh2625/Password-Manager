const express = require('express');
require('dotenv').config()
const { MongoClient } = require('mongodb')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express();
const port = 3000;

app.use(bodyparser.json())
app.use(cors());

const client = new MongoClient(process.env.MONGO_URI);

const dbName = 'Password-Manager';

async function connectDB() {
    try {
        await client.connect();
        console.log("MongoDB Connected");

        app.listen(port, () => {
            console.log(`Listening at ${port}`);
        });

    } catch (error) {
        console.log(error);
    }
}

connectDB();

app.get('/', async (req,res)=>{
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
})

app.post('/', async (req,res)=>{
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({success: true, result:findResult})
})

app.delete('/', async (req,res)=>{
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.send({success: true, result:findResult})
})