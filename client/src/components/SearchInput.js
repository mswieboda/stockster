import React from 'react';

function SearchInput(props) {
  return (
    <input
      type="search"
      name="search"
      placeholder="Search a Company"
      className="search"
      onChange={props.onChange}
    />
  );
}

export default SearchInput;
