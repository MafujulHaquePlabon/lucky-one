import React from 'react';
import "./Cart.css"
const Cart = () => {
    return (
        <div className="shadow roundEd  py-5 text-center bg-secondary">
             <h5 className="text-white">Selected Clothes</h5>
             <button className="bg-success border-0 rounded-pill px-3 py-2 text-white fw-bolder mt-5">Choose 1 For Me</button>
             <br/>
             <button className="bg-success border-0 rounded-pill px-4 py-2 text-white fw-bolder mt-2">Choose Again</button>
        </div>
    );
};

export default Cart;