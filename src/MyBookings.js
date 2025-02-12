import React from 'react';
import './MyBookings.css';

const MyBookings = () => {
  const bookings = [
    {
      id: 'B1',
      spot: 'Spot 1',
      location: 'Downtown Parking Garage',
      date: '2025-02-14',
      time: '10:00 AM - 12:00 PM',
      paymentStatus: 'Paid',
      bookingStatus: 'Confirmed',
    },
    {
      id: 'B2',
      spot: 'Spot 2',
      location: 'City Center Parking Lot',
      date: '2025-02-18',
      time: '2:00 PM - 4:00 PM',
      paymentStatus: 'Pending',
      bookingStatus: 'Pending',
    },
    {
      id: 'B3',
      spot: 'Spot 3',
      location: 'Airport Parking',
      date: '2025-02-20',
      time: '5:00 PM - 7:00 PM',
      paymentStatus: 'Paid',
      bookingStatus: 'Confirmed',
    },
  ];

  return (
    <div className="my-bookings-container">
      <h2>My Parking Bookings</h2>
      <p>View your current and past parking bookings, including location, time, and payment status.</p>

      <div className="booking-list">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-item">
            <div className="booking-header">
              <h3>{booking.spot} at {booking.location}</h3>
              <span className={`status ${booking.bookingStatus.toLowerCase()}`}>
                {booking.bookingStatus}
              </span>
            </div>
            <div className="booking-details">
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Payment Status:</strong> {booking.paymentStatus}</p>
            </div>
            <div className="booking-actions">
              <button className="view-details-btn">View Details</button>
              {booking.bookingStatus === 'Confirmed' && (
                <button className="cancel-btn">Cancel Booking</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
