const express = require('express')
const cloudinary = require('cloudinary')
const app = express()
require('dotenv').config()

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

app.post('/jpgtopng', (req, res) => {
  // blah blah convert image
  res.send('Image Converter API')
})

app.listen(3000, () => console.log('Image Converter API running on port 3000!'))
