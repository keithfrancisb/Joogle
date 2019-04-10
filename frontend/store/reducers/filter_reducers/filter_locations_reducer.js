import {
  ADD_LOCATION_FILTER,
  REMOVE_LOCATION_FILTER,
  CLEAR_FILTERS
} from '../../actions/filter_actions';

const FilterLocationsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case ADD_LOCATION_FILTER:
      newState[action.value] = true;
      return newState;
    case REMOVE_LOCATION_FILTER:
      delete newState[action.value];
      return newState;
    case CLEAR_FILTERS:
      return {};
    default:
      return state;
  }
};

export default FilterLocationsReducer;