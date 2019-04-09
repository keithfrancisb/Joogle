import NavBar from './navbar';
import { connect } from 'react-redux';
import { fetchJobs } from '../../store/actions/job_actions';


const msp = (state) => {
  return {
    errors: state.errors.job
  };
};

const mdp = (dispatch) => {
  return {
    fetchJobs: (searchTerm) => dispatch(fetchJobs(searchTerm))
  };
};

export default connect(msp, mdp)(NavBar);