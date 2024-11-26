// install dependencies

import jwt from 'jsonwebtoken';

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        console.error('JWT Verification Error:', error.message);
        throw new Error('Invalid Token');
    }
};

export { generateToken, verifyToken };


// Usage 
// import express from 'express';
// import { generateToken, verifyToken } from './jwtConfig.js';

// const app = express();
// app.use(express.json());

// app.post('/login', (req, res) => {
//     const { username } = req.body;
//     const token = generateToken({ username });
//     res.json({ token });
// });

// app.get('/protected', (req, res) => {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) return res.status(401).json({ message: 'Unauthorized' });

//     try {
//         const decoded = verifyToken(token);
//         res.json({ message: 'Access granted', data: decoded });
//     } catch (error) {
//         res.status(403).json({ message: error.message });
//     }
// });

// app.listen(3000, () => console.log('JWT Example running on http://localhost:3000'));
