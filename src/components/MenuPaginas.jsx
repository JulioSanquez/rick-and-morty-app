import React, { useState } from 'react'
import getPagesCharacter from '../../utils/getPagesCharacter'

const MenuPaginas = ({location}) => {
  const [pages, setPages] = useState(  )
  const [currentPage, setCurrentPage] = useState()


  return (
    <nav>
      <ul>
      { currentPage ?? <div>First...</div>}
      {
        pages?.map( (page, i) => <li> {i} </li> )
      }
      {currentPage < (location?.residents.length/3) && <div>...Last</div>}
      </ul>
    </nav>
  )
}

export default MenuPaginas