import React from 'react';

class FilterGroup extends React.Component {
  constructor(props){
    super(props);

    
  }

  render() {
    let { list, type, toggleFilter } = this.props;

    list = list.map(item => {
      return (
        <li className="filter-li" key={item}>
          <input 
            onChange={toggleFilter} 
            type="checkbox" 
            id={`${type}-${item}`} 
            data-value={item}
            data-type={type} 
          />
          <label htmlFor={`${type}-${item}`}>{item}</label>
        </li>
      );
    });

    return (
      <ul className="filter-options">
        {list}
      </ul>
    );
  }
}


export default FilterGroup;