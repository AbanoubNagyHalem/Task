import React from 'react'
import photo from './imags/Group 2925.png'
import photo1 from './imags/vuesax-linear-bag-2.png'
import photo2 from './imags/vuesax-linear-profile.png'
import photo3 from './imags/vuesax-linear-search-normal.png'

import '../App.css'

function Home() {
  return <>

  <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={photo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent ">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Mac</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">iPad</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">iPhone</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Watch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Accessories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Offers</a>
        </li>
      </ul>
    <span className='middle'></span>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Support</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Locations</a>
        </li>
      </ul>

      <div className='icons'>
        <img className='p-2' src={photo3} alt="" />
        <img className='p-2' src={photo2} alt="" />
        <img className='p-2' src={photo1} alt="" />
      </div>
    </div>
  </div>
</nav>
 
  </>
}

export default Home