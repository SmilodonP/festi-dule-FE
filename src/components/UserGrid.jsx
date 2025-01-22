import React, { useEffect, useState } from 'react';
import { adminGetUsers } from '../services/api';
import '../styles/UserGrid.css';

const UserGrid = ({ onSelectUser, isAdmin }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await adminGetUsers();
        console.log('Fetched data:', data);
        setUsers(data.data || []);
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers([]);
      }
    };
  
    fetchUsers();
  }, []);
  

  return (
    <div className="user-grid">
      <header>
        <h1>FestiDule</h1>
        {isAdmin && <span className="admin-label">Admin View</span>}
      </header>
      <div className="grid">
        
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="user-card">
              <h3>{user.attributes.username}</h3>
              <p>{`${user.attributes.first_name} ${user.attributes.last_name}`}</p>
            </div>
          ))
        ) : (
          <p>No users available</p>
        )}
      </div>
    </div>
  );
};

export default UserGrid;
