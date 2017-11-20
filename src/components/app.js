import React, { Component } from 'react';
import SearchBar from './search_bar';
import ResultList from '../containers/result_list';
import DoctorDetail from '../containers/doctor_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ResultList />
        <DoctorDetail />
      </div>
    );
  }
}
