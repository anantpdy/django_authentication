import './App.css';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import HomePage from './HomePage';
import Welcome  from './Welcome';
import Logout from './Logout';
function App() {
  return (
    <Router>
      <Navbar />
    <Routes>
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Welcome" element={<Welcome />} />
      <Route path="/Logout" element={<Logout/>} />
    </Routes>
  </Router>
  
  );
}

export default App;
