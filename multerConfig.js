// install dependencies

import multer from 'multer';
import path from 'path';

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save to 'uploads' directory
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
    },
});

// File filter to allow only images
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed'), false);
    }
};

const upload = multer({ storage, fileFilter });

export default upload;


// usage
// import express from 'express';
// import upload from './multerConfig.js';

// const app = express();

// app.post('/upload', upload.single('image'), (req, res) => {
//     if (!req.file) return res.status(400).json({ message: 'File upload failed' });
//     res.json({ message: 'File uploaded successfully', file: req.file });
// });

// app.listen(3000, () => console.log('Multer Example running on http://localhost:3000'));
