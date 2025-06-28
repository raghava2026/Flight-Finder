import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = async () => {
    if (!email || !username || !password) {
      alert('Please fill all fields');
      return;
    }

    if (!validateEmail(email)) {
      alert('Invalid email format');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        username,
        password
      });
      alert(res.data.message);
      navigate('/'); // redirect to login
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h1 className="text-center mb-3 text-success">✈️ FlightFinder</h1>
        <h5 className="text-center mb-4">Create your account</h5>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-success w-100" onClick={handleRegister}>
          Register
        </button>

        <div className="text-center mt-3">
          <span>Already have an account? </span>
          <button
            className="btn btn-link p-0"
            onClick={() => navigate('/')}
          >
            Login here
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
