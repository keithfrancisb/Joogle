import React from 'react';
import FilterGroup from './filter_group';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleFilter = this.toggleFilter.bind(this);
    this.toggleFilterStatus = this.toggleFilterStatus.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  toggleFilterStatus() {
    this.props.toggleFilters();
  }

  clearFilters() {
    this._removeAllFilters();
    this.props.clearFilters();
  }

  toggleFilter(e) {
    const { checked, dataset, } = e.currentTarget;
    const { value, type } = dataset;
    if(checked) {
      this._addFilter(type, value);
    } else {
      this._removeFilter(type, value);
    }
      
  }

  // ---------------------------------------------------------------------------

  _removeAllFilters() { // unchecks all checkboxes
    let { companies, locations, levels, categories } = this.props.filters;
    const { _uncheckFilter } = this;
    // companies
    Object.keys(companies)
      .forEach(company => _uncheckFilter("company", company));
    // locations
    Object.keys(locations)
      .forEach(location => _uncheckFilter("location", location));
    // levels
    Object.keys(levels)
      .forEach(level => _uncheckFilter("level", level));
    // categories
    Object.keys(categories)
      .forEach(category => _uncheckFilter("category", category));
  }

  _uncheckFilter(type, value) {
    const checkbox = document.querySelector(`input[id="${type}-${value}"]`);
    checkbox.checked = false;
  }

  _addFilter(type, value) {
    const { addCompanyFilter, addLocationFilter, addLevelFilter, addCategoryFilter } = this.props;

    switch (type) {
      case "company": return addCompanyFilter(value);
      case "location": return addLocationFilter(value);
      case "level": return addLevelFilter(value);
      case "category": return addCategoryFilter(value);
    }
  }

  _removeFilter(type, value) {
    const { removeCompanyFilter, removeLocationFilter, removeLevelFilter, removeCategoryFilter } = this.props;

    switch (type) {
      case "company": return removeCompanyFilter(value);
      case "location": return removeLocationFilter(value);
      case "level": return removeLevelFilter(value);
      case "category": return removeCategoryFilter(value);
    }
  }

  render() {
    let { companies, levels, locations, categories, filters } = this.props;
    const { applyFilter } = filters;

    const filterStatus = applyFilter ? "ON" : "OFF";

    return (
      <div className="sidebar-container">
        <div className="filter-container">
          <div className="filter-header">
            <h2>Filter</h2>
            <div className="btn-group">
              <button className="filter-btn" onClick={this.toggleFilterStatus}>
                Apply Filters
              </button>
              <button className="filter-btn" onClick={this.clearFilters}>
                Clear All Filters
              </button>
            </div>
            <h3>Filter Status: {filterStatus}</h3>
          </div>
          <div className="filter-group company">
            <h3>Company:</h3>
            <FilterGroup 
              list={companies} 
              type="company" 
              toggleFilter={this.toggleFilter}
            />
          </div>

          <div className="filter-group level">
            <h3>Level:</h3>
            <FilterGroup 
              list={levels} 
              type="level"
              toggleFilter={this.toggleFilter}
            />
          </div>

          <div className="filter-group location">
            <h3>Location:</h3>
            <FilterGroup 
              list={locations} 
              type="location"
              toggleFilter={this.toggleFilter}
            />
          </div>

          <div className="filter-group category">
            <h3>Category:</h3>
            <FilterGroup 
              list={categories} 
              type="category"
              toggleFilter={this.toggleFilter}
            />
          </div>
        </div>
        
      </div>
    );
  }
}

export default SideBar;