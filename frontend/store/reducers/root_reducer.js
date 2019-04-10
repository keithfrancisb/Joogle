import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import FiltersReducer from './filter_reducers/filters_reducers';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  errors: ErrorsReducer,
  filters: FiltersReducer
});

export default RootReducer;