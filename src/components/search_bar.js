import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { searchDoctor } from '../actions';
import _ from 'lodash';


class SearchBar extends Component {
  renderField(field) {
    const { meta: { touched, error }} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }


  onSubmit(values) {
    this.props.searchDoctor(values);
  }


  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Search Query"
          name="query"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-success">Search</button>
      </form>
    );
  }
}


function validate(values) {
  const errors = {};

  if (!values.query) {
    errors.query = "Enter a keyword";
  }

  return errors;
}


export default reduxForm({
  validate,  // validate : validate
  form: 'SearchDoctorForm'
})(
  connect(null, { searchDoctor })(SearchBar)
);
