import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removefromcart } from '../utils/CartSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtlc2hhdkBndWouY29tIiwiaWQiOiI2NzQ0ZjlhODg2MWZhMTAzYzQxNjRhMzMiLCJpYXQiOjE3MzI1NzU2MTMsImV4cCI6MTczMzAwNzYxM30.HfkBC06c_4kBKP7ZKkqjnJCGbBdSrjpBBbyYGcec-8k"

const CartItem = ({cartgoods}) => {
  console.log("goods",cartgoods);
  const product=cartgoods;
  const [productquant,setProductquant]=useState(product.quantity);
  const [state, setState] = useState(1);
  const dispatch=useDispatch();
  async function removeitem()
  {
//    dispatch(removefromcart(id));
    try{
    fetch(`http://localhost:3000/base/cart/${product._id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"applicatxion/json",
        'Authorization': `Bearer ${token}`
      }
    })

    console.log("cart item deleted");
    window.location.reload();
  }
  catch(error)
  {
    console.log(error)
  }
  }
  const handleQuantityChangeminus = () => { 
    
    setProductquant( prevCount => prevCount - 1);
  }
  const handleQuantityChangeplus = () => { 
    
    setProductquant(prevCount => prevCount + 1);
  }
  async function updatefinalcart()
    {
      try{
      product.quantity=productquant
        console.log("inside put methode",product)
        fetch(`http://localhost:3000/base/cart/${product.product_id}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json",
            'Authorization': `Bearer ${token}`
          },
          body:JSON.stringify(product)
        })
        console.log("cart quantity updated");
      }
      catch(error)
      {
        console.log(error)
      }
    }
  
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md mb-4">
    <img src={product.thumbnail} alt={product.title} className="w-24 h-24 object-cover rounded mr-4" />
    <div className="flex-1">
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      {product.discountPercentage && (
        <p className="text-red-500">Discount: {product.discountPercentage}%</p>
      )}
      <p className=" text-yellow-500">{product.shippingInformation}</p>
        <div className='flex items-center flex-1 '>
          <p>Brand:<span className='ml-1 text-orange-500'>{product.category}</span></p>
          <p className='ml-5'> Category:<span className='ml-2 text-orange-500'>{product.brand}</span></p>
        </div>
    </div>
    <div className="flex md:mr-14 mt-2">
          <button 
            onClick={handleQuantityChangeminus} 
            className="p-2 bg-gray-200 rounded hover:bg-gray-300" disabled={productquant==1?true:false}
          >
           <FaMinus/>
          </button>
          <span className="mx-2">{productquant}</span>
          <button 
            onClick={handleQuantityChangeplus} 
            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            disabled={productquant==product.stock ? true:false}
          >
            <FaPlus/>
          </button>
          
        </div>
    <div className="flex flex-col items-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2" onClick={updatefinalcart}>update final Quantity </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded mb-2" onClick={()=>{
        removeitem()
      }}>Remove</button>

    </div>
  </div>
  );
};

export default CartItem;
