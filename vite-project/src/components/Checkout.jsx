import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
const Checkout = () => {

  const[cartItem,setcartItem]=useState([])
  const getcart=async()=>{
    try {
      const res= await fetch("http://localhost:3000/base/cart",
        {
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          }
        })
      const data= await res.json();
      console.log("cart data",data.data);
      setcartItem(data.data)
    } catch (error) {
     console.log(error) 
    }
  }
  useEffect(()=>{getcart()},[]);
  let grandtotal=0;
  if(cartItem)
  {
    cartItem.forEach(element => {
     grandtotal+= element.price*element.quantity;
    });
  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Billing Information</h2>
        {cartItem.map((item) => (
          <div key={item._id} className="flex justify-between mb-2">
            <div className="flex-1">
              <p className="text-lg font-bold">{item.title}</p>
              <p className="text-gray-500">Price: ${item.price}</p>
              <p className="text-gray-500">Quantity: {item.quantity}</p>
            </div>
          
          </div>
        ))}
        <div className="flex justify-ceter mt-4">
      
          <h2 className="text-xl font-normal ml-10">Grand Total:</h2>
          <p className="text-xl font-normal">{grandtotal}$</p>
       
        </div>
      </div>
    </div>
  );
};

export default Checkout;
