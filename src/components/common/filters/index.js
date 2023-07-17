import React from "react";
import "./filters.css";
import FilterItem from "./filterItem";

const Filters = ({ filterList , onFilterChange}) => {
  return (
    <div className="filters">
      {filterList &&
        filterList.map((filter) => {
          return <FilterItem filter={filter} key={filter.id} onSelected = {() => onFilterChange(filter)}/>;
        })}
    </div>
  );
};

export default Filters;
