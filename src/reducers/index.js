import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import DoctorsReducer from './reducer_doctors';
import DoctorReducer from './reducer_selected_doctor';

const rootReducer = combineReducers({
    form: formReducer,
    doctors: DoctorsReducer,
    doctor: DoctorReducer
});

export default rootReducer;
