import React from "react";
import { Link } from 'react-router-dom'
import userIcon from '../assets/user_icon.png';
import '../styles/UserCard.css'

const UserCard = ({user}) => {
  const {username} = user.attributes;
  const id = user.id;
  
  return (
    <Link to={`/${id}/schedule`} className="user-card">
      <img src={userIcon} alt ='user icon' />
      <p>{username}</p>
    </Link>
  );
};

export default UserCard;
