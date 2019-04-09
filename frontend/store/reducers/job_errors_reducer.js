import { RECEIVE_JOB_ERRORS, CLEAR_ALL_ERRORS } from '../actions/job_actions';

const JobErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case CLEAR_ALL_ERRORS:
      return [];
    case RECEIVE_JOB_ERRORS:
      return [action.errors];
    default:
      return state;
  }
};

export default JobErrorsReducer;