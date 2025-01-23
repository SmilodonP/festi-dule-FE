import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { adminGetUserDetails } from '../services/api';
import UserSchedule from './UserSchedule';
import '../styles/UserDetail.css';

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try{
        const data = await adminGetUserDetails(userId);
        console.log('Fetched data:', data);
        if (data && data.data && data.data.relationships?.shows?.data) {
          console.log('Shows data:', data.data.relationships.shows.data); // Check the shows
        }
        setUser(data.data || {})
      } catch (error) {
        console.error('Error fetching user info:', error);
        setUser({});
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div className="user-details">
      <header>
        <h1>FestiDule</h1>
        <h2>Admin View</h2>
      </header>
      <section className='user-info'>
        <h3>Username: {user.attributes?.username}</h3>
        <h4>Name: {user.attributes?.first_name} {user.attributes?.last_name}</h4>
      </section>
      <section className='user-schedule'>
        <UserSchedule user={user} setUser={setUser} />
      </section>

    </div>

  )
};

export default UserDetail;