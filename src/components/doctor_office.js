import React, { Component } from 'react';

class DoctorOffice extends Component {

  componentDidMount() {
    let latlng = {lat: this.props.lat, lng: this.props.lon};

    let map = new google.maps.Map(this.refs.map, {
      zoom: 10,
      center: latlng
    });
    let marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: this.props.office_name
    });
  }

  render() {
    const tel = `tel:+1${this.props.phone}`;

    return (
      <div>
        <h3>Office</h3>
        <ul>
          <li><b>Office Name: </b>{this.props.office_name}</li>
          <li><b>Address: </b>{this.props.office_address}</li>
          <li><b>Phone: </b><a href={tel}>{this.props.phone}</a></li>
        </ul>
        <div className="google_map" ref="map" />
      </div>
    );
  }

}

export default DoctorOffice;
