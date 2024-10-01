// routes/authRoutes.js
const express = require('express');
const { loginUser } = require('../controllers/auth');

const router = express.Router();
 router.post('/login', loginUser);
// router.get('/', (req, res) => {
//     res.send('<h1>Welcome to My Express Server!</h1>');
// });

    module.exports = router;


   