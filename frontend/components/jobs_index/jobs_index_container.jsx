import { connect } from 'react-redux';
import JobsIndex from './jobs_index';

import { filterJobs } from '../../store/selectors';

const msp = ({ entities, filters }) => {
  
  const jobs = filterJobs(Object.values(entities.jobs), filters);

  return {
    applyFilter: filters.applyFilter,
    jobs
  };
};

// const mdp = (dispatch) => {

// };

export default connect(msp)(JobsIndex);