import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaMoneyBillWave, FaPowerOff, FaBell } from 'react-icons/fa';
import './home.css';

function Home() {
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const navigate = useNavigate(); // React Router navigate hook

    const toggleSidebar = () => {
        setIsCollapsed(prev => !prev);
    };

    const handleLogout = () => {
        // Clear local storage or authentication data
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('loginTime');

        // Redirect to login page
        navigate('/login');
    };

    return (
        <div className="container">
            <nav className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                <div className={`logo ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className="logo-container">
                        <img src='https://pub-4e4118614197441ca01a142347434959.r2.dev/logo.png' alt="Logo" className="logo-img" />
                        {!isCollapsed && <span className="logo-text">DonateHub</span>}
                    </div>
                </div>
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                            <FaTachometerAlt className="home-icon" />
                            {!isCollapsed && <span className="text">Dashboard</span>}
                        </Link>
                    </li>
                    <li className={location.pathname === '/users' ? 'active' : ''}>
                        <Link to="/users" className={location.pathname === '/users' ? 'active' : ''}>
                            <FaUsers className="home-icon" />
                            {!isCollapsed && <span className="text">Users</span>}
                        </Link>
                    </li>
                    <li className={location.pathname === '/withraws' ? 'active' : ''}>
                        <Link to="/withraws" className={location.pathname === '/withraws' ? 'active' : ''}>
                            <FaMoneyBillWave className="home-icon" />
                            {!isCollapsed && <span className="text">Withraws</span>}
                        </Link>
                    </li>
                    <li className={location.pathname === '/notifications' ? 'active' : ''}>
                        <Link to="/notifications" className={location.pathname === '/notifications' ? 'active' : ''}>
                            <FaBell className="home-icon" />
                            {!isCollapsed && <span className="text">Notifications</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="main-content">
                <header className="header">
                    <div className="menu-button" onClick={toggleSidebar}>
                        <div className={`hamburger ${isCollapsed ? 'collapsed' : ''}`}>
                            <div className="line"></div>
                            <div className="line small"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="user-profile">
                        <button className="logout-btn" onClick={handleLogout}>
                            <FaPowerOff className="home-icon" />
                        </button>
                    </div>
                </header>
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Home;
