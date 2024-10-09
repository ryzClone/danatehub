import React, { useState } from 'react';
import './users.css';

const initialUsers = [
  { id: 0, username: 'johndoe', online: true, balance: 5000, profileImgUrl: 'https://via.placeholder.com/50', lastOnlineAt: '2024-10-09T10:10:39.926Z' },
  { id: 1, username: 'janesmith', online: true, balance: 4500, profileImgUrl: 'https://via.placeholder.com/50', lastOnlineAt: '2024-10-09T10:10:39.926Z' },
  { id: 2, username: 'michaelbrown', online: true, balance: 6000, profileImgUrl: 'https://via.placeholder.com/50', lastOnlineAt: '2024-10-09T10:10:39.926Z' },
  // Qo'shimcha foydalanuvchi ma'lumotlarini qo'shing
];

function Users() {
  const [users] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEnabled, setIsEnabled] = useState(true);
  const entriesPerPage = entries;

  const toggleStatus = () => {
    setIsEnabled(!isEnabled);
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

  const pagesToShow = 3;
  const paginationStart = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
  const paginationEnd = Math.min(paginationStart + pagesToShow - 1, totalPages);

  return (
    <div className="users-container">
      <div className="table-controls">
        <div className="show-entries">
          <p>Status: </p>
          <button onClick={toggleStatus} className="status-btn">
            {isEnabled ? 'Enabled' : 'Disabled'}
          </button>
        </div>

        <div className="search-box">
          <label>Search: </label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by username"
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
  );
}
export default Users;