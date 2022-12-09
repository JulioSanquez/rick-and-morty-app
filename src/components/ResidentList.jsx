import ResidentCard from "./ResidentCard";

export const ResidentList = ({ residentsFilter, setModalResident}) => {
  
  return(
    <section className="location-residents" >
      {residentsFilter?.map((urlResident) => (
        <ResidentCard 
          key={urlResident} 
          urlResident={urlResident} 
          setModalResident={setModalResident} 
        />
      ))}
    </section>
  )
}

export default ResidentList;
