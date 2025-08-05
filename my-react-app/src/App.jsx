import { useState } from 'react'
import './App.css'
import PayPal from './Components/PayPal.jsx'

function App() {
  const [checkout, setCheckout] = useState(false)

  return (
    <div className="App">
    {checkout ? (
      <PayPal />
    ) : (
      <button onClick={
        () => setCheckout(true)
      }>Checkout</button>
    )}
    </div>
  )
}

export default App
