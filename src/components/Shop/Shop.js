import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    return (
        <div className="row w-100 ">
           <div className="col-8 col-lg-8 row ms-2 ">
           {
             products.map(product=><Product key={product.id} product={product}></Product>)
            }
           </div>
           <div className="col-4 col-lg-4 ms-auto">
               <Cart></Cart>
           </div>
        </div>
    );
};

export default Shop;