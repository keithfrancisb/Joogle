import { connect } from 'react-redux';
import SideBar from './sidebar';

const msp = ({entities}) => {

  const allCompanies = {};
  const allLevels = {};
  const allLocations = {};
  const allCategories = {};

  Object.values(entities.jobs).forEach(job => {
    const { company, locations, categories, levels } = job;
    
    if(!allCompanies[company]) allCompanies[company] = true;

    levels.forEach(level => {
      if(!allLevels[level]) allLevels[level] = true;
    });

    categories.forEach(category => {
      if(!allCategories[category]) allCategories[category] = true;
    });

    locations.forEach(location => {
      if(!allLocations[location]) allLocations[location] = true;
    });
  });
  
  return {
    companies: Object.keys(allCompanies),
    levels: Object.keys(allLevels),
    locations: Object.keys(allLocations),
    categories: Object.keys(allCategories)
  };
};

export default connect(msp,null)(SideBar);