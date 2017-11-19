import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


class ResultList extends Component {

  renderDoctors() {
    return _.map(this.props.doctors, doctor => {
      console.log(doctor);
      const full_name = `${doctor.profile.first_name} ${doctor.profile.middle_name} ${doctor.profile.last_name}`;
      const title = doctor.profile.title;
      const image_url = doctor.profile.image_url;

      return (
        <div key={doctor.uid}>
          <Link to={`doctors/${doctor.uid}`}>
            <li>{full_name}, {title}</li>
            <img src={image_url} alt={full_name} />
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderDoctors()}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { doctors: state.doctors };
}

export default connect(mapStateToProps)(ResultList);
