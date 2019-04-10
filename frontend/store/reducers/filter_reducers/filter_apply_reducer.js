import { TOGGLE_FILTERS, CLEAR_FILTERS } from '../../actions/filter_actions';


const FilterApplyReducer = (state = false, action) => {
  Object.freeze(state);

  switch(action.type) {
    case TOGGLE_FILTERS:
      return !state;
    default:
      return state;
  }
};

export default FilterApplyReducer;