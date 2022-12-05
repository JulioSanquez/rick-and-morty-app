import React from 'react'

const ErrorMessage = ({setShowError}) => {
  return (
    <article className='error' >
        <p>Not Found This Dimension</p> 
        <span className="material-symbols-outlined close" onClick={() => setShowError(false)}>close</span>
    </article>
  )
}

export default ErrorMessage