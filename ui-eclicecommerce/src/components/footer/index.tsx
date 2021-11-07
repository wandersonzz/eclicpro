import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ImgInstagram from '../../assets/images/instagram.svg';


export default function Footer() {
  return (

    <footer className="footer mt-auto flex-wrap justify-content-between align-items-center py-3 my-0 border-topautopy-3 bg-dark">
      <div className="container">
        <div className="col-md-4 d-flex align-items-center">
          <a href="" className=" mb-3 me-3 mb-md-0 text-muted text-decoration-none lh-1"></a>
          <span className="text-muted ">© 2021 Company, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="">

            </a>
          </li>
          <li className="ms-2">
            <a className="text-muted  ml-4" href="">
              <img src={ImgInstagram} alt="ImgInstagram" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="">

            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

//position-absolute
//mt-d-flex