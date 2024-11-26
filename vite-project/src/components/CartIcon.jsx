import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
const CartIcon = () => {

    const cartCount=useSelector((store)=>store.cart.cartcount)
  return (
    <div className="relative">
      <MdShoppingCart className="text-4xl text-white" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
