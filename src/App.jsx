import axios from "axios";
import { useEffect, useState } from "react";
import getRandomNumber from "../utils/getRandomNumber";
import "./App.css";
import Navbar from "./components/Navbar";
import ResidentList from "./components/ResidentList";
import LocationInfo from "./components/LocationInfo";
import ErrorMessage from "./components/ErrorMessage";
import ModalResident from "./components/ModalResident";

const RESIDENT_LENGTH = 15

function App() {
  const [location, setLocation] = useState();
  const [locationName, setLocationName] = useState()
  const [modalResident, setModalResident] = useState(false)
  const [showError, setShowError] = useState(false)
  const [load, setLoad] = useState(false)
  const [load2, setLoad2] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const [residentsFilter, setResidentsFilter] = useState([])

  const [change, setChange] = useState(false)

  setTimeout(()=> setLoad(true), 6000)
  setTimeout(()=> setLoad2(true), 3850)

  const port1 = {
    backgroundImage: "url(./portada.jpeg)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
  }

  const port2 = {
    backgroundImage: "url(./intro.gif)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
  }

  const getDataDimension = (idDimension) => {
    
    if(!idDimension ) {
      setShowError(true)
      setTimeout(()=>setShowError(false), 6000)
      return
    }
    const URL = `https://rickandmortyapi.com/api/location/${idDimension}`;
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => {
      if(location?.name !== locationName){
        setShowError(true)
        setTimeout(()=>setShowError(false), 6000)
      }else{

      }
        console.log(err);
      });
  };

  const searchRandomDimension = () =>{
    const randomDimension = getRandomNumber();
    getDataDimension(randomDimension);
  }

  useEffect(() => {
    searchRandomDimension()
  }, [change]);

  const getAllPages = () =>{
    const arrayPages = []
    for (let i = 1; i < lastPage + 1; i++) {
      arrayPages.push(i)
    }
    return arrayPages
  }
  

  useEffect(() => {
    if(!location) return

    const quantityResidents = location.residents.length
    const quantityPages = Math.ceil(quantityResidents / RESIDENT_LENGTH)
    setLastPage(quantityPages)
    setCurrentPage(1)
  }, [location])

  useEffect(() => {
    const lastResidentCut = currentPage * RESIDENT_LENGTH
    const firstResidentCut = lastResidentCut - RESIDENT_LENGTH

    const newResidentsFilter = location?.residents.slice(firstResidentCut, lastResidentCut)
    setResidentsFilter(newResidentsFilter)

    window.scrollTo(0,0)
  }, [currentPage, location])
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const dimensionSearch = e.target.searchValue.value;
    getDataDimension(dimensionSearch);
  };

  const handleChange = (e) => {
    setLocationName(e.target.value)
  }

  const getNewLocation = (URL, name) => {
    setLocationName(name)
    axios.get(URL)
      .then(({data}) => setLocation(data))
      .catch(err => console.log(err))
  }

  const handleRefresh = () => {
    setChange(!change)
    setLocationName("")
  }

  return (
    <>
      <div className={ `portada2 ${load2 && "none"}`} style={port2}>
      </div>
      <div className={ `portada ${load && "none"}`} style={port1}>
        <img src="portal3.png" alt="" />
      </div>
      <div className="App">
        <Navbar 
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
          locationName={locationName} 
          getNewLocation={getNewLocation}  
        />
        <LocationInfo location={location} />
        <ul className="list-pages">
          {
            getAllPages().map( (page) => (
              <li 
                onClick={() => setCurrentPage(page)} 
                className={ (currentPage === page) ? "list-item active" : "list-item"} 
                key={page}> {page} 
                 </li>
              
            ))
          }
        </ul>
        <ResidentList residentsFilter={residentsFilter} setModalResident={setModalResident} />
        <ul className="list-pages">
          {
            getAllPages().map( (page) => (
              <li 
                onClick={() => setCurrentPage(page)} 
                className={ (currentPage === page) ? "list-item active" : "list-item"} 
                key={page}> {page} 
                 </li>
              
            ))
          }
        </ul>
        {
          modalResident && <ModalResident modalResident={modalResident} />
        }
        {
          showError && <ErrorMessage setShowError={ setShowError } />         
        }

        { load &&<>
          <button className="refresh" onClick={ handleRefresh }>
            <span className="material-symbols-outlined up-icon">sync</span>
          </button>
          <button className="scroll-up" onClick={ () => window.scrollTo(0, 0)}>
            <span className="material-symbols-outlined up-icon">expand_less</span>
          </button>
        </>}
      </div>
    </>
  );
}

export default App;
