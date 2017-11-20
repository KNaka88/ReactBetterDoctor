import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DoctorDetail extends Component {

  renderDoctor() {
    // const full_name = `${doctor.profile.first_name} ${doctor.profile.middle_name} ${doctor.profile.last_name}`;
    // const title = doctor.profile.title;
    // const image_url = doctor.profile.image_url;
    // const

    const { first_name, middle_name, last_name, title, bio, gender, image_url, languages } = this.props.doctor.profile;
    const { educations } = this.props.doctor.educations;
    const { practices } = this.props.doctor.practices;
    const { specialties } = this.props.doctor.specialties;
    const full_name = `${first_name} ${middle_name} ${last_name}, ${title}`;

    console.log(specialties);
    return (
      <div className="profile">
        <h2>{full_name}</h2>
        <img src={image_url} alt={first_name} />
        <div className="profile__detail">
          <p>{bio}</p>
        </div>
      </div>
    );

  }

  render(){
    if (!this.props.doctor) {
      return <div>Select a doctor to get started</div>;
    }
    console.log(this.props.doctor);
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
