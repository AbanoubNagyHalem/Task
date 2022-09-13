/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
// import ph from './imags/wi-2022110308-feature-iphone-13-pro-green-m@2x.png'

function Slider() {
  const [photooo, setPhotooo] = useState();


  async function getData() {
    let {data}  = await axios.get(
      "https://63189f2cf6b281877c71eab0.mockapi.io/slider"
    );
    setPhotooo(data[0].img);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <div
        id='carouselExampleControls'
        className='carousel slide'
        data-bs-ride='carousel'>
        <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <img src={photooo} className='d-block w-100'  />
                </div>
                <div className='carousel-item'>
                  <img src={photooo} className='d-block w-100'  />
                </div>
                <div className='carousel-item'>
                  <img src={photooo} className='d-block w-100' />
                </div>  
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'>
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'>
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
