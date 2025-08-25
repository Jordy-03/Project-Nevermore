require('dotenv').config();

const express = require('express');
const axios = require('axios');
const router = express.Router();

const app = express();
app.use(express.json());

app.post('/api/send-confirmation', async (req, res) => {
    const {email, orderDetails} = req.body;

    const payload = {
        sender: { 
            name: "Nevermore",
            email: "no-reply@nevermore.com"
        },
        to: [{ email }],
        subject: "Order Confirmation",
        htmlContent: '<p>Thanks for your order!</p>'
    };

    try {
        await axios.post("https://api.brevo.com/v3/smtp/email", payload, {
            headers: {
                "api-key": process.env.BREVO_API_KEY,
                "Content-Type": "application/json"
            }
        });
        res.status(200).json( {success: true })
    } catch (err) {
        console.error("Email error: ", err.response?.data || err.message);
        res.status(500).json({ sucess: false, error: err.message })
    }
});

app.listen(5000, () => console.log("Backend running on port 5000"));
module.exports = router;