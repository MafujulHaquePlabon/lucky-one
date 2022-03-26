import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Product.css"
const Product = (props) => {
     console.log(props.product.img)
    const {img,name,price}=props.product;
    return (
        <div className=" col-12 col-lg-4 g-3 border border-info  bg-light shadow">
           <div className="m-2">
           <img className="w-100" src={img} alt="" />
            <h5>{name}</h5>
            <h6>Price:${price}</h6>
           <div className='text-center'>
           <button className="bg-success border-0 rounded-pill px-4 py-2 text-white fw-bolder">Add To Card
           <FontAwesomeIcon className="text-warning ps-2" icon={faShoppingCart} ></FontAwesomeIcon>
           </button>
           
           </div>
           </div>
        </div>
    );
};

export default Product;