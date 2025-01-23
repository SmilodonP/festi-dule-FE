import React, { useEffect, useState } from 'react';
import { adminGetUsers } from '../services/api';
import UserCard from "./UserCard";
import '../styles/UserGrid.css';

const UserGrid = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const params = searchQuery ? { query: searchQuery } : {};
        const data = await adminGetUsers(params);      
        setUsers(data.data || []);
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers([]);
      }
    };
  
    fetchUsers();
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  return (
    <div className="user-grid">
      <header>
        <h1>FestiDule</h1>
        <h2>Admin View</h2>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by name, username, or email"
        />
      </header>
      <div className="grid">
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))
        ) : (
          <p>No users available</p>
        )}
      </div>
    </div>
  );
};

export default UserGrid;
