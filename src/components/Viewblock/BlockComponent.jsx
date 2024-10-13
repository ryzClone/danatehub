import React from 'react';
import { FaUsers, FaChartLine, FaPercent, FaClock } from 'react-icons/fa';
import './blockcomponent.css';

function BlockComponent({ title, count, iconType }) {
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'users':
        return <FaUsers className="icon total-users" />;
      case 'sessions':
        return <FaChartLine className="icon sessions" />;
      case 'bounceRate':
        return <FaPercent className="icon bounce-rate" />;
      case 'avgSessionDuration':
        return <FaClock className="icon avg-session-duration" />;
      default:
        return null;
    }
  };

  return (
    <div className="block">
      <div className="block-header">
        {getIcon(iconType)}
      </div>
      <h2 className="block-title">{title}</h2>
      <div className="user-count-container">
        <p className="user-count">{count}</p>
      </div>
    </div>
  );
}

export default BlockComponent;
