const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 1000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());

const user = process.env.DB_USER;
const password = process.env.PASS
const uri = `mongodb+srv://${user}:${password}@cluster0.nvx6pod.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const servicesCollection = client.db('geniusCar').collection('services');

        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = servicesCollection.find(query);
            const services = await cursor.toArray();
            res.send(services)
        })

        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const service = await servicesCollection.findOne(query);
            res.send(service)
        })
    }
    finally {
        
    }
}
run().catch(err => console.error(err));


app.get('/', (req, res) => {
    res.send('genius car server running')
})

app.listen(port, () => {
    console.log(`Genius Car Server running on port ${port}`);
});