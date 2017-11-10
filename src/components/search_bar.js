import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { searchDoctor } from '../actions';

class SearchBar extends Component {
  renderField(field) {
    const { meta: { touched, error }} = field;

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

export default reduxForm({
  form: 'SearchDoctorForm'
})(
  connect(null, { searchDoctor })(SearchBar)
);
