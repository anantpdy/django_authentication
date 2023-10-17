import React from 'react';
import './Welcome.css';
import Logout from './Logout';
function Welcome() {
  return (
    <div className="welcome-page">
      <Logout />
      <header>
        <h1>Welcome to Our Website</h1>
      </header>
      <main>
        <p>
          Thank you for visiting our website. We are excited to have you here! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam vitae aliquam dolor. Integer in nunc a urna ullamcorper tempus. Vivamus nec tincidunt nunc, vel auctor tortor. Donec auctor,
          ipsum eu convallis scelerisque, dui mi volutpat nulla, in malesuada turpis lectus in est. Phasellus non enim id purus lacinia varius.
          Sed vel elit in odio vehicula feugiat. Suspendisse potenti.
        </p>
      </main>
      <footer>
        <p>Explore our website to discover amazing services, learn about our company, and get in touch with us for any inquiries or support.</p>
      </footer>
    </div>
  );
}

export default Welcome;
