import { FIND_DOCTOR } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FIND_DOCTOR:
      return action.payload.data.data;
    default:
      return state;
  }
}
