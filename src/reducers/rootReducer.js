import {combineReducers} from 'redux';
import {formReducer} from './formReducer';
import { storeUser } from './logUserReducer';
import {attendanceReducer} from './attendanceReducer';

const allReducer = combineReducers({
    userStore: storeUser,
    formData: formReducer,
    attendance:attendanceReducer
});
export default allReducer;