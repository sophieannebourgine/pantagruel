// server/configs/cloudinary.js
const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'restaurant-pantagruel',
  allowedFormats: ['jpg', 'png', 'gif'],
  filename: (req, file, cb) => {
    cb(null, file.originalname) // The file on cloudinary would have the same name as the original file name
  },
})

const uploader = multer({ storage })
module.exports = uploader
