import axios from 'axios';
import API_KEY from '../../api_key';

export const FIND_DOCTOR = 'find_doctor';
const ROOT_URL = "https://api.betterdoctor.com/2016-03-01/doctors?user_key=";




export function searchDoctor(value, callback) {
  const request = axios.get(`${ROOT_URL}${API_KEY}&query=${value}&&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10`);
  return {
    type: FIND_DOCTOR,
    payload: request
  }
}
