const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Middleware for logging requests
app.use(morgan('dev'));

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// In-memory array to store events (in a real-world scenario, you would use a database)
const events = [];

// Endpoint for getting events
app.get('/events', (req, res) => {
  res.json(events);
});

// Endpoint for adding a new event
app.post('/events', upload.single('image'), (req, res) => {
  try {
    const { title, date, description, location } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !date || !description || !location) {
      throw new Error('All fields are required.');
    }

    const newEvent = {
      id: events.length + 1,
      title,
      date,
      description,
      location,
      image: imagePath,
    };

    events.push(newEvent);

    res.status(201).json(newEvent);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
});

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Handle other errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
