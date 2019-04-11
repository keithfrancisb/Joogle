import React from 'react';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      prevPath: ""
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
    this.props.fetchJobs(this.state.searchTerm)
      .then(() => this.props.history.push('/search'));
  }

  renderErrors() {
    const { errors } = this.props;
    if(errors.length > 0) {
      return (
          errors.map((error, idx) => {
            return (
              <li key={idx} className="li-error">
                {error}
              </li>
            );
          })
      );
    } else {
      return null;
    }
  }

  render() {

    const { location, withSearchResults } = this.props;

    let goBack = null;
    if(location.pathname.indexOf("show") !== -1 && withSearchResults)
      goBack = (
        <button className="return-btn" onClick={() => this.props.history.goBack()}>
          Go Back
        </button>
      );

    return (
      <nav id="navbar">
        <div className="joogle-logo">
          <h1>Joogle</h1>
        </div>
        <div className="search-container">
          <ul className="error-list">
            {this.renderErrors()}
          </ul>
          <div className="form-container">
          {goBack}
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
        </div>
        
      </nav>
    );
  }
}

export default withRouter(NavBar);