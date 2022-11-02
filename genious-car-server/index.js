const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 1000;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());

const user = process.env.DB_USER;
const password = process.env.PASS
const uri = `mongodb+srv://${user}:${password}@cluster0.nvx6pod.mongodb.net/?retryWrites=true&w=majority`;



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



app.get('/', (req, res) => {
    res.send('genius car server running')
})

app.listen(port, () => {
    console.log(`Genius Car Server running on port ${port}`);
});