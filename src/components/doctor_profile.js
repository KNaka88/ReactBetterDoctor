import React from 'react';

function DoctorProfile(props) {

  return (
    <div>
      <h2>{props.full_name}</h2>
      <img src={props.image_url} alt={props.first_name} />
      <div className="profile__detail">
        <p>{props.bio}</p>
      </div>
    </div>
  );
}

export default DoctorProfile;
