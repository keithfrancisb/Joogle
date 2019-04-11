import NavBar from './navbar';
import { connect } from 'react-redux';
import { fetchJobs } from '../../store/actions/job_actions';


const msp = ({entities, errors}) => {
  const withSearchResults = 
    Object.keys(entities.jobs).length <= 1 ? false : true;

  return {
    withSearchResults,
    errors: errors.job
  };
};

const mdp = (dispatch) => {
  return {
    fetchJobs: (searchTerm) => dispatch(fetchJobs(searchTerm))
  };
};

export default connect(msp, mdp)(NavBar);