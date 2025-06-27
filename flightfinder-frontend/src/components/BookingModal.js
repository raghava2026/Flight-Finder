import React from 'react';

function BookingModal({ flight, onClose }) {
  if (!flight) return null;

  const handleConfirmBooking = () => {
    alert(`Booking confirmed for flight: ${flight.flight}`);
    onClose(); // Close modal after booking
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Booking Flight</h3>
        <p><strong>Flight:</strong> {flight.flight}</p>
        <p><strong>From:</strong> {flight.from}</p>
        <p><strong>To:</strong> {flight.to}</p>
        <button onClick={handleConfirmBooking}>Confirm Booking</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    textAlign: 'center'
  }
};

export default BookingModal;
