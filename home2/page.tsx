import Image from 'next/image'
import React from 'react'
import Hero from '@/app/accests/Hero Blocks.png'
import Parent from '@/app/accests/Parent.png'
import Two from  '@/app/accests/two.png'
import Three from '@/app/accests/three.png'
import Four from '@/app/accests/four.png'
import email from '@/app/accests/Email sign-up.png'
import block from '@/app/accests/Image Block.png'
import { PiVanLight } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosLaptop } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
const home = () => {
  return (
    <>
<div className='max-w-[1440px] h-[704px]'> <Image src={Hero} width={1440} height={704} alt='image'></Image></div>

{/* ///////////////////// div 2/////////////////////////////////////// */}


<div className='max-w-[1440px] h-[476px] bg-white'>
{/* <div className='text-center '><h3 className=''>What makes our brand different</h3></div> */}
<div className='w-[366px] h-[34px] mt-[60px] ml-[529px] '><h3 className='font-normal text-[24px] leading-[33.6px] text-[#2A254B] hover:scale-125 duration-1000'>What makes our brand different</h3></div>

<div className='mt-[115px] ml-[125px] gap-8 flex '>

    <div className='w-[270px] h-[105px] gap-[8px] mt-10  shadow-xl '>
    <PiVanLight className='animate-bounce duration-75 text-2xl ml-10' />
       <div className='w-[199px] h-[28px] ' > <h4 className='font-normal text-[13px] leading-[28px]'>Next day as standard</h4></div>
    <div className='w-[270px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>Order before 3pm and get your order
    the next day as standard</p></div>
    
    </div>

    
    <div className='w-[270px] h-[105px] gap-[8px] mt-10  shadow-xl'>
    <CiCircleCheck  className='animate-bounce duration-5000 text-2xl ' />
       <div className='w-[199px] h-[28px] ' > <h4 className='font-normal text-[13px] leading-[28px]'>Made by true artisans</h4></div>
    <div className='w-[270px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>Handmade crafted goods made with
    real passion and craftmanship</p></div>
    
    </div>
 

   
    <div className='w-[270px] h-[105px] gap-[8px] mt-10  shadow-xl'>
    <IoIosLaptop  className='animate-bounce duration-5000 text-2xl' />
       <div className='w-[199px] h-[28px] ' > <h4 className='font-normal text-[13px] leading-[28px]'>Unbeatable prices</h4></div>
    <div className='w-[270px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>Order before 3pm and get your order
    the next day as standard</p></div>
    
    </div>

    
    <div className='w-[270px] h-[105px] gap-[8px] mt-10  shadow-xl'>
    <LuSprout  className='animate-bounce duration-75 text-2xl' />
       <div className='w-[199px] h-[28px]' > <h4 className='font-normal text-[13px] leading-[28px]'>Recycled packaging</h4></div>
    <div className='w-[270px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>We use 100% recycled packaging to ensure our footprint is manageable</p></div>
    
    </div>
</div>
</div>

 {/* ////////////////////////////div 3 ////////////////////////////// */}

<div className='w-[1440px] h-[634px] bg-white'>
<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 ml-6'>

<div className='w-[305px] h-[462px]   gap-[24px]  shadow-lg rounded-md'>
<div className='overflow-hidden duration-1000'>  <Image className='hover:scale-125' src={Parent} width={305} height={375} alt='Parent2'></Image></div>
    <div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>The Dandy chair </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '>£250</p></div>
    </div>
</div>

<div className='w-[305px] h-[462px]   gap-[24px]  shadow-lg rounded-md'>
<div className='overflow-hidden duration-1000'>   <Image className='hover:scale-125' src={Two} width={305} height={375} alt='Parent2'></Image></div>
    <div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>Rustic Vase Set </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '>£155</p></div>
    </div>
</div>

<div className='w-[305] h-[462px]   gap-[24px]  shadow-lg rounded-md'>
<div className='overflow-hidden duration-1000'> <Image className='hover:scale-125' src={Three} width={305} height={375} alt='Parent2'></Image></div>
<div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>The Silky Vase </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '>£125</p></div>
    </div>

</div>

<div className='w-[305px] h-[462px]   gap-[24px]  shadow-lg rounded-md'>
<div className='overflow-hidden duration-1000'> <Image className='hover:scale-125' src={Four} width={305} height={375} alt='Parent2'></Image></div>
<div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>The Lucy Lamp </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '></p></div>
    </div>
</div>

</div> 


<div className='w-[170px] h-[56px] mt-[75px] mx-auto pt-[16px] pr-[32px] pb-[16px] pl-[32px]   gap-[10px]'>
                    <button className='w-[200px] h-[40px] top-[2658px] left-[680px] font-bold text-[16px] leading-6 border-[1px]  text-black'>View collection</button>
            </div>

</div>



<div className='w-[1420px] h-[598px] bg-white sm:w-[500px] md:w-[800px] lg:w-[1420px] grid md:grid-cols-1 lg:grid-cols-2 mt-10 '>

<div className='max-w-[634px] h-[478px]  bg-[#2A254B] ml-14  '>
<div className='w-[495px] h-[99px] '>
    <div className='w-[495px h-[99px] ml-[64px] '>
   <p className='font-normal text-[32px] mt-16 text-[#FFFFFF] leading-[39.36px] hover:scale-125 overflow-hidden duration-1000 '>It started with a small idea</p>
   <p className='text-[15px]  leading-[22.3px] mt-7 font-normal text-[#ffffff]  hover:scale-125 overflow-hidden duration-1000'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>

   <div className='w-[170px] h-[56px] mt-[195px] ml-[-23px] pt-[16px] pr-[32px] pb-[16px] pl-[32px]   gap-[10px]'>
                    <button className='w-[200px] h-[40px] top-[2658px] left-[680px] font-bold text-[16px] leading-6 border-[1px] bg-[#F9F9F926]  text-[#ffffff]'>View collection</button>
            </div>

</div>

</div>
</div>
<div className='max-w-[630px] h-[478px] ml-7 ' >
   <Image src={block} width={630} height={478} alt='home'></Image>
</div>



</div>



















<div className=' w-[1440px] h-[444px]   '>
    <Image src={email} width={1440} height={444} alt='email'></Image>
</div>

    </>
  )
}

export default home
