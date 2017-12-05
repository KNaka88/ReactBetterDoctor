import React from 'react';

function DoctorProfile(props) {

  return (
    <div className="doctor_profile">
      <h2 className="text-center">{props.full_name}</h2>
      <img src={props.image_url} alt={props.first_name} />
      <div className="short_line_break"></div>
    </div>
  );
}

export default DoctorProfile;
