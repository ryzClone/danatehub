import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaMoneyBillWave, FaUser, FaSignOutAlt } from 'react-icons/fa'; // FaSignOutAlt ikonkasi qo'shilgan
import './home.css';

function Home() {
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLogout = () => {
        // Logout qilish funksiyasini bu yerda yozing
        console.log('Logout clicked');
    };

    return (
        <div className={`container ${isCollapsed ? 'collapsed' : ''}`}>
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
                            <FaTachometerAlt className="icon" />
                            {!isCollapsed && <span className="text">Dashboard</span>}
                        </Link>
                    </li>
                    <li className={location.pathname === '/users' ? 'active' : ''}>
                        <Link to="/users" className={location.pathname === '/users' ? 'active' : ''}>
                            <FaUsers className="icon" />
                            {!isCollapsed && <span className="text">Users</span>}
                        </Link>
                    </li>
                    <li className={location.pathname === '/withdraws' ? 'active' : ''}>
                        <Link to="/withdraws" className={location.pathname === '/withdraws' ? 'active' : ''}>
                            <FaMoneyBillWave className="icon" />
                            {!isCollapsed && <span className="text">Withdraws</span>}
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
                        <span className="username">Username</span>
                        <FaUser className="user-icon" />
                        <button className="logout-btn" onClick={handleLogout}>
                            <FaSignOutAlt className="icon" />
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
