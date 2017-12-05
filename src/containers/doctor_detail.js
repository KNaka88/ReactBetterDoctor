import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DoctorSpecialties from '../components/doctor_specialties';
import DoctorEducations from '../components/doctor_educations';
import DoctorProfile from '../components/doctor_profile';
import DoctorBio from '../components/doctor_bio';

class DoctorDetail extends Component {

  renderDoctor() {

    const { first_name, middle_name, last_name, title, bio, gender, image_url, languages } = this.props.doctor.profile;
    const { educations, practices, specialties } = this.props.doctor;
    const full_name = `${first_name} ${middle_name} ${last_name}, ${title}`;

    return (
      <div className="doctor_detail">
        <DoctorProfile full_name={full_name} bio={bio} image_url={image_url}></DoctorProfile>
        <DoctorEducations educations={educations}></DoctorEducations>
        <DoctorSpecialties specialties={specialties}></DoctorSpecialties>
        <DoctorBio bio={bio}></DoctorBio>
      </div>
    );
  }

  render(){
    if (!this.props.doctor) {
      return (
        <div>
          <p>Doctor is not selected</p>
          <div className="text-center home_link">
            <Link to="/">Home</Link>
          </div>
        </div>
      )
    }

    return (
      <div>
        {this.renderDoctor()}
        <div className="text-center home_link">
          <Link to="/">Home</Link>
        </div>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return { doctor: state.doctor }
}

export default connect(mapStateToProps)(DoctorDetail);
