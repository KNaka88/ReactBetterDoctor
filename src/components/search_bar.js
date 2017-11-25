import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { searchDoctor } from '../actions';
import _ from 'lodash';


class SearchBar extends Component {
  renderField(field) {
    const { meta: { touched, error }} = field;
    const className = `form-group ${touched && error ? 'has-danger search_bar' : 'search_bar'}`;

    return (
      <div className={className}>
        <div className="col-xs-6 col-xs-offset-3">
          <input
            placeholder="ex. Headache"
            className="form-control"
            type="text"
            {...field.input}
          />
        </div>
        <button type="submit" className="btn btn-success">Search</button>
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }


  onSubmit(values) {
    this.props.searchDoctor(values.sympton);
  }


  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Search Query"
          name="sympton"
          component={this.renderField}
        />
      </form>
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
