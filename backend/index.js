require('dotenv').config()

const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001


app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.json({"message" : "Hello there"})
})

app.use('/', require('./routes/userRoutes'));

app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})