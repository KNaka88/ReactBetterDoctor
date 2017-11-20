import React, { Component } from 'react';
import { connect } from 'react-redux';

class DoctorDetail extends Component {
  render(){
    if (!this.props.doctor) {
      return <div>Select a doctor to get started</div>;
    }
    return (
      <div>
        <p>This is Doctor Detail Page</p>
        <p>{this.props.doctor.profile.first_name}</p>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return { doctor: state.doctor }
}

export default connect(mapStateToProps)(DoctorDetail);
