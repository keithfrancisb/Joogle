import React from 'react';

{/* <h1>This is the splash!</h1> */}
class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };

    this.search = this.search.bind(this);
    this.update = this.update.bind(this);
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
      .then((res) => {
        // debugger
        this.props.history.push('/search')
      });
  }

  renderErrors() {
    const { errors } = this.props;
    if (errors.length > 0) {
      return (
        <ul className="error-list">
          {errors.map((error, idx) => {
            return (
              <li key={idx} className="li-error">
                {error}
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
      <div className="splash-container">
        <div className="splash-form-container">
          <h1 className="joogle-logo">Joogle</h1>
          <form className="splash-search-form" onSubmit={this.search}>
            <div className="splash-input-text-box">
              <input  
                type="text" 
                onChange={this.update}
                value={this.state.searchTerm} 
                placeholder="Search Jobs Here..."
              />
            </div>
            <input type="submit" value="Search"/>
          </form>
          {this.renderErrors()}
        </div>
      </div>
    );

  }
}

export default Splash;