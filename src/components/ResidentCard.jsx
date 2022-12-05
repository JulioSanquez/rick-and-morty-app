import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const ResidentCard = ({ urlResident }) => {
  const [resident, setResident] = useState();
  
  useEffect(() => {
    axios
      .get(urlResident)
      .then((res) => setResident(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="resident-card">
      {
        resident ?  <>
          <header className="resident-card_header">
            <img src={resident.image} alt={resident.name} />
            <div className="resident-card_status">
              <div className={`circle ${resident.status.toLowerCase()}`}></div>
              <span>{resident.status}</span>
            </div>
          </header>
          <section className="resident-card_body">
            <h2>{resident.name}</h2>
            <ul>
              <li> <span> Species: {resident.species} </span> </li>
              <li> <span> Origin: {resident.origin.name} </span> </li>
              <li> <span> Episodes where appear {resident.episode.length} </span> </li>
            </ul>
          </section>
        </> : <Loader />
      }
    </article>
  );
};

export default ResidentCard;
