const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/computerpark', {
    useNewUrlParser: true, useUnifiedTopology: true
});

requireDir('./src/models');

app.use('/computerpark/', require('./src/routes'));

app.listen(80, () => {
    console.log('Server is running: http://192.168.94.70:8080')
});
