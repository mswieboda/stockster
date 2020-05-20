import React from 'react';

function SearchInput(props) {
  return (
    <div>
      Search <input type="search" name="search" className="search" onChange={props.onChange} />
    </div>
  );
}

export default SearchInput;
