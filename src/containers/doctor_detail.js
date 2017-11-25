import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DoctorSpecialties from '../components/doctor_specialties';
import DoctorEducations from '../components/doctor_educations';
import DoctorProfile from '../components/doctor_profile';

class DoctorDetail extends Component {

  renderDoctor() {

    const { first_name, middle_name, last_name, title, bio, gender, image_url, languages } = this.props.doctor.profile;
    const { educations, practices, specialties } = this.props.doctor;
    const full_name = `${first_name} ${middle_name} ${last_name}, ${title}`;

    return (
      <div>
        <DoctorProfile full_name={full_name} bio={bio} image_url={image_url}></DoctorProfile>
        <DoctorEducations educations={educations}></DoctorEducations>
        <DoctorSpecialties specialties={specialties}></DoctorSpecialties>
      </div>
    );
  }

  render(){
    if (!this.props.doctor) {
      return (
        <div>
          <p>Doctor is not selected</p>
          <Link to="/">Home</Link>
        </div>
      )
    }

    return (
      <div>
        {this.renderDoctor()}
        <Link to="/">Home</Link>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return { doctor: state.doctor }
}

export default connect(mapStateToProps)(DoctorDetail);
