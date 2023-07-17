import React from 'react';
import './filterItem.css';
import { useRef } from 'react';


const FilterItem = ({filter ,onSelected}) => {

  const filterNameRef = useRef(null);

  const handleClick = () => {
    onSelected();
 

  filterNameRef.current.classList.toggle('selected-filter');

};
  return (
    <div className='filter-item'>
        {filter.icon && filter.icon}
        <div className='filter-name' ref={filterNameRef} onClick={handleClick}>{filter.title}</div>
    </div>
  )
};

export default FilterItem;