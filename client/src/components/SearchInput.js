import React from 'react';
import './SearchInput.css';

function SearchInput({ onChange }) {
  return (
    <input
      type="search"
      name="search"
      placeholder="Search a Company"
      className="search-input"
      autoComplete="off"
      onChange={onChange}
    />
  );
}

export default SearchInput;
