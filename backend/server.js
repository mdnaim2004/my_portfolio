const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Contact form submission endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  // In a real application, you would send an email or save to a database here.
  // For this portfolio, we'll just log it and send a success response.
  console.log('Received contact submission:', { name, email, message });
  
  // Simulate network delay
  setTimeout(() => {
    res.status(200).json({ success: true, message: 'Message received successfully!' });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
