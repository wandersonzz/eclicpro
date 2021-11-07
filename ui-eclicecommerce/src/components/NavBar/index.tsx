import React from 'react'
import ImgDark from '../../assets/images/logohorizontal.svg'

export default function NavBar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container-fluid">
        <nav className="my-2 my-md-0 mr-md-3">
          <img src={ImgDark} alt="DevSuperior" />
        </nav>
      </div>
    </div>
  )
}

//d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm
