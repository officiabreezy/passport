const mongoose = require('mongoose');


const connectDB = async () => {
    try {
      await mongoose.connect (process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true });
      console.log ("connected to database");
    } catch (error) {
      console.log("error connecting to database"); 
      console.log(error);
    }
};

module.exports = connectDB;