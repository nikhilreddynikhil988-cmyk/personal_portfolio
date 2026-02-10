const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const contactRoute = require('./routes/contact');
require('dotenv').config();

const app = express();
// Log incoming requests for debugging on Vercel
app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.originalUrl);
  next();
});
const port = process.env.PORT || 5000;

// Update CORS for production

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);

    const allowedOrigins = [
      'http://localhost:3000',
      process.env.FRONTEND_URL
    ].filter(Boolean);

    // Allow same-origin requests or matches allowedOrigins or localhost
    const isSameOrigin = origin.includes(process.env.VERCEL_URL) ||
      origin.includes('vercel.app') ||
      origin.startsWith('http://localhost:');

    if (allowedOrigins.includes(origin) || isSameOrigin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
// Ensure preflight OPTIONS requests are handled
app.options('*', cors());
app.use(express.json());

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`MongoDB connected to: ${mongoURI.includes('cluster') ? 'Remote Cluster' : 'Local Database'}`))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    console.log('Ensure MongoDB is running locally if you are in offline mode.');
  });

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

app.use('/api/contact', contactRoute);

// Serve static files from the React build
const buildPath = path.resolve(__dirname, '../frontend/build');
console.log('--- Deployment Diagnostics ---');
console.log('Current directory (__dirname):', __dirname);
console.log('Targeting build path:', buildPath);

// Check if build directory exists (logging only)
const fs = require('fs');
if (fs.existsSync(buildPath)) {
  console.log('✓ Build directory found');
  const files = fs.readdirSync(buildPath);
  console.log('Files in build directory:', files);
} else {
  console.log('✗ Build directory NOT found at:', buildPath);
}
console.log('------------------------------');

app.use(express.static(buildPath));

// Catch-all route for SPA - serve index.html for any non-API routes
app.get('*', (req, res) => {
  const indexPath = path.join(buildPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error sending index.html:', err);
      // In production, provide a more helpful error message
      res.status(404).json({
        error: 'Frontend not found',
        pathChecked: indexPath,
        message: 'Please ensure build step completed successfully.'
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;