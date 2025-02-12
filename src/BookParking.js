import React, { useState } from 'react';
import './BookParking.css';

const BookParking = () => {
  const [selectedSpot, setSelectedSpot] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');

  const parkingSpots = [
    { id: 'Spot 1', status: 'available' },
    { id: 'Spot 2', status: 'available' },
    { id: 'Spot 3', status: 'available' },
    { id: 'Spot 4', status: 'available' },
  ];

  const handleSpotSelect = (spot) => {
    if (spot.status === 'available') {
      setSelectedSpot(spot.id);
    }
  };

  const handleBooking = () => {
    if (!selectedSpot || !selectedDate || !selectedTime) {
      setBookingStatus('Please select all fields!');
      return;
    }

    // Simulate booking process
    setBookingStatus(`Booking confirmed for ${selectedSpot} on ${selectedDate} at ${selectedTime}.`);
  };

  return (
    <div className="book-parking-container">
      <h2>Book Your Parking Spot</h2>
      <p>Select a parking spot, choose a date and time, and confirm your booking.</p>

      <div className="parking-spots">
        {parkingSpots.map((spot) => (
          <div
            key={spot.id}
            className={`parking-spot ${selectedSpot === spot.id ? 'selected' : ''} ${spot.status === 'booked' ? 'booked' : ''}`}
            onClick={() => handleSpotSelect(spot)}
            style={spot.status === 'booked' ? { cursor: 'not-allowed' } : {}}
          >
            {spot.id}
            {spot.status === 'booked' && <span className="status">Booked</span>}
          </div>
        ))}
      </div>

      <div className="date-time-selection">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="date-picker"
        />
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="time-picker"
        />
      </div>

      <button className="book-btn" disabled={!selectedSpot || !selectedDate || !selectedTime} onClick={handleBooking}>
        Book Spot
      </button>

      {bookingStatus && <p className="booking-status">{bookingStatus}</p>}
    </div>
  );
};

export default BookParking;
