



import React from 'react';
import Image from 'next/image';
import Search from '@/app/accests/Search.png';
import Shopping from '@/app/accests/Shopping--cart.png';
import User from '@/app/accests/User--avatar (1).png';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-white">
      
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        
        <div className="flex items-center">
          <Image src={Search} width={20} height={20} alt="Search bar" />
        </div>
        <div className="text-lg font-semibold">Avion</div>
        <div className="flex items-center gap-4">
          <Image  src={Shopping} width={20} height={20} alt="Shopping cart" /> 
          <Image src={User} width={20} height={20} alt="User avatar" />
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex flex-wrap justify-center gap-6 py-3 text-gray-600 text-sm">
          <span className="hover:text-gray-800 cursor-pointer">Plant Pots</span>
          <span className="hover:text-gray-800 cursor-pointer">Ceramics</span>
          <span className="hover:text-gray-800 cursor-pointer">Tables</span>
          <span className="hover:text-gray-800 cursor-pointer">Chairs</span>
          <span className="hover:text-gray-800 cursor-pointer">Crockery</span>
          <span className="hover:text-gray-800 cursor-pointer">Tableware</span>
          <span className="hover:text-gray-800 cursor-pointer">Cutlery</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

