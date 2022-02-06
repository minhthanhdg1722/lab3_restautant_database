const express = require('express');
const mongoose = require('mongoose');
const restaurantsRouter = require('./routes/RestaurantRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://mthanhdg:Mt6475139798@cluster0.muxfz.mongodb.net/restaurants?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(restaurantsRouter)

app.listen(8081, ()=>{console.log('Server is running...')});