import React from 'react';

const FilterGroup = ({ list }) => {

  list = list.map((item, idx)=> {
    return (
      <li className="filter-li" key={`${item}${idx}`}>
        <input type="checkbox" name={item} id={`${item}${idx}`} />
        <label htmlFor={`${item}${idx}`}>{item}</label>
      </li>
    );
  });

  return (
    <ul className="filter-options">
      {list}
    </ul>
  );
};

export default FilterGroup;