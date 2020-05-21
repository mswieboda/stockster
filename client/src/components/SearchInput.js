import React from 'react';
import './SearchInput.css';

function SearchInput(props) {
  return (
    <input
      type="search"
      name="search"
      placeholder="Search a Company"
      className="search-input"
      onChange={props.onChange}
    />
  );
}

export default SearchInput;
