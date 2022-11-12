const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 1000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const jwt= require('jsonwebtoken')

//middleware
app.use(cors());
app.use(express.json());

// env variable datas
const user = process.env.DB_USER;
const password = process.env.PASS
const Secret = process.env.ACCESS_TOKEN_SECRET

const uri = `mongodb+srv://${user}:${password}@cluster0.nvx6pod.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).send({message: 'Unauthorized access'})
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, Secret, function (err, decoded) {
        if (err) {
            res.status(401).send({message:'Unauthorized access'})
        }
        req.decoded = decoded;
        next()
    })
}

async function run() {
    try {
        const servicesCollection = client.db('geniusCar').collection('services');
        const orderCollection = client.db('geniusCar').collection('orders');

        app.post('/jwt', (req, res) => {
            const user = req.body;
            console.log(user);
            const token = jwt.sign(user,Secret, { expiresIn: '1h' });
            res.send({token});
        })

        app.get('/services', async (req, res) => {
            const query = {price:{$gt:100,$lt:300}};
            const order = req.query.order === 'asc' ? 1 : -1;
            console.log(order)
            const cursor = servicesCollection.find(query).sort({price:order});
            const services = await cursor.toArray();
            res.send(services)
        })

        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const service = await servicesCollection.findOne(query);
            res.send(service)
        })

        // orders api

        app.get('/orders', verifyJWT, async (req, res) => {
            const decoded = req.decoded;
            console.log('inside orders api', decoded);
            if (decoded.email !== req.query.email) {
                res.status(403).send({message: 'Forbidden Access'})
            }
            let query = {};
            console.log(req.query)
            if (req.query.email) {
                query={email: req.query.email}
            }
            const cursor = orderCollection.find(query);
            const orders = await cursor.toArray();
            res.send(orders)
        })

        app.post('/orders',verifyJWT, async (req, res) => {
            const order = req.body;
            const result = await orderCollection.insertOne(order);
            res.send(result)
        })  

        // update
        app.patch("/orders/:id",verifyJWT, async (req, res) => {
            const id = req.params.id;
            const status=req.body.status
            const query = { _id: ObjectId(id) };
            const updatedDoc = {
                $set: {
                    status: status
                }
            };
          const result = await orderCollection.updateOne(query,updatedDoc);
          res.send(result);
        });

        app.delete('/orders/:id',verifyJWT, async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await orderCollection.deleteOne(query);
            res.send(result)
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