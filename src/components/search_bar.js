import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { searchDoctor } from '../actions';

class SearchBar extends Component {
  renderField(field) {
    return (
      <div>
        <label>Find Doctor</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }


  render() {
    return (
      <form>
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

export default reduxForm({
  form: 'SearchDoctorForm'
})(
  connect(null, { searchDoctor })(SearchBar)
);
