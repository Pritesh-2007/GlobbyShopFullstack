import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdShoppingCart } from 'react-icons/md';
import CartIcon from './CartIcon';
const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold items-start">ShoppyGlobe</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/"><MdHome className='text-4xl'/></Link></li>
            <li><Link to="/cart">
            {/* <MdShoppingCart  className='text-4xl'/> */}
            <CartIcon cartCount="10" />
            </Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
