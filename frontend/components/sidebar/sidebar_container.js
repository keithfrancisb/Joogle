import { connect } from 'react-redux';
import SideBar from './sidebar';
import { 
  toggleFilters, 
  clearFilters,
  addCompanyFilter,
  addLocationFilter,
  addCategoryFilter,
  addLevelFilter,
  removeCategoryFilter,
  removeLevelFilter,
  removeLocationFilter,
  removeCompanyFilter
 } from '../../store/actions/filter_actions';

const msp = ({entities, filters}) => {

  const allCompanies = {};
  const allLevels = {};
  const allLocations = {};
  const allCategories = {};

  Object.values(entities.jobs).forEach(job => {
    const { company, locations, categories, levels } = job;
    
    allCompanies[company] = true;
    levels.forEach(level => allLevels[level] = true);
    categories.forEach(category => allCategories[category] = true);
    locations.forEach(location => allLocations[location] = true);
  });
  
  return {
    filters,
    companies: Object.keys(allCompanies),
    levels: Object.keys(allLevels),
    locations: Object.keys(allLocations),
    categories: Object.keys(allCategories)
  };
};

const mdp = dispatch => {
  return {
    toggleFilters: () => dispatch(toggleFilters()),
    clearFilters: () => dispatch(clearFilters()),
    addCompanyFilter: value => dispatch(addCompanyFilter(value)),
    addLocationFilter: value => dispatch(addLocationFilter(value)),
    addCategoryFilter: value => dispatch(addCategoryFilter(value)),
    addLevelFilter: value => dispatch(addLevelFilter(value)),
    removeCategoryFilter: value => dispatch(removeCategoryFilter(value)),
    removeLocationFilter: value => dispatch(removeLocationFilter(value)),
    removeLevelFilter: value => dispatch(removeLevelFilter(value)),
    removeCompanyFilter: value => dispatch(removeCompanyFilter(value)),
  }
};


export default connect(msp,mdp)(SideBar);