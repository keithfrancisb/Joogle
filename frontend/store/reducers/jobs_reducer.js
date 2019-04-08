import { RECEIVE_JOBS, RECEIVE_JOB } from '../actions/job_actions';

const JobsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_JOBS:
      return action.jobs
    case RECEIVE_JOB:
      newState[action.job.id] = action.job;
      return newState;
    default:
      return state;
  }
}

export default JobsReducer;