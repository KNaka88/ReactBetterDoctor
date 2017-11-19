import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import DoctorsReducer from './reducer_doctors';

const rootReducer = combineReducers({
    form: formReducer,
    doctors: DoctorsReducer
});

export default rootReducer;
