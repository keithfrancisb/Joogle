import {
  ADD_COMPANY_FILTER,
  REMOVE_COMPANY_FILTER,
  CLEAR_FILTERS
} from '../../actions/filter_actions';

const FilterCompaniesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case ADD_COMPANY_FILTER:
      newState[action.value] = true;
      return newState;
    case REMOVE_COMPANY_FILTER:
      delete newState[action.value];
      return newState;
    case CLEAR_FILTERS:
      return {};
    default:
      return state;
  }
};

export default FilterCompaniesReducer;