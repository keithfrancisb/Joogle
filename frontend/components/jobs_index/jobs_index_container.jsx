import { connect } from 'react-redux';
import JobsIndex from './jobs_index';

const msp = ({ entities }) => {
  return {
    jobs: Object.values(entities.jobs)
  };
};

// const mdp = (dispatch) => {

// };

export default connect(msp)(JobsIndex);