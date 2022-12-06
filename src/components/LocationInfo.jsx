import React from "react";

const LocationInfo = ({ location }) => {
  return (
    <article className="location-info">
      <h2 className="location-info_title">{location ?.name}</h2>
      <ul className="location-info_list">
        <li>
          <span> <h2>Type</h2> {location?.type}</span>
        </li>
        <li> <h2>Dimension</h2> {location?.dimension}</li>
        <li><h2>Population</h2>{location?.residents.length}</li>
      </ul>
    </article>
  );
};
export default LocationInfo;
