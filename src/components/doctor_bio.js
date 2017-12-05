import React from 'react';

function DoctorBio (props) {
  return(
    <div className="doctor_bio">
      <h3>Biohraphy</h3>
      <div>
        <p>{props.bio}</p>
      </div>
    </div>
  );
}

export default DoctorBio;
