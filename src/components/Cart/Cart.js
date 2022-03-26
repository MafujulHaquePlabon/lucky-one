import React, { useState } from 'react';
import "./Cart.css"
const Cart = ({cart,handleChooseAgain}) => {
    let name=[];
   if(!(cart.length>4)){
    for(const product of cart){
      name.push(product.name);
    }
   }
   else{
    alert("X Opps... Can't Select More Than 4 items!")
}
   const random=Math.floor(Math.random()* name.length)
   const [randomNb,setRandomNb]=useState([])
   
   const handleChooseOneForMe=()=>{
     
    const abc=[...name];
    cart.length=[]
    setRandomNb(abc)
    }
    
    return (
        <div className="shadow roundEd cart py-5 text-center bg-secondary">
             <h4 className="text-white">Selected Bike:</h4>
             <h5 className="text-warning">{name[0]}</h5>
             <h5 className="text-warning">{name[1]}</h5>
             <h5 className="text-warning">{name[2]}</h5>
             <h5 className="text-warning">{name[3]}</h5>
             <h5 className="text-info fw-bold">
                 {randomNb[random]}
                 </h5>
             <button onClick={handleChooseOneForMe} className="hoverBtn border-0 rounded-pill px-3 py-2 text-white fw-bolder mt-5">Choose 1 For Me</button>
             <br/>
             <button onClick={()=>handleChooseAgain(randomNb)} className="hoverBtn border-0 rounded-pill px-4 py-2 text-white fw-bolder mt-2">Choose Again</button>
        </div>
    );
};

export default Cart;