import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Auth from './pages/Auth';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const token = localStorage.getItem('eshop_jwt');

  useEffect(() => {
    if (token) {
      setIsLogedIn(true);
    }
  }, [token]);

  return (
    <Router>
      <NavBar isLogedIn={isLogedIn} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={<Auth setIsLogedIn={setIsLogedIn} login />} />
        <Route path='/auth/register' element={<Auth register />} />
        <Route path='/cart' element={<Cart isLogedIn={isLogedIn} />} />
        <Route path='/profile' element={<Profile isLogedIn={isLogedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
