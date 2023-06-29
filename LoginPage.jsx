// LoginPage.js
import React, { useState } from 'react';
//import './styles.css'

function LoginPage({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div>
      <h2  >Login Page</h2>
      <div name="login-container" style={{
    width: '300px',
    margin: '0 auto',
    padding: '20px',backgroundcolor:'#000000'
      }}>
      <form onSubmit={handleSubmit} style={{  width:'400px',display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <button
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: '#CF0A38', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Login
        </button>
      </form>
      </div>
    </div>
  );
}

export default LoginPage;
