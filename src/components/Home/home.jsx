import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaMoneyBillWave, FaPowerOff, FaBell } from 'react-icons/fa'; // FaBell qo'shildi
import './home.css';

function Home() {
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(prev => !prev);
    };

    const handleLogout = () => {
        console.log('Logout clicked');
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
                    <li className={location.pathname === '/withdraws' ? 'active' : ''}>
                        <Link to="/withdraws" className={location.pathname === '/withdraws' ? 'active' : ''}>
                            <FaMoneyBillWave className="home-icon" />
                            {!isCollapsed && <span className="text">Withdraws</span>}
                        </Link>
                    </li>
                    <li className={location.pathname === '/notifications' ? 'active' : ''}> {/* Notification bo'limi qo'shildi */}
                        <Link to="/notifications" className={location.pathname === '/notifications' ? 'active' : ''}>
                            <FaBell className="home-icon" /> {/* FaBell ikon qo'shildi */}
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
