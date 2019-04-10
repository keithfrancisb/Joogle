import { 
  ADD_CATEGORY_FILTER, 
  REMOVE_CATEGORY_FILTER,
  CLEAR_FILTERS } from '../../actions/filter_actions';

const FilterCategoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch(action.type) {
    case ADD_CATEGORY_FILTER:
      newState[action.value] = true;
      return newState;
    case REMOVE_CATEGORY_FILTER:
      delete newState[action.value];
      return newState;
    case CLEAR_FILTERS:
      return {};
    default:
      return state;
  }
};

export default FilterCategoriesReducer;