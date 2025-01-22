import React, { useEffect, useState } from 'react';
import { adminGetUsers } from '../services/api';
import '../styles/UserDetail.css';

const UserGrid = ({ onSelectUser, isAdmin }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    adminGetUsers()
    .then(data => {
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        console.error("Expected an array, got:", data);
        setUsers([]);
      }
    })
    .catch(error => {
      console.error("Error fetching user data:", error);
      setUsers([]);
    });
  }, []);

  return (
    <div className="user-grid">
      <header>
        <h1>FestiDule</h1>
      </header>
      <div className="grid">
        {Array.isArray(users) && users.length > 0 ? (
          users.map(user => (
            <div
              key={user.id}
              className="user-card"
              onClick={() => onSelectUser(user.id)}
            >
              <img src="/path/to/icon.png" alt="User Icon" />
              <p>{user.username}</p>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
}; 

export default UserGrid;
