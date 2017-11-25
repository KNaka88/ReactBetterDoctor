import React from 'react';

function DoctorSpecialties(props) {

  const specialtiesList = props.specialties.map((specialty) => {
    return (
      <li key={specialty.uid}>{specialty.name}: {specialty.description}</li>
    );
  });

  return (
    <div>
      <h3>Specialties</h3>
      <ul>
        {specialtiesList}
      </ul>
    </div>
  );
}

export default DoctorSpecialties;
