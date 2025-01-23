import React from "react";
import { Link } from 'react-router-dom'
import userIcon from '../assets/user_icon.png';
import '../styles/UserCard.css'

const UserCard = ({user}) => {
  const {username, first_name, last_name} = user.attributes;
  const id = user.id;
  
  return (
    <Link to={`/${id}/schedule`} className="user-card">
      <img src={userIcon} alt="User icon" className="user-card-icon" />
      <p className="user-card-info">
        <strong>Username:</strong> {username} <br />
        <strong>Name:</strong> {last_name}, {first_name}
      </p>
    </Link>
  );
};

export default UserCard;
