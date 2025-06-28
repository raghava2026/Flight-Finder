import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      localStorage.setItem('loggedInUser', res.data.username); // ✅ store just username as string

      alert(res.data.message);
      navigate('/user');
      navigate('/user'); // Navigate to user dashboard
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h1 className="text-center mb-3 text-primary">✈️ FlightFinder</h1>
        <h5 className="text-center mb-4">Login to your account</h5>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>

        <div className="text-center mt-3">
          <span>Don't have an account? </span>
          <button
            className="btn btn-link p-0"
            onClick={() => navigate('/register')}
          >
            Register here
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
