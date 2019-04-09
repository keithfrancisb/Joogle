import React from 'react';


class JobShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchJob(this.props.match.params.jobId);
  }

  render() {
    const { job } = this.props;
    const desc = job ? job.desc : "";

    return (
      <div className="show-content-container">
        <div className="show-header">
          <h1>{job.company} : {job.title}</h1>
        </div>
        <div className="job-desc" dangerouslySetInnerHTML={{__html: desc }}/>

      </div>
    );
  }
}

export default JobShow;
