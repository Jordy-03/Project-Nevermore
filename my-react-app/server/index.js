require('dotenv').config();
const express = require('express');
const emailRoutes = require('./routes/email');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', emailRoutes);
app.get('/health', (req, res) => {
    res.status(200).send('ok');
});

app.listen(port, () => {
    console.log("Server running");
});
