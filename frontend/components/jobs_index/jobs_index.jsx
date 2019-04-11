import React from 'react';

class JobsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.viewJobDetails = this.viewJobDetails.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  viewJobDetails(id) {
    return () => {
      this.props.history.push(`/show/${id}`);
    };
  }

  render() {
    if(this.props.jobs.length === 0) {
      this.props.history.push('/');
      return null;
    }

    const jobs = this.props.jobs.map((job, idx) => {
      const desc = job.desc.replace(/(<([^>]+)>)/ig, " ")
      const { company, locations, title } = job;
      return (
        <li key={idx} className="job-item">
          <div className="job-item-details">
            <span><b>Title:</b> {title}</span>
            <span><b>Company:</b> {company}</span>
            <span><b>Location:</b> {locations[0]}</span>
            <span><b>Description:</b>{desc.slice(0,100)}...</span>
          </div>
          <button onClick={this.viewJobDetails(job.id)}>View Details</button>
        </li>
      );
    });

    return (
      <div className="search-content-container">
        <div className="sub-content-container">
          <h1 className="header">Search Results</h1>
          <ul className={"job-list"}>
            {jobs}
          </ul>
        </div>

      </div>
    );
  }
}

export default JobsIndex;