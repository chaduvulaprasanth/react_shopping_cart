import React from "react";

export default function Filters(props) {
  return (
    <div className="filters">
      <h4>Sizes:</h4>
      <div className="filter-sizes-div">
        {["XS", "S", "M", "ML", "L", "XL", "XXL"].map(size => (
          <input
            onClick={() => props.handleFilters(size)}
            className="filter-sizes"
            text=""
            value={size}
          />
        ))}
      </div>
    </div>
  );
}
