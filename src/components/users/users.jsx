import React, { useState } from 'react';
import './users.css';

const initialUsers = [
  { name: 'John Doe', position: 'Developer', office: 'New York', age: 30, startDate: '2019-01-01', salary: '$5000' },
  { name: 'Jane Smith', position: 'Designer', office: 'London', age: 28, startDate: '2020-06-15', salary: '$4500' },
  { name: 'Michael Brown', position: 'Manager', office: 'Paris', age: 45, startDate: '2018-03-22', salary: '$6000' },
  { name: 'John Doe', position: 'Developer', office: 'New York', age: 30, startDate: '2019-01-01', salary: '$5000' },
  { name: 'Jane Smith', position: 'Designer', office: 'London', age: 28, startDate: '2020-06-15', salary: '$4500' },
  { name: 'Michael Brown', position: 'Manager', office: 'Paris', age: 45, startDate: '2018-03-22', salary: '$6000' },
  // Ko'proq foydalanuvchi ma'lumotlarini qo'shing
];

function Users() {
  const [users] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [entries, setEntries] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = entries;
  
  // Filtrlash
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sahifalash uchun
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
          <label>Show </label>
          <select
            value={entries}
            onChange={(e) => setEntries(Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
          <span> entries</span>
        </div>

        <div className="search-box">
          <label>Search: </label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name"
          />
        </div>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start Date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.office}</td>
              <td>{user.age}</td>
              <td>{user.startDate}</td>
              <td>{user.salary}</td>
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
