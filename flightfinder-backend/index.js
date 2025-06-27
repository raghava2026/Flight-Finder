const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Booking = require('./models/Booking');
const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/flightfinder')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// ✅ User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// ✅ Register Route
app.post('/api/auth/register', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ email, username, password });
    await newUser.save();
    res.status(200).json({ message: 'Registration successful!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Login Route
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful!', username: user.username });

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


// POST: Create new booking
app.post('/api/bookings', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ message: 'Booking confirmed!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to book flight' });
  }
});

// GET: Get bookings for a user
app.get('/api/bookings/:username', async (req, res) => {
  try {
    const bookings = await Booking.find({ username: req.params.username });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});

// ✅ Test Route
app.get('/', (req, res) => {
  res.send('FlightFinder backend is running ✈️');
});

// ✅ Start Server
app.listen(5000, () => {
  console.log('🚀 Server started at http://localhost:5000');
});


