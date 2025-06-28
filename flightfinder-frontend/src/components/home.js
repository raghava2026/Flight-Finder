import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <div className="container-fluid">
          <span className="navbar-brand fs-3">✈️ FlightFinder</span>
          <button
            className="btn btn-light ms-auto"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Home Content */}
      <div className="container mt-5">
        <div className="p-5 bg-light rounded shadow">
          <h2 className="mb-4 text-primary">Welcome to FlightFinder</h2>
          <p style={{ fontSize: '1.2rem' }}>
            FlightFinder is your personal air travel assistant. You can easily search for available flights, book tickets, and manage your travel plans all in one place. Whether you're traveling for business or leisure, our platform ensures a smooth and secure booking experience.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            🚀 Features:
            <ul>
              <li>Search flights by city</li>
              <li>Book instantly</li>
              <li>View & manage bookings</li>
              <li>Admin panel to manage flights</li>
            </ul>
          </p>
          <p className="mt-4">
            <strong>Note:</strong> To continue, please log in using the button above.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
