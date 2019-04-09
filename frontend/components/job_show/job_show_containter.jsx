import { connect } from 'react-redux';
import JobShow from './job_show';
import { fetchJob } from '../../store/actions/job_actions';

const msp = ({entities}, ownProps) => {
  const { jobId } = ownProps.match.params;
  const job = entities.jobs[jobId] || {};

  return {
    job
  };
};

const mdp = (dispatch) => {
  return {
    fetchJob: (id) => dispatch(fetchJob(id))
  };
};

export default connect(msp, mdp)(JobShow);