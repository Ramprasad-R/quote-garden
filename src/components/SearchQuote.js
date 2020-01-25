import React, { useState } from "react";

function SearchQuote(props) {
  const { triggerSearch } = props;
  const [searchText, setSearchText] = useState("");
  const handleChange = event => {
    setSearchText(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log("searched Text", searchText);
    searchText && triggerSearch(searchText);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            name="searchQuote"
            value={searchText}
            placeholder="Search Quotes"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchQuote;
