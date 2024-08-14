const express = require('express');
const connectToMongo = require('./db');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

connectToMongo();

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Define routes
app.use('/api/bookings', require('./routes/booking'));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
