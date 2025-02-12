import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ContactUs from './ContactUs';
import BookParking from './BookParking';
import MyBookings from './MyBookings'; // You need to create this component
import Payments from './payments.js';
import AboutUs from './AboutUs.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-parking" element={<BookParking />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/My-Bookings" element={<MyBookings />} />
        <Route path="/payments" element={<Payments/>} />
        <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
