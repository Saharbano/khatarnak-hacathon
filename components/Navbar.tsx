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
         <Link href='http://localhost:3000/shopping'> <Image  src={Shopping} width={20} height={20} alt="Shopping cart" /> </Link>
          <Image src={User} width={20} height={20} alt="User avatar" />
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex flex-wrap justify-center gap-6 py-3 text-gray-600 text-sm">
          <ul className='flex gap-12'>
          <Link href='http://localhost:3000/'> <li className="  hover:text-black hover:text-lg  cursor-pointer">Home </li></Link>
          <Link href='/about'> <li className=" hover:text-black hover:text-lg   cursor-pointer">About </li></Link>
         <Link href='http://localhost:3000/home2'> <li className=" hover:text-black hover:text-lg   cursor-pointer">Home Page 2</li></Link>
         
         <Link href='http://localhost:3000/listing'> <li className=" hover:text-black hover:text-lg   cursor-pointer">Product Listing </li></Link>
        <Link href='/listing2'>  <li className=" hover:text-black hover:text-lg   cursor-pointer">More Product </li></Link>


          </ul>


        </div>
      </div>
    </div>
  );
};

export default Navbar;

