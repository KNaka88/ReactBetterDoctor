import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';



class ResultList extends Component {

  renderPosts() {
    return _.map(this.props.doctors, doctor => {
      return(
        <li key={doctor.uid}>{doctor.profile.first_name}</li>
      )
    });
  }

  render() {
    return(
      <div>
        {this.renderPosts()}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { doctors: state.doctors };
}

export default connect(mapStateToProps)(ResultList);
