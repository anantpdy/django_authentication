import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate= useNavigate();
  const handleLogin = () => {
    // Handle the login logic here (e.g., make an API request, validate credentials, etc.)
    // For this example, we'll just print the email and password to the console.
    navigate('/Welcome')
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="App">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
      </ul>

      <h3>Login</h3>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      
    </div>
  );
}

export default Login;
