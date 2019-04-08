import * as APIUtil from '../util/job_util';

export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const RECEIVE_JOB = 'RECEIVE_JOB';

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
  }
};

// Thunk Actions

export const fetchJobs = (searcTerm) => disptach => {
  return APIUtil.fetchJobs(searcTerm)
    .then(json => dispatch(receiveJobs(json)));
};