const express = require('express')
const cloudinary = require('cloudinary')

const app = express()
cloudinary.config({ 
  cloud_name: 'sample', 
  api_key: '874837483274837', 
  api_secret: 'a676b67565c6767a6767d6767f676fe1' 
});

app.post('/jpgtopng', (req, res) => {
  // blah blah convert image
  res.send('Image Converter API')
})

app.listen(3000, () => console.log('Image Converter API running on port 3000!'))
