import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />       }  />
        <Route path ="/order" element={<OrderPage/> } />
        <Route path ="/booking" element ={<BookingPage/>  } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
