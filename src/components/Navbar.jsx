import React from "react";
import LocationFilter from "./LocationFilter";

const Navbar = ({ handleSubmit, handleChange, locationName, getNewLocation }) => {

  return (
    <nav className="navbar">
      <div className="navbar-img">
        <img src="navbarImg.svg" alt="Imange from site" />
      </div>
      <div className="navbar-content-search">
        <form className="navbar-search" onSubmit={handleSubmit}>
          <input 
            className="navbar-input" 
            id="searchValue" 
            type="search" 
            autoComplete="off"
            value={locationName} 
            onChange={handleChange}
          /> 
          <button className="navbar-button" type="submit">
            <span className="material-symbols-outlined navbar-icon">search</span>
          </button>
        </form>
        <LocationFilter locationName={locationName} getNewLocation={getNewLocation} />
      </div>
    </nav>
  );
};

export default Navbar;
