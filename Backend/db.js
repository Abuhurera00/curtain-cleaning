const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const mongoURI = process.env.MONGO_URI;

async function connectToMongo() {
    try {
        await mongoose.connect(mongoURI);
        console.log("Hurera you are Connected to Mongo Successfully");
    } catch (err) {
        console.log(err);
        process.exit(1); 
    }
}

module.exports = connectToMongo;
