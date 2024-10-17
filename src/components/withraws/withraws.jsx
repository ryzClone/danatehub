import React, { useState, useEffect } from 'react';
import './withraws.css';
import BlockComponent from '../Viewblock/BlockComponent';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Withraws() {
  const [userCount, setUserCount] = useState(200);
  const [withdrawData, setWithdrawData] = useState([
    { name: 'Total Withdrawn', amount: 15000 },
    { name: 'Pending Withdraws', amount: 20 },
    { name: 'Successful Withdraws', amount: 120 },
    { name: 'Failed Withdraws', amount: 5 },
  ]);

  useEffect(() => {
    fetchWithdrawData();
  }, []);

  const fetchWithdrawData = () => {
    setWithdrawData([
      { name: 'Total Withdrawn', amount: 17500 },
      { name: 'Pending Withdraws', amount: 25 },
      { name: 'Successful Withdraws', amount: 130 },
      { name: 'Failed Withdraws', amount: 5 },
    ]);
  };

  return (
    <div className="withraws-dashboard">
      <h1 className="withraws-title">Withdraws Overview</h1>

      <div className="blocks-container">
        <BlockComponent title="Total Users" count={userCount} iconType="users" />
        <BlockComponent title="Sessions" count="1,500" iconType="sessions" />
        <BlockComponent title="Bounce Rate" count="40%" iconType="bounceRate" />
        <BlockComponent title="Avg Session Duration" count="5m 12s" iconType="avgSessionDuration" />
      </div>

      <div className="withraws-stats">
        <h2>Withdraws Statistics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={withdrawData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="additional-insights">
        <h2>Additional Insights</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={withdrawData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Withraws;
