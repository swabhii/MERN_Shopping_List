const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');


const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));


//Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

//cluster0-shard-00-02-itvdk.mongodb.net:27017
//--db test --type json --jsonArray --authenticationDatabase admin --ssl --username Swabhi --password swabhi123