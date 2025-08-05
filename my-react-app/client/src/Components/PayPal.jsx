import  { useEffect, useRef } from 'react';

export default function PayPal() {
  // Create a ref for the container div
  const paypalRef = useRef(null);

  // Grab the client ID from your Vite env
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  useEffect(() => {
    // Dynamically load the PayPal SDK if not already on the page
    if (!window.paypal) {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.addEventListener('load', renderButtons);
      document.body.appendChild(script);
    } else {
      renderButtons();
    }

    function renderButtons() {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [
                {
                  description: 'Cool looking table',
                  amount: { currency_code: 'USD', value: '100.00' },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log('Order details:', order);
          },
          onError: (err) => {
            console.error('PayPal error:', err);
          },
        })
        .render(paypalRef.current);
    }
  }, [clientId]);

  return <div ref={paypalRef} />;
}
