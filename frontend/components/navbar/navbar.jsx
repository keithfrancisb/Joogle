import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };

    this.update = this.update.bind(this);
    this.search = this.search.bind(this);
  }

  update(e) {
    this.setState({
      searchTerm: e.currentTarget.value
    });
  }

  search(e) {
    e.preventDefault();
    console.log(this.state.searchTerm);
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

      </nav>
    );
  }
}

export default NavBar;