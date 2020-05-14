import React from "react";
import PropTypes from "prop-types";

const Filters = ({ onChange, filterValue }) => {
  return (
    <div className="filters-container">
      <div className="filter">
        Delimiter:
        <input
          type="text"
          name="delimeter"
          value={filterValue.delimeter}
          onChange={onChange}
        />
      </div>
      <div className="filter">
        Lines:
        <input
          type="text"
          name="lines"
          value={filterValue.lines}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

Filters.prototype = {
  onChange: PropTypes.func,
  filterValue: PropTypes.shape({
    lines: PropTypes.string,
    delimeter: PropTypes.string,
  }),
};

export default Filters;
