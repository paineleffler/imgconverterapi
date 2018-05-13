const express = require('express')
const cloudinary = require('cloudinary')
const bodyParser = require("body-parser");

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('dotenv').config()

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

app.post('/jpgtopng', (req, res) => {
  // blah blah convert image
  cloudinary.v2.uploader.upload(req.body.url, 
    (error, result) => {
      res.send(cloudinary.image(result.public_id, { format: 'png' }))
    }
  );
})

app.listen(3000, () => console.log('Image Converter API running on port 3000!'))
