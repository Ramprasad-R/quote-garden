import React, { useState } from "react";

function SearchQuote(props) {
  const { triggerSearch } = props;
  const [searchText, setSearchText] = useState("");
  const handleChange = event => {
    setSearchText(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    searchText && triggerSearch(searchText);
  };
  return (
    <div>
      <nav>
        <div className="nav-wrapper deep-orange lighten-1">
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                id="search"
                type="search"
                onChange={handleChange}
                name="searchQuote"
                value={searchText}
              />
              <label className="label-icon" for="search">
                <i className="material-icons">search quote</i>
              </label>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default SearchQuote;
