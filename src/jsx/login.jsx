import React, { useState } from 'react';
import '../css/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Handle login logic here (e.g., API call)
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div className='login-container'>
      <h1>Service Provider</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Username' 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          required
        />
        <br />
        <input 
          type="password" 
          placeholder='Password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;