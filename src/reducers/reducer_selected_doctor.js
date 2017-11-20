import { SELECTED_DOCTOR } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case SELECTED_DOCTOR:
      return action.payload
  }

  return state;
}
