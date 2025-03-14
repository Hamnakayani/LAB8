const express = require('express');
const connectDB = require('./src/config/db');
require('dotenv').config();

const app = express();
connectDB();
app.use(express.json());

app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/events', require('./src/routes/eventRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
