import React from "react";

const SearchForm = ({
  handleSearchInputChange,
  searchInput,
  handleSearchFormSubmit,
}) => {
  return (
    // onsubmit handles both enter and click btn
    <form onSubmit={handleSearchFormSubmit}>
      <input
        type="text"
        onChange={handleSearchInputChange}
        value={searchInput}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
