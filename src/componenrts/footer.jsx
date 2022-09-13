/** @format */

import React from "react";
import photo from "./imags/Group 2925.png";

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row text-center pt-5'>
          <div className='col-3'>
            <img src={photo} alt='' />
          </div>
          <div className='col-3'>
            <img src={photo} alt='' />
          </div>
          <div className='col-3'>
            <img src={photo} alt='' />
          </div>
          <div className='col-3'>
            <img src={photo} alt='' />
          </div>
        </div>
      </div>
      <div className="text-center text-white p-5 fs-6">Copyright © 2022 - All rights reserved</div>
    </div>
  );
}

export default Footer;
