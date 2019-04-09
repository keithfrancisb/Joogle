import { combineReducers } from 'redux';
import JobErrorsReducer from './job_errors_reducer';

const ErrorsReducer = combineReducers({
  job: JobErrorsReducer
});

export default ErrorsReducer;