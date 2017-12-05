import axios from 'axios';
import API_KEY from '../../api_keys';


export const FIND_DOCTOR = 'find_doctor';
export const SELECTED_DOCTOR = 'selected_doctor';

const ROOT_URL = "https://api.betterdoctor.com/2016-03-01/doctors?user_key=";


export function searchDoctor(value, lat="", lng="", callback) {
  const request = axios.get(`${ROOT_URL}${API_KEY}&query=${value}&location=${lat}%2C${lng}%2C100&user_location=${lat}%2C${lng}&skip=0&limit=10`);

  return {
    type: FIND_DOCTOR,
    payload: request
  }
}

export function selectDoctor(doctor) {
  return {
    type: SELECTED_DOCTOR,
    payload: doctor
  }
}
