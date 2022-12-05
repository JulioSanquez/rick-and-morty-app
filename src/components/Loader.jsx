import React from 'react'

const Loader = () => {
  return (
    <div>
        <header className="resident-card_header">
            <img src="loader.gif" alt="Image" />
            <div className="resident-card_status">
                <div className={`circle unknown`}></div>
                <span>unknown</span>
            </div>
        </header>
        <section className="resident-card_body loader-card_body">
            <h2> - </h2>
            <ul>
                <li> - </li>
                <li> - </li>
                <li> - </li>
            </ul>
        </section>
    </div>
  )
}

export default Loader