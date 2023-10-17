import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css'; // Import your CSS file

function Logout() {
  
  const navigate= useNavigate();

  const handleLogout = () => {
    navigate('/HomePage');
    
    
    // sessionStorage.clear(); // You can use localStorage or cookies for persistent login
    // // Redirect to the login page or any other desired page after logout.
    navigate('/HomePage');
    
  };

  return (
    <div className="logout-page">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
