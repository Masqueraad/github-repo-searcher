import React from "react";

function SearchInput({ query, onQuery, onSearch }) {
  return (
    <div className="search">
      <input
        className="search-txt"
        type="text"
        placeholder="Type to search"
        value={query}
        onChange={onQuery}
      />

      <button className="search-btn" onClick={onSearch}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchInput;
