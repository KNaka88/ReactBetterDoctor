import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { searchDoctor } from '../actions';
import _ from 'lodash';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "45.5186307",
      lng: "-122.6960944",
      status:"Obtaining current location..."
    }
    this.setCurrentLocation = this.setCurrentLocation.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setCurrentLocation);
    }
  }

  setCurrentLocation(pos) {
    this.setState((prevState, props) => ({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        status: ""
      }));
  }

  renderField(field) {
    const { meta: { touched, error }} = field;
    const className = `form-group ${touched && error ? 'has-danger search_bar' : 'search_bar'}`;

    return (
      <div className={className}>
        <div className="col-sm-6 col-sm-offset-3">
          <input
            placeholder="ex. Headache"
            className="form-control"
            type="text"
            {...field.input}
          />
        </div>
        <div className="search_bar_button">
          <button type="submit" className="btn btn-success">Search</button>
        </div>
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }


  onSubmit(values) {
    this.props.searchDoctor(values.sympton, this.state.lat, this.state.lng);
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <p className="status_message">{this.state.status}</p>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Search Query"
            name="sympton"
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
}


function validate(values) {
  const errors = {};

  if (!values.sympton) {
    errors.sympton = "Enter a keyword";
  }

  return errors;
}


export default reduxForm({
  validate,  // validate : validate
  form: 'SearchDoctorForm'
})(
  connect(null, { searchDoctor })(SearchBar)
);
