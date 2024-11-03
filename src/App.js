// App.js
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Home from './pages/Home';
import AppNavbar from './components/AppNavBar';
import UserView from './components/UserView';
import Register from './pages/Register';
import Login from './pages/Login';
import Workouts from './pages/Workouts';

function App() {
  const [user, setUser] = useState({
    id: null,
    token: null
  });

  return (
    <UserProvider value={{ user, setUser }}>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
