const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// لینک اسکریپت خود را اینجا قرار دهید
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby_m94c6uQD9nfF0i0iYDNw8irMPylFz-iRmTOAsGn8HvZhAqmrjApNdMqQEiE8LhQR/exec'; 

app.get('/get-ads', async (req, res) => {
    const ownerFilter = req.query.owner;
    try {
        const response = await axios.get(GOOGLE_SCRIPT_URL);
        let data = response.data;

        if (ownerFilter) {
            data = data.filter((row, index) => index === 0 || row[1] === ownerFilter);
        }
        res.json(data);
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
});

app.post('/register', async (req, res) => {
    try {
        const { username, password, type } = req.body;
        await axios.post(GOOGLE_SCRIPT_URL, { action: 'register', username, password, type });
        res.send('User Registered');
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
});

app.post('/track', async (req, res) => {
    try {
        const { adId, ip, timestamp } = req.body;
        await axios.post(GOOGLE_SCRIPT_URL, { action: 'track', adId, ip, timestamp });
        res.send('Click Logged');
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
});

app.listen(3000, () => console.log('Platform Online'));

