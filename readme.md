# Image Converter API

This uses Cloudinary.

GET `/`
Shows if it is running.

POST `/jpgtopng`
x-www-form-urlencoded
url:http://i0.kym-cdn.com/photos/images/newsfeed/000/674/934/422.jpg

Response: `<img src='http://res.cloudinary.com/<cloudname>/image/upload/blynaxzbdtlzrdoyonu4.png' />`
