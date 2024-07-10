import React from "react";
import { useState } from "react";

const SearchBox = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };



  return (
    <>
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={handleSearch}
    />
    <button>Search</button>
    </>
  );
};

export default SearchBox;
