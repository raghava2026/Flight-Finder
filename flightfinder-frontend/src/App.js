import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import UserDashboard from './components/UserDashboard';
import AdminLogin from './components/AdminLogin';
import Home from  './components/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<h2 className="text-center mt-5">Welcome Admin</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
