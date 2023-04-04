import React from "react";
import "../styles/TodoSearch.css";

function TodoSearch({searchValue, setSearchValue }) {
  

  const onSearhValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearhValueChange}
    />
  );
}

export { TodoSearch };
