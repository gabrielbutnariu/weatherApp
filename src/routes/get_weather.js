// Dependencies
const { response } = require('express');
const express = require('express');
const router = express.Router();
const request = require('request');

router.post('/', (req,res) => {
    console.log(req.body);

    console.log(process.env.OPEN_WEATHER_API);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${process.env.OPEN_WEATHER_API}`;

    request(url, (error, response, body) => {
        if(error){
            return res.json({
                success : false,
                error : "This is service is temporarily unavailable. Please try again later!"
            })
        }else {
            let weather = JSON.parse(body);
            console.log(weather.cod);
            if(weather.cod !== '404'){
                return res.json({
                    success : true,
                    weather : weather
                })
            }else {
                return res.json({
                    success:false,
                    weather:{}
                })
            }
        }
    })
})

// Export the router
module.exports = router;