import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { selectDoctor } from '../actions/index';
import { Link } from 'react-router-dom';

class ResultList extends Component {

  renderDoctors() {
    return _.map(this.props.doctors, (doctor, index) => {
      console.log(doctor);

      const {first_name, middle_name, last_name, title, image_url} = doctor.profile;
      const full_name = `${first_name} ${middle_name ? middle_name :'' } ${last_name}`;

      return (
        <div key={index}>
          <Link  to="/doctor" onClick={() => this.props.selectDoctor(doctor)}>
            <div key={doctor.uid} className="doctors_summary panel panel-default">
              <li className="doctors_summary_name">{full_name}, {title}</li>
              <img src={image_url} alt={full_name} />
            </div>
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="doctors">
        <div className="short_line_break"></div>
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
