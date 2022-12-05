import React from "react";
import MenuPaginas from "./MenuPaginas";
import ResidentCard from "./ResidentCard";

export const ResidentList = ({ location }) => {
  return (<>
    <section className="location-residents">
      {location?.residents.map((urlResident) => (
        <ResidentCard key={urlResident} urlResident={urlResident} />
      ))}
    </section>
    <MenuPaginas location={location} />
  </>
  );
};

export default ResidentList;
