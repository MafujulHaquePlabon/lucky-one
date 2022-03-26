import React from 'react';
import "./Cart.css"
const Cart = ({cart}) => {
   // console.log(cart.length)
    let name=[];
   if(!(cart.length>4)){
    for(const product of cart){
      name.push(product.name);
    }
   }
  /*  else{
    alert("iteration none");
 } */
    return (
        <div className="shadow roundEd cart py-5 text-center bg-secondary">
             <h5 className="text-white">Selected Clothes</h5>
             <h5>Name:{name[0]}</h5>
             <h5>Name:{name[1]}</h5>
             <h5>Name:{name[2]}</h5>
             <h5>Name:{name[3]}</h5>
             <button className="bg-success border-0 rounded-pill px-3 py-2 text-white fw-bolder mt-5">Choose 1 For Me</button>
             <br/>
             <button className="bg-success border-0 rounded-pill px-4 py-2 text-white fw-bolder mt-2">Choose Again</button>
        </div>
    );
};

export default Cart;