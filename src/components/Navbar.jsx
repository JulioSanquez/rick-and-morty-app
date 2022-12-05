import React from "react";
import { useState } from "react";
import LocationFilter from "./LocationFilter";

const Navbar = ({ brand, handleSubmit, handleChange, locationName, getNewLocation }) => {
const [cssProps, setCssProps] = useState()
const handleResize = (e) => {
  console.log(e.target)
}

  return (
    <nav className="navbar" id="navbars">
      <div className="navbar-img">
        <img src="navbarImg.svg" alt="Imange from site" />
      </div>
      <div className="navbar-content-search">
        <form className="navbar-search" onSubmit={handleSubmit}>
          <input className="navbar-input" 
            id="searchValue" 
            type="search" 
            autoComplete="off"
            value={locationName} 
            onChange={handleChange} 
            onResize={handleResize}
          />
          <button className="navbar-button" type="submit">
            <span className="material-symbols-outlined navbar-icon">search</span>
          </button>
        </form>
        <LocationFilter locationName={locationName} getNewLocation={getNewLocation} cssProps={cssProps} />
      </div>
    </nav>
  );
};

export default Navbar;
