import React, { useState } from 'react';
import './dashbord.css';
import { FaUsers, FaChartLine, FaPercent, FaClock, FaEllipsisV } from 'react-icons/fa';

function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('1 week');
  const [userCount, setUserCount] = useState(200);
  const [userChange, setUserChange] = useState(0);
  const [menuOpen, setMenuOpen] = useState({});

  const handleMenuClick = (period, block) => {
    setSelectedPeriod(period);
    setMenuOpen(prev => ({ ...prev, [block]: !prev[block] }));

    switch (block) {
      case 'users':
        switch (period) {
          case 'week':
            setUserCount(200);
            setUserChange(10);
            break;
          case 'day':
            setUserCount(220);
            setUserChange(20);
            break;
          case 'year':
            setUserCount(300);
            setUserChange(100);
            break;
          default:
            break;
        }
        break;
      case 'sessions':
        break;
      case 'bounceRate':
        break;
      case 'avgSessionDuration':
        break;
      default:
        break;
    }
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="blocks-container">
        {/* Total Users Block */}
        <div className="block total-users">
          <div className="block-header">
            <FaUsers className="icon total-users" />
            <div className="menu-container">
              <button className="menu-button" onClick={() => handleMenuClick('week', 'users')}>
                <FaEllipsisV style={{ color: '#007bff' }} />
              </button>
              {menuOpen.users && (
                <div className="menu-options">
                  <div onClick={() => handleMenuClick('week', 'users')}>Week</div>
                  <div onClick={() => handleMenuClick('day', 'users')}>Day</div>
                  <div onClick={() => handleMenuClick('year', 'users')}>Year</div>
                </div>
              )}
            </div>
          </div>
          <h2 className="block-title">Total Users</h2>
          <div className="user-count-container">
            <div>
              <p className="user-count">{userCount}</p>
            </div>
            <div className={`user-change-block ${userChange > 0 ? 'increase' : 'decrease'}`}>
              <span className="change-percent">
                {userChange > 0 ? '+' : ''}{Math.abs((userChange / (userCount - userChange)) * 100).toFixed(2)}%
              </span>
            </div>
          </div>
        </div>

        {/* Sessiyalar bloki */}
        <div className="block sessions">
          <div className="block-header">
            <FaChartLine className="icon sessions" />
            <div className="menu-container">
              <button className="menu-button" onClick={() => handleMenuClick('week', 'sessions')}>
                <FaEllipsisV style={{ color: 'violet' }} />
              </button>
              {menuOpen.sessions && (
                <div className="menu-options">
                  <div onClick={() => handleMenuClick('week', 'sessions')}>Week</div>
                  <div onClick={() => handleMenuClick('day', 'sessions')}>Day</div>
                  <div onClick={() => handleMenuClick('year', 'sessions')}>Year</div>
                </div>
              )}
            </div>
          </div>
          <h2 className="block-title">Sessions</h2>
          <div className="user-count-container">
            <div>
              <p className="user-count">1,500</p>
            </div>
            <div className="user-change-block increase">
              <span className="change-percent">+5.25%</span>
            </div>
          </div>
        </div>

        {/* Bounce Rate Block */}
        <div className="block bounce-rate">
          <div className="block-header">
            <FaPercent className="icon bounce-rate" />
            <div className="menu-container">
              <button className="menu-button" onClick={() => handleMenuClick('week', 'bounceRate')}>
                <FaEllipsisV style={{ color: 'green' }} />
              </button>
              {menuOpen.bounceRate && (
                <div className="menu-options">
                  <div onClick={() => handleMenuClick('week', 'bounceRate')}>Week</div>
                  <div onClick={() => handleMenuClick('day', 'bounceRate')}>Day</div>
                  <div onClick={() => handleMenuClick('year', 'bounceRate')}>Year</div>
                </div>
              )}
            </div>
          </div>
          <h2 className="block-title">Bounce Rate</h2>
          <div className="user-count-container">
            <div>
              <p className="user-count">40%</p>
            </div>
            <div className="user-change-block decrease">
              <span className="change-percent">-1.75%</span>
            </div>
          </div>
        </div>

        {/* Avg Session Duration Block */}
        <div className="block avg-session-duration">
          <div className="block-header">
            <FaClock className="icon avg-session-duration" />
            <div className="menu-container">
              <button className="menu-button" onClick={() => handleMenuClick('week', 'avgSessionDuration')}>
                <FaEllipsisV style={{ color: '#ffc107' }} />
              </button>
              {menuOpen.avgSessionDuration && (
                <div className="menu-options">
                  <div onClick={() => handleMenuClick('week', 'avgSessionDuration')}>Week</div>
                  <div onClick={() => handleMenuClick('day', 'avgSessionDuration')}>Day</div>
                  <div onClick={() => handleMenuClick('year', 'avgSessionDuration')}>Year</div>
                </div>
              )}
            </div>
          </div>
          <h2 className="block-title">Avg Session Duration</h2>
          <div className="user-count-container">
            <div>
              <p className="user-count">5m 12s</p>
            </div>
            <div className="user-change-block increase">
              <span className="change-percent">+3.10%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="chart-container">
  {/* Chap tarafda Sessions Overview */}
  <div className="chart-overview">
    <h2>Sessions Overview</h2>
    <div className="chart">
      {/* Grafik komponentini bu yerga joylashtiring */}
    </div>
  </div>

  {/* O'ng tarafda Session Device Overview */}
  <div className="session-device">
    <h2>Session Device</h2>
    <div className="chart">
      {/* Grafik komponentini bu yerga joylashtiring */}
      <p>Devices: 40% Mobile, 60% Desktop</p>
    </div>
  </div>
</div>


    </div>
  );
}

export default Dashboard;
