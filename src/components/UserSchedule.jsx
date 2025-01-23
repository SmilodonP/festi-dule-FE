import React from "react";
import concertIcon from '../assets/concert_icon.png';
import { adminDeleteShow } from "../services/api";

const formatShowDetails = (date, startTime, endTime) => {
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedStartTime = new Date(startTime).toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

  const formattedEndTime = new Date(endTime).toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

  return {
    formattedDate,
    formattedStartTime,
    formattedEndTime,
  };
};

const UserSchedule = ({ user, setUser }) => {
  const shows = user?.relationships?.shows?.data || [];
  console.log(shows);

  const handleRemoveShow = async (userId, showId) => {
    try {
      await adminDeleteShow(userId, showId);
  
      setUser(prevUser => {
        const shows = prevUser?.relationships?.shows?.data ?? [];
  
        const updatedShows = shows.filter(show => show.id !== showId);
  
        return {
          ...prevUser,
          relationships: {
            ...prevUser.relationships,
            shows: { data: updatedShows },
          },
        };
      });
    } catch (error) {
      console.error('Error removing show from user schedule:', error);
      alert('Failed to remove the show. Please try again.');
    }
  };

  return (
    <div>
      <h3>Scheduled Shows:</h3>
      {Array.isArray(shows) && shows.length > 0 ? (
        <ul>
          {shows.map((show) => {
            const { formattedDate, formattedStartTime, formattedEndTime } = formatShowDetails(
              show.attributes?.date,
              show.attributes?.start_time,
              show.attributes?.end_time
            );

            return (
              <li key={show.id} className="show-card">
                <img src={concertIcon} alt="Concert Icon" className="icon" />
                <strong>{show.attributes?.artist}</strong>
                <p>
                  Date: {formattedDate} <br />
                  Time: {formattedStartTime} - {formattedEndTime}
                </p>
                <button
                  className="delete-button"
                  onClick={() => handleRemoveShow(user.id, show.id)}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No shows available</p>
      )}
    </div>
  );
};

export default UserSchedule;
