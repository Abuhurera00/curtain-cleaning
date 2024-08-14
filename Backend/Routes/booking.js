const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST route to handle form submissions
router.post('/', async (req, res) => {
    const { name, email, phone, address, message } = req.body;
    try {
        const newBooking = new Booking({
            name,
            email,
            phone,
            address,
            message
        });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
