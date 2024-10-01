const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cors = require('./middleware/cors')
connectDB();
const port = 3001;

const app = express();
app.use(cors);
app.use(express.json());
app.use('/', authRoutes);
// app.post('/', (req, res) => {
//     res.send("<h1>Welcome to our website!</h1>");
// });

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


