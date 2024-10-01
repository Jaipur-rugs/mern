const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/MERN', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const app = express();
const PORT = 3002; // Ensure this is the port you're using

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  username: String,
  // other fields can go here
});

const User = mongoose.model('User', userSchema, 'User');

// Route to find user by username
app.get('/users/:username', async (req, res) => {
  try {
    console.log(req.params.username)
    const user = await User.findOne({ username: req.params.username });
    console.log(User.findOne({username: "John Doe"}))
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
