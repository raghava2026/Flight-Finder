import React, { useEffect, useState } from 'react';
import FlightSearch from './FlightSearch';

function UserDashboard() {
  const [bookings, setBookings] = useState([]);

  // Retrieve the logged-in username from localStorage (stored as a string)
  const username = localStorage.getItem('loggedInUser');



  useEffect(() => {
    const allBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const userBookings = allBookings.filter((b) => b.username === username);
    setBookings(userBookings);
  }, [username]);

  const handleBooking = (flight) => {
    const newBooking = {
      ...flight,
      username,
      date: new Date().toLocaleString(),
    };

    const allBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const updatedBookings = [...allBookings, newBooking];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    setBookings((prev) => [...prev, newBooking]);
    alert('✅ Booking Confirmed!');
  };

  const cancelBooking = (index) => {
    const allBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const updatedAll = allBookings.filter(
      (b, i) => !(b.username === username && i === index)
    );
    localStorage.setItem('bookings', JSON.stringify(updatedAll));

    const updatedUser = bookings.filter((_, i) => i !== index);
    setBookings(updatedUser);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">Welcome, {username}</h2>

      {/* Flight Search Component */}
      <FlightSearch onBook={handleBooking} />

      <h4 className="mt-5">🛫 My Bookings</h4>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul className="list-group">
          {bookings.map((b, i) => (
            <li
              key={i}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{b.from}</strong> → <strong>{b.to}</strong> | {b.time} | ₹{b.price}
                <br />
                <small>Booked on: {b.date}</small>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => cancelBooking(i)}
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserDashboard;
