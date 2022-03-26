import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const handleAddToCart=(product)=>{
         const newCart=[...cart,product]
         setCart(newCart);
    }
    const handleChooseAgain=(randomNb)=>{
        randomNb.length=[]
        const cart=[];
        setCart(cart)
    }
    return (
        <div className="row w-100 ">
           <div className="col-8 col-lg-8 row ms-2 mb-5 ">
           {
             products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
            }
           </div>
           <div className="col-4 col-lg-4 ms-auto">
               <Cart cart={cart} handleChooseAgain={handleChooseAgain}></Cart>
           </div>
        </div>
    );
};

export default Shop;