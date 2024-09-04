import React, { useState } from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiTargetLock } from "react-icons/bi";

const SearchBar = ({ setCity }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    setCity(search);
  };

  return (
    <div className="input-container">
      <HiMagnifyingGlass
        className="input-icon left-icon"
        onClick={handleClick}
      />
      <input
        type="text"
        placeholder="Search Location"
        value={search}
        onChange={handleSearch}
      />
      <div className="targetContainer">
        <BiTargetLock className="input-icon right-icon" />
      </div>
    </div>
  );
};

export default SearchBar;