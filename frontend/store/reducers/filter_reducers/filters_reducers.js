import { combineReducers } from 'redux';
import FilterCompaniesReducer from './filter_companies_reducer';
import FilterLevelsReducer from './filter_levels_reducer';
import FilterLocationsReducer from './filter_locations_reducer';
import FilterCategoriesReducer from './filter_categories_reducer';
import FilterApplyReducer from './filter_apply_reducer';


const FiltersReducer = combineReducers({
  applyFilter: FilterApplyReducer,
  companies: FilterCompaniesReducer,
  levels: FilterLevelsReducer,
  locations: FilterLocationsReducer,
  categories: FilterCategoriesReducer
});

export default FiltersReducer;