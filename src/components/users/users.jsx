import React, { useState } from 'react';
import './users.css';
import BlockComponent from '../Viewblock/BlockComponent';

const initialUsers = [
  { id: 0, username: 'johndoe', online: true, balance: 5000, profileImgUrl: 'https://via.placeholder.com/50', lastOnlineAt: '2024-10-09T10:10:39.926Z' },
  { id: 1, username: 'janesmith', online: true, balance: 4500, profileImgUrl: 'https://via.placeholder.com/50', lastOnlineAt: '2024-10-09T10:10:39.926Z' },
  { id: 2, username: 'michaelbrown', online: true, balance: 6000, profileImgUrl: 'https://via.placeholder.com/50', lastOnlineAt: '2024-10-09T10:10:39.926Z' },
];

function Users() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [entries, setEntries] = useState(10);
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
    setUsers(users.map(user => 
      user.id === userId ? { ...user, online: !user.online } : user
    ));
  };

  const pagesToShow = 3;
  const paginationStart = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
  const paginationEnd = Math.min(paginationStart + pagesToShow - 1, totalPages);

  return (
    <div className="users-wrapper">
      <div className="blocks-container">
        <BlockComponent title="Total Users" count={200} iconType="users" />
        <BlockComponent title="Sessions" count="1,500" iconType="sessions" />
        <BlockComponent title="Bounce Rate" count="40%" iconType="bounceRate" />
        <BlockComponent title="Avg Session Duration" count="5m 12s" iconType="avgSessionDuration" />
      </div>

      <div className="users-container">
        <div className="table-controls">
          <div className="show-entries">
            <p>Status: </p>
            <button 
              onClick={toggleStatus} 
              className={`status-btn ${isEnabled ? 'enabled' : 'disabled'}`}
            >
              {isEnabled ? 'Enabled' : 'Disabled'}
            </button>
          </div>

          <div className="search-box">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by username"
              className="search-input"
            />
          </div>
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Online</th>
              <th>Balance</th>
              <th>Profile Image</th>
              <th>Last Online At</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.online ? 'Yes' : 'No'}</td>
                <td>{user.balance}</td>
                <td>
                  <img src={user.profileImgUrl} alt={user.username} />
                </td>
                <td>{new Date(user.lastOnlineAt).toLocaleString()}</td>
                <td>
                  <button 
                    className={`status-toggle-btn ${user.online ? 'online' : 'offline'}`} 
                    onClick={() => handleStatusChange(user.id)}
                  >
                    <span className="toggle-inner"></span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: paginationEnd - paginationStart + 1 }, (_, index) => (
            <button
              key={index}
              className={`page-btn ${paginationStart + index === currentPage ? 'active' : ''}`}
              onClick={() => handlePageChange(paginationStart + index)}
            >
              {paginationStart + index}
            </button>
          ))}
          <button
            className="page-btn"
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

export default Users;
