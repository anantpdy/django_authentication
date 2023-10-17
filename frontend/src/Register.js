import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import Login from './Login';


function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate= useNavigate();
  const handleLogin = () => {
    navigate('/Login')
  }


    const handleRegistration = () => {
    navigate('/Welcome')
    // Handle the registration logic here (e.g., make an API request to create a new user, etc.).
    // For this example, we'll just print the form values to the console.
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
  };
  

  return (
    <div className="App">
      
      <header className="App-header">
      <div>
            <button type ="button" style={{ position: 'absolute', top: '20px', right: '20px',}} onClick={handleLogin}>Login</button>
            
          </div>
        <h3>SignUp</h3>
        <form>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
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
          
          <button type="button" onClick={handleRegistration}>SignUp</button>
          
        </form>
      </header>
    </div>
  );
}

export default Register;
