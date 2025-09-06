// server/routes/paypal.js
const express = require('express');
const router  = express.Router();

// resilient import of the PayPal Server SDK
let paypal = require('@paypal/paypal-server-sdk');
paypal = paypal.default || paypal;

// configure PayPal environment & client
const clientId     = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error(
    'Missing PAYPAL_CLIENT_ID or PAYPAL_CLIENT_SECRET in .env'
  );
}

const environment = new paypal.core.SandboxEnvironment(
  clientId,
  clientSecret
);
const client = new paypal.core.PayPalHttpClient(environment);

// POST /api/paypal/create-order
router.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer('return=representation');
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      { amount: { currency_code: 'USD', value: amount } }
    ]
  });

  try {
    const order = await client.execute(request);
    res.json({ id: order.result.id });
  } catch (err) {
    console.error('PayPal Create Order Error:', err);
    res.status(500).json({ error: 'Order creation failed' });
  }
});

// POST /api/paypal/capture-order
router.post('/capture-order', async (req, res) => {
  const { orderID } = req.body;

  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});

  try {
    const capture = await client.execute(request);
    res.json({ status: capture.result.status });
  } catch (err) {
    console.error('PayPal Capture Order Error:', err);
    res.status(500).json({ error: 'Order capture failed' });
  }
});

module.exports = router;
