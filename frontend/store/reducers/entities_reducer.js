import { combineReducers } from 'redux';
import JobsReducer from './jobs_reducer';


const EntitiesReducer = combineReducers({
  jobs: JobsReducer
});

export default EntitiesReducer;