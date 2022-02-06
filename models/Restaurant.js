const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    address: {
        type: Object,
        building: {
            type: String
        },
        street: {
            type: String,
            trim:true,
            lowercase: true
        },
        zipcode: {
            type: String
        }
    },
    city: {
        type: String,
        trim:true,
        lowercase: true
    },
    cuisine: {
        type: String,
        trim: true,
        lowercase: true
    },
    name: {
        type: String,
        trim:true,
        lowercase: true
    },
    restaurant_id: {
        type: String,
    },
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;