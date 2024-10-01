// corsMiddleware.js
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000', // Allow all origins or specify specific origins
    methods: ['GET','POST','PUT','DELETE','OPTIONS'], // Allowed methods
    credentials: true,
    allowedHeaders: ['Content-Type','Authorization'], // Allowed headers
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
