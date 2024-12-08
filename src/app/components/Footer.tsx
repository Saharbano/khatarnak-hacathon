import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <div className='bg-[#2A254B] pt-12 mt-[100px]'>
        <div className='max-w-screen-xl mx-auto px-6 lg:px-20 py-12'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            
            {/* Menu Section */}
            <div>
              <p className='text-[16px] font-medium text-[#FAFAFA]'>Menu</p>
              <p className='text-[14px] text-[#FAFAFA] mt-1'>New arrivals</p>
              <p className='text-[14px] text-[#FAFAFA] mt-2'>Best sellers</p>
              <p className='text-[14px] text-[#FAFAFA] mt-2'>Recently viewed</p>
              <p className='text-[14px] text-[#FAFAFA] mt-2'>Popular this week</p>
              <p className='text-[14px] text-[#FAFAFA] mt-2'>All products</p>
            </div>

            {/* Categories Section */}
            <div>
              <p className='text-[16px] font-medium text-[#FAFAFA]'>Categories</p>
              <p className='text-[14px] text-[#FAFAFA] mt-1'>Crockery</p>
              <p className='text-[14px] text-[#FAFAFA] mt-2'>Furniture</p>
              <p className='text-[14px] text-[#FAFAFA] mt-2'>Homeware</p>
              <p className='text-[14px] text-[#FAFAFA] mt-2'>Plant pots</p>
              <p className='text-[14px] text-[#FAFAFA] mt-2'>Chairs</p>
            </div>

            {/* Our Company Section */}
            <div>
              <p className='text-[16px] font-medium text-[#FAFAFA]'>Our company</p>
              <p className='text-[14px] text-[#FAFAFA] mt-1'>About us</p>
              <p className='text-[14px] text-[#FAFAFA] mt-2'>Vacancies</p>
              <p className='text-[14px] text-[#FAFAFA] mt-2'>Contact us</p>
              <p className='text-[14px] text-[#FAFAFA] mt-2'>Privacy</p>
              <p className='text-[14px] text-[#FAFAFA] mt-2'>Returns policy</p>
            </div>

            {/* Newsletter Section */}
            <div>
              <p className='text-[16px] font-medium text-[#FAFAFA]'>Join our mailing list</p>
              <div className='mt-4'>
                {/* Updated image path */}
                <Image src="/assets/Text input.png" width={627} height={56} alt='Email Input' />
              </div>
            </div>

          </div>
        </div>

        <div className='w-full border-t border-opacity-40 bg-[#4E4D93]'></div>
        <div className='text-center py-4'>
          <p className='text-[#ffffff] text-[14px] leading-[18px]'>Copyright 2022 Avion LTD</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
