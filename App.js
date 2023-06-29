import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './App.css';


// Polyfill for 'useEffect' and 'useState'
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'foo' && password === 'bar') {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className='App'>
    {
      loading ? (
        <ClimbingBoxLoader
          color={"#FF0000"} // Replace with your desired color
          loading={loading}
          size={10} />
      ) : 
      <div>
      {!isLoggedIn ? (
        <LoginPage handleLogin={handleLogin} />
      ) : (
        <HomePage handleLogout={handleLogout} />
      )
      }
      </div>
    }
    </div>
  );
}

export default App;
