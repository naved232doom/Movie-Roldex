import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-7 ml-5">
      <input
      onChange={
          (event)=> props.setSearchValue(event.target.value)
      } 
      type="text" className="form-control" placeholder="Search"></input>
    </div>
  );
};

export default SearchBox;
