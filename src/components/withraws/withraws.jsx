import React, { useState } from 'react';
import './withraws.css';
import BlockComponent from '../Viewblock/BlockComponent';

const initialUsers = [
  {
    id: 0,
    username: 'johndoe',
    email: 'ozodbekjumayev50@gmail.com',
    online: true,
    balance: 5000,
    profileImgUrl: 'https://via.placeholder.com/50',
    lastOnlineAt: '2024-10-09T10:10:39.926Z',
  },
  {
    id: 1,
    username: 'janesmith',
    email: 'janesmith@example.com',
    online: true,
    balance: 4500,
    profileImgUrl: 'https://via.placeholder.com/50',
    lastOnlineAt: '2024-10-09T10:10:39.926Z',
  },
  {
    id: 2,
    username: 'michaelbrown',
    email: 'michaelbrown@example.com',
    online: true,
    balance: 6000,
    profileImgUrl: 'https://via.placeholder.com/50',
    lastOnlineAt: '2024-10-09T10:10:39.926Z',
  },
];

function Withraws() {
  const [userCount, setUserCount] = useState(200);
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [entries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEnabled, setIsEnabled] = useState(true);
  const entriesPerPage = entries;

  const toggleStatus = () => {
    setIsEnabled((prev) => !prev);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / entriesPerPage);
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleStatusChange = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, online: !user.online } : user
      )
    );
  };

  const pagesToShow = 3;
  const paginationStart = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
  const paginationEnd = Math.min(
    paginationStart + pagesToShow - 1,
    totalPages
  );

  return (
    <div className="withraws-container">
      <h1 className="withraws-title">Withdraws Overview</h1>

      <div className="withraws-blocks-container">
        <BlockComponent title="Total Users" count={userCount} iconType="users" />
        <BlockComponent title="Sessions" count="1,500" iconType="sessions" />
        <BlockComponent title="Bounce Rate" count="40%" iconType="bounceRate" />
        <BlockComponent title="Avg Session Duration" count="5m 12s" iconType="avgSessionDuration" />
      </div>

      {/* Users Table */}
      <div className="withraws-users-container">
        <div className="withraws-table-controls">
          <div className="withraws-show-entries">
            <p>Status: </p>
            <button
              onClick={toggleStatus}
              className={`withraws-status-btn ${isEnabled ? 'enabled' : 'disabled'}`}
            >
              {isEnabled ? 'Enabled' : 'Disabled'}
            </button>
          </div>

          <div className="withraws-search-box">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by username"
              className="withraws-search-input"
            />
          </div>
        </div>

        <table className="withraws-user-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Username</th>
              <th>Email</th>
              <th>Online</th>
              <th>Balance</th>
              <th>Last Online At</th>
              <th>Change Status</th>
              <th>Info</th>
              <th>Confirmation</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <img src={user.profileImgUrl} alt={user.username} />
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.online ? 'Yes' : 'No'}</td>
                <td>{user.balance}</td>
                <td>{new Date(user.lastOnlineAt).toLocaleString()}</td>
                <td>
                  <button
                    className={`withraws-status-toggle-btn ${user.online ? 'online' : 'offline'}`}
                    onClick={() => handleStatusChange(user.id)}
                  >
                    <span className="withraws-toggle-inner"></span>
                  </button>
                </td>
                <td>
                  <button className="withraws-info-btn">Info</button>
                </td>
                <td>
                  <button className="withraws-confirm-btn">Confirm</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="withraws-pagination">
          <button
            className="withraws-page-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from(
            { length: paginationEnd - paginationStart + 1 },
            (_, index) => (
              <button
                key={index}
                className={`withraws-page-btn ${paginationStart + index === currentPage ? 'active' : ''
                  }`}
                onClick={() => handlePageChange(paginationStart + index)}
              >
                {paginationStart + index}
              </button>
            )
          )}
          <button
            className="withraws-page-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Withraws;
