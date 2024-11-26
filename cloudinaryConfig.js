// install dependencies

import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { cpuUsage } from 'process';

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer to use Cloudinary
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'uploads', // Cloudinary folder name
        allowed_formats: ['jpg', 'png', 'jpeg'],
    },
});

export { cloudinary, storage };


// Usage 
// import express from 'express';
// import multer from 'multer';
// import { storage } from './cloudinaryConfig.js';

// const app = express();
// const upload = multer({ storage });

// app.post('/upload-cloudinary', upload.single('image'), (req, res) => {
//     if (!req.file) return res.status(400).json({ message: 'File upload failed' });
//     res.json({ message: 'File uploaded to Cloudinary', file: req.file });
// });

// app.listen(3000, () => console.log('Cloudinary Example running on http://localhost:3000'));
