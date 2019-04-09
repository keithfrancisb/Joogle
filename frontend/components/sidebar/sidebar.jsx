import React from 'react';
import FilterGroup from './filter_group';

class SideBar extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    let { companies, levels, locations, categories } = this.props;

    return (
      <div className="sidebar-container">
        <div className="filter-container">
          <h2 className="filter-header">Filter By:</h2>
          <div className="filter-group company">
            <h3>Company:</h3>
            <FilterGroup list={companies} />
          </div>

          <div className="filter-group level">
            <h3>Level:</h3>
            <FilterGroup list={levels} />
          </div>

          <div className="filter-group location">
            <h3>Location:</h3>
            <FilterGroup list={locations} />
          </div>

          <div className="filter-group category">
            <h3>Category:</h3>
            <FilterGroup list={categories} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default SideBar;