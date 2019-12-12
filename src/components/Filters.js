import React from "react";

export default function Filters(props) {
  return (
    <div className="filters">
      <h4>Sizes:</h4>
      <div className="filter-sizes-div">
        <input
          onClick={() => props.handleFilters("XS")}
          className="filter-sizes"
          text=""
          value="XS"
        />
        <input
          onClick={() => props.handleFilters("S")}
          className="filter-sizes"
          text=""
          value="S"
        />
        <input
          onClick={() => props.handleFilters("M")}
          className="filter-sizes"
          text=""
          value="M"
        />
        <input
          onClick={() => props.handleFilters("ML")}
          className="filter-sizes"
          text=""
          value="ML"
        />
        <input
          onClick={() => props.handleFilters("L")}
          className="filter-sizes"
          text=""
          value="L"
        />
        <input
          onClick={() => props.handleFilters("XL")}
          className="filter-sizes"
          text=""
          value="XL"
        />
        <input
          onClick={() => props.handleFilters("XXL")}
          className="filter-sizes"
          text=""
          value="XXL"
        />
      </div>
    </div>
  );
}
