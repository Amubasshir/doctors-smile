import React from 'react';

const AvailableAppointment = ({ date }) => {
  return (
    <div>
      <h2>AvailableAppointment: {date.toDateString()}</h2>
    </div>
  );
};

export default AvailableAppointment;
