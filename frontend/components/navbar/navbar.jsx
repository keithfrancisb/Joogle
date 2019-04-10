import React from 'react';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };

    this.update = this.update.bind(this);
    this.search = this.search.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(e) {
    this.setState({
      searchTerm: e.currentTarget.value
    });
  }

  search(e) {
    e.preventDefault();
    console.log(this.state.searchTerm);
    // debugger
    this.props.fetchJobs(this.state.searchTerm)
      .then(() => this.props.history.push('/search'));
  }

  renderErrors() {
    const { errors } = this.props;
    if(errors.length > 0) {
      return (
        <ul>
          {errors.map((error, idx) => {
            return (
              <li key={idx} className="li-error">
                Error: {error}
              </li>
            );
          })}
        </ul>
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <nav id="navbar">
        <div>
          <h1>Search Jobs</h1>
        </div>
        <div className="form-container">
          <form onSubmit={this.search} className='search-form'>
            <div className="input-text-box">
              <input
                onChange={this.update}
                type="text" 
                placeholder="Enter job title here..."
                value={this.state.searchTerm}
              />
            </div>
            <input type="submit" value="Search"/>
          </form>
        </div>
        {this.renderErrors()}
      </nav>
    );
  }
}

export default withRouter(NavBar);