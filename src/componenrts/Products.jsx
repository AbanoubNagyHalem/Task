/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [newProducts, setNewProducts] = useState();

  async function getData() {
    let { data } = await axios.get(
      "https://63189f2cf6b281877c71eab0.mockapi.io/products"
    );
    setNewProducts(data);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(newProducts);

  return (
    <>
      <h1 className='text-center p-5 fs-5 text fw-bold'>Explore Products</h1>
      <div className='container w-100'>
        <div className='row'>
          {newProducts?newProducts.map((note) => {
            return <>
            <div className='col-6 col-md-3'>
                  <img
                    className='w-100'
                    src={note.img[0]}
                  />
                  <p className="fw-bold">${note.price}</p>
                  <p className="fw-bold">${note.inStock? <><p className="green">In Stock</p></> : <p className="text-danger">Out of Stock</p>}</p>
                </div>
            </>

          }) : <div className="text-center fs-1">Loading....</div> }
        </div>
      </div>
    </>
  );
}

export default Products;
