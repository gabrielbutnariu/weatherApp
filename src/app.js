// Bring the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config({path: __dirname + '/.env'});

console.log(__dirname);
const getWeatherRoutes = require('./routes/get_weather');

const app = express(); 

app.use(express.json());

app.use(cors());

// Routes Settings
app.use('/get-weather', getWeatherRoutes);

// Listen to server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${process.env.PORT}` )
});