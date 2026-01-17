
const express = require('express');
const Subscriber = require('./models/subscribers');
const app = express()


// Your code goes here
// Get all subscribers
app.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get subscriber names and channels
app.get('/subscribers/names', async (req, res) => {
  try {
    const subscribers = await Subscriber.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get subscriber by ID
app.get('/subscribers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const subscriber = await Subscriber.findById(id);
    
    if (!subscriber) {
      return res.status(400).json({ message: "Subscriber not found" });
    }

    res.json(subscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});




















module.exports = app;
