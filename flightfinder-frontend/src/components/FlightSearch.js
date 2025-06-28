import React, { useState } from 'react';

const sampleFlights = [
  { from: 'Hyderabad', to: 'Delhi', time: '10:00 AM', price: 4500 },
  { from: 'Mumbai', to: 'Bangalore', time: '1:30 PM', price: 3500 },
  { from: 'Chennai', to: 'Kolkata', time: '6:45 PM', price: 5000 },
];

function FlightSearch({ onBook }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const matchedFlights = sampleFlights.filter(
      (flight) =>
        flight.from.toLowerCase().includes(from.toLowerCase()) &&
        flight.to.toLowerCase().includes(to.toLowerCase())
    );
    setResults(matchedFlights);
  };

  return (
    <div className="card p-4 shadow-sm mt-4">
      <h5>🔍 Search Flights</h5>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary w-100" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {results.length > 0 && (
        <ul className="list-group">
          {results.map((flight, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                ✈️ {flight.from} → {flight.to} | {flight.time} | ₹{flight.price}
              </div>
              <button className="btn btn-success btn-sm" onClick={() => onBook(flight)}>
                Book
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FlightSearch;
