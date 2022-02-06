const express = require("express")
const restaurantModel = require('../models/Restaurant.js')
const app = express()

app.get('/restaurants', async(req,res)=>{
    const restaurant = []
    if (req.query.sortBy == null){
        restaurants = await restaurantModel.find({});
    } else {
        restaurants = await restaurantModel.find({}).select("_id name city restaurant_id").sort({'restaurant_id' : req.query.sortBy});
    }
    

    try{
        res.status(200).send(restaurants);
    }catch (err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants/Delicatessen', async(req,res)=>{

    const restaurants = await restaurantModel.find({cuisine: 'delicatessen', $not: {city: "brooklyn"}}).select("cuisine name city").sort({'name' : 'ASC'});
    

    try{
        res.status(200).send(restaurants);
    }catch (err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants/cuisine/:cuisine', async(req,res)=>{
    const restaurants = await restaurantModel.find({cuisine: req.params.cuisine});

    try{
        res.status(200).send(restaurants);
    }catch (err) {
        res.status(500).send(err);
    }
});


module.exports = app