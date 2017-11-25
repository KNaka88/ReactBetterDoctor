import React from 'react';

function DoctorEducations(props) {

  const educationList = props.educations.map((education, index) => {
    return (
      <li key={index}>{education.school}: {education.degree}</li>
    );
  });

  return (
    <div>
      <h3>Educations</h3>
      <ul>
        {educationList}
      </ul>
    </div>
  );
}

export default DoctorEducations;
