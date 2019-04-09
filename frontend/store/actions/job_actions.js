import * as APIUtil from '../util/job_util';

export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const RECEIVE_JOB = 'RECEIVE_JOB';
export const RECEIVE_JOB_ERRORS = 'RECEIVE_JOB_ERRORS';
export const CLEAR_ALL_ERRORS = 'CLEAR_ALL_ERRORS';

// Regular Actions

export const receiveJobs = (jobs) => {
  return {
    type: RECEIVE_JOBS,
    jobs
  };
};

export const receiveJob = (job) => {
  return {
    type: RECEIVE_JOB,
    job
  };
};

export const receiveJobErrors = (errors) => {
  return {
    type: RECEIVE_JOB_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ALL_ERRORS,
  }
}

// Thunk Actions

export const fetchJobs = (searchTerm) => dispatch => {
  return APIUtil.fetchJobs(searchTerm)
    .then(json => {
      // debugger
      dispatch(receiveJobs(json.jobs));
      dispatch(clearErrors());
    })
    .catch(err => {
      // debugger
      err.then(error => dispatch(receiveJobErrors(error)));
    });
};

export const fetchJob = (id) => dispatch => {
  return APIUtil.fetchJob(id)
    .then(json => {
      dispatch(receiveJob(json.job));
      dispatch(clearErrors());
    })
    .catch(err => {
      err.then(error => dispatch(receiveJobErrors(error)));
    });
};