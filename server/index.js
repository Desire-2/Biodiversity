// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Event = require('./models/eventModel');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/server\models\eventModel.js', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Multer storage settings
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Create a folder named 'uploads' to store uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/events', upload.single('image'), async (req, res) => {
  const event = new Event({
    title: req.body.title,
    date: req.body.date,
    image: req.file.path, // Save the path where the image is stored
    description: req.body.description,
    location: req.body.location,
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
