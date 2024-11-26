import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// const cartItems = [
//   { id: 1, name: 'Product 1', price: 100, quantity: 1 },
//   { id: 2, name: 'Product 2', price: 150, quantity: 2 },
// ];

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtlc2hhdkBndWouY29tIiwiaWQiOiI2NzQ0ZjlhODg2MWZhMTAzYzQxNjRhMzMiLCJpYXQiOjE3MzI1NzU2MTMsImV4cCI6MTczMzAwNzYxM30.HfkBC06c_4kBKP7ZKkqjnJCGbBdSrjpBBbyYGcec-8k"
const Cart = () => {
  const[cartItem,setcartItem]=useState([])
  const getcart=async()=>{
    try {
      const res= await fetch("http://localhost:3000/base/cart",
        {
          method:"GET",
          headers:{
            "Content-Type":"application/json",
            'Authorization': `Bearer ${token}`
          }
        })
      console.log("cart data",res);
      const data= await res.json();
      console.log("cart data",data.data);
      setcartItem(data.data)
    } catch (error) {
     console.log(error) 
    }
  }
  useEffect(()=>{getcart()},[]);






  ///////////////////////////////
  // const ccount=useSelector((store)=>store.cart.cartcount)
  
  let isempth=cartItem.length===0
  console.log(isempth)
  // const cartgoods=useSelector((store)=>store.cart.items)
  // console.log(cartgoods);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
   
      { 
      isempth?<h2 className="text-xl font-bold text-slate-400 mb-4">Your Cart is Empty </h2>
      :
      <div>
      {cartItem.map((item) => (
        <CartItem key={item.id} cartgoods={item}/>
      ))} 
      <div className="mt-4">
      <Link to='/checkout' className="bg-green-500 text-white px-4 py-2 rounded">Checkout</Link>
      </div>
      </div>
      }
      
    </div>
  );
};

export default Cart;
