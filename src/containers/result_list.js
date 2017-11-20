import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { selectDoctor } from '../actions/index';
import { Link } from 'react-router-dom';

class ResultList extends Component {

  renderDoctors() {
    return _.map(this.props.doctors, doctor => {
      const full_name = `${doctor.profile.first_name} ${doctor.profile.middle_name} ${doctor.profile.last_name}`;
      const title = doctor.profile.title;
      const image_url = doctor.profile.image_url;

      return (
        <div key={doctor.uid}>
            <li>{full_name}, {title}</li>
            <img src={image_url} alt={full_name} />
            <Link to="/doctor" onClick={() => this.props.selectDoctor(doctor)}>See Detail</Link>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectDoctor: selectDoctor}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
