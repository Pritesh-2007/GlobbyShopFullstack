import React from 'react';
import ProductItem from './ProductItem';
import usefetch from '../utils/usefetchHook';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from './Loader';

const data1=await  usefetch("http://localhost:3000/base/products");
// console.log(data.products);
const ProductList1 = () => {
    const [product, setproduct] = useState(data1.data); 
      
        console.log("data",product)
        const [searchText, setSearchText] = useState('');
      
        const handleSearch = (event) => {
          setSearchText(event.target.value);
        };
      
        const filteredProducts = product.filter(product =>
          product.title.toLowerCase().includes(searchText.toLowerCase())
        );
      
        if (!product) 
          { 
              return <Loader />; 
           
          }
  return (
    <>
    <div className="flex justify-center mt-12">
  <input
    type="text"
    placeholder="Search products by..."
    value={searchText}
    onChange={handleSearch}
    className="w-2/4 p-2 mb-4 rounded border-blue-500 border focus:ring focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none"
  />
  </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 p-10">     
        {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>No products found</p>
      )}
      </div>
    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 p-10">
      {product.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div> */}
    </>
  );
};

export default ProductList1;
