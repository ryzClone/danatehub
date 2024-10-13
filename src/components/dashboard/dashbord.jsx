import React, { useState } from 'react';
import './dashbord.css';
import { FaUsers, FaChartLine, FaPercent, FaClock, FaEllipsisV } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import BlockComponent from '../Viewblock/BlockComponent';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Tooltip, Legend);

function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('1 week');
  const [userCount, setUserCount] = useState(200);
  const [userChange, setUserChange] = useState(0);
  const [menuOpen, setMenuOpen] = useState({});

  const handleMenuClick = (period, block) => {
    setSelectedPeriod(period);
    setMenuOpen((prev) => ({ ...prev, [block]: !prev[block] }));

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
      default:
        break;
    }
  };

  // Example data - 4 values for each day of the week
  const sessionData = {
    Monday: [100, 120, 130, 110],
    Tuesday: [200, 210, 205, 220],
    Wednesday: [150, 170, 160, 165],
    Thursday: [180, 175, 190, 200],
    Friday: [220, 225, 230, 240],
    Saturday: [300, 310, 305, 295],
    Sunday: [250, 260, 255, 245],
  };

  // Function to calculate average for each day
  const calculateAverage = (dataArray) => {
    const total = dataArray.reduce((sum, value) => sum + value, 0);
    return total / dataArray.length;
  };

  // Line chart data for Sessions Overview, calculated with 4 values per day
  const lineData = {
    labels: Object.keys(sessionData),
    datasets: [
      {
        label: 'Sessions (average of 4 metrics)',
        data: Object.values(sessionData).map(calculateAverage), // Calculate average for each day
        borderColor: '#007bff',
        fill: false,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  // Pie chart data for Session Device
  const pieData = {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [
      {
        label: 'Device Usage',
        data: [40, 50, 10],
        backgroundColor: ['#007bff', '#28a745', '#ffc107'],
        hoverOffset: 4,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="blocks-container">
        {/* Block Components */}
        <BlockComponent title="Total Users" count={userCount} iconType="users" />
        <BlockComponent title="Sessions" count="1,500" iconType="sessions" />
        <BlockComponent title="Bounce Rate" count="40%" iconType="bounceRate" />
        <BlockComponent title="Avg Session Duration" count="5m 12s" iconType="avgSessionDuration" />
      </div>

      <div className="chart-container">
        {/* Chap tarafda Sessions Overview */}
        <div className="chart-overview">
          <h2>Sessions Overview</h2>
          <Line data={lineData} options={lineOptions} />
        </div>

        {/* O'ng tarafda Session Device Overview */}
        <div className="session-device">
          <h2>Session Device</h2>
          <Pie data={pieData} options={pieOptions} />
          <div className="device-info">
            <div className="device-card desktop">
              <strong>Desktop:</strong>
              <p>50%</p>
            </div>
            <div className="device-card mobile">
              <strong>Mobile:</strong>
              <p>40%</p>
            </div>
            <div className="device-card tablet">
              <strong>Tablet:</strong>
              <p>10%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
