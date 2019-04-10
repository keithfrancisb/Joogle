import {
  ADD_LEVEL_FILTER,
  REMOVE_LEVEL_FILTER,
  CLEAR_FILTERS
} from '../../actions/filter_actions';

const FilterLevelsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case ADD_LEVEL_FILTER:
      newState[action.value] = true;
      return newState;
    case REMOVE_LEVEL_FILTER:
      delete newState[action.value];
      return newState;
    case CLEAR_FILTERS:
      return {};
    default:
      return state;
  }
};

export default FilterLevelsReducer;