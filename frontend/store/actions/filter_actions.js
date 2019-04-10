export const ADD_COMPANY_FILTER = 'ADD_COMPANY_FILTER';
export const ADD_LEVEL_FILTER = 'ADD_LEVEL_FILTER';
export const ADD_LOCATION_FILTER = 'ADD_LOCATION_FILTER';
export const ADD_CATEGORY_FILTER = 'ADD_CATEGORY_FILTER';

export const REMOVE_COMPANY_FILTER = 'REMOVE_COMPANY_FILTER';
export const REMOVE_LEVEL_FILTER = 'REMOVE_LEVEL_FILTER';
export const REMOVE_LOCATION_FILTER = 'REMOVE_LOCATION_FILTER';
export const REMOVE_CATEGORY_FILTER = 'REMOVE_CATEGORY_FILTER';

export const TOGGLE_FILTERS = 'TOGGLE_FILTER';
export const CLEAR_FILTERS = 'CLEAR_FILTER';

export const toggleFilters = () => {
  return { type: TOGGLE_FILTERS };
};

export const clearFilters = () => {
  return { type: CLEAR_FILTERS };
};

export const addCompanyFilter = value => {
  return {
    type: ADD_COMPANY_FILTER,
    value
  };
};

export const addLocationFilter = value => {
  return {
    type: ADD_LOCATION_FILTER,
    value
  };
};
export const addLevelFilter = value => {
  return {
    type: ADD_LEVEL_FILTER,
    value
  };
};

export const addCategoryFilter = value => {
  return {
    type: ADD_CATEGORY_FILTER,
    value
  };
};

// ----------------------------------------------

export const removeCompanyFilter = value => {
  return {
    type: REMOVE_COMPANY_FILTER,
    value
  };
};

export const removeLevelFilter = value => {
  return {
    type: REMOVE_LEVEL_FILTER,
    value
  };
};

export const removeLocationFilter = value => {
  return {
    type: REMOVE_LOCATION_FILTER,
    value
  };
};

export const removeCategoryFilter = value => {
  return {
    type: REMOVE_CATEGORY_FILTER,
    value
  };
};

