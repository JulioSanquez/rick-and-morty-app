import React, { useState } from 'react'

const MenuPaginas = ({location}) => {
  const [currentPage, setCurrentPage] = useState(0)
  // console.log(location?.residents.length)
  return (
    <nav>
      <ul>
      { currentPage ?? <div>First...</div>}
      {

      }
      {currentPage < (location?.residents.length/3) && <div>...Last</div>}
      </ul>
    </nav>
  )
}

export default MenuPaginas