import React from "react";
import searchIcon from "../../Assets/Nav-buttons-icons/search black icon.png";
import "./footsearch.css";

const FootSearch = () => {
  return (
    <>
      <div className="foot-search-container">
        <h2 className="foot-search-title">FIND MORE RECIPES</h2>
        <form>
          <div className="foot-search-icon-input-wrapper">
            <span className="foot-search-icon-wrapper">
              <img
                src={searchIcon}
                alt="search-icon"
                className="foot-search-icon"
              />
            </span>
            <input type="text" placeholder="I'm craving..." />
          </div>
          <button className="foot-search-btn">SEARCH</button>
        </form>
      </div>
    </>
  );
};

export default FootSearch;
