import React from 'react';
import { Link } from 'react-router-dom';
import './nopage.css'; // Import CSS file if needed

function NoPage() {
  return (
    <div className="no-page-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might not exist or has been removed.</p>
      <p>
        To return to the home page:
        <Link to="/" className="home-link"> Dashbord</Link>
      </p>
      <p>If you need assistance, please contact our support center.</p>
    </div>
  );
}

export default NoPage;
