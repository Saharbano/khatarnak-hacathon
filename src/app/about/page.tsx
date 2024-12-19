import React from 'react'
import Image from 'next/image'
import block from '@/app/accests/Image Block.png'
import left from '@/app/accests/Image Left.png'
import { PiVanLight } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosLaptop } from "react-icons/io";
import { LuSprout } from "react-icons/lu";



const about = () => {
  return (
    <div>
      <div className='w-[1420px] h-[277px] '>
      <div className='w-[704px] h-[100px] mt-[88px] ml-[126px]'>
        <p className='font-normal text-[36px] leading-[50.4px]'>A brand built on the love of craftmanship,
        quality and outstanding customer service</p>
</div>
 
<div className='w-[210px] h-[56px] mt-[-88px] ml-[1100px] py-[16px] px-[32px] bg-[#F9F9F9]'>
      <p className='font-normal text-[16px] leading-[24.4px]'>View our products</p>
      </div>
      </div>


<div className='w-[1420px] h-[598px] bg-white sm:w-[500px] md:w-[800px] lg:w-[1420px] grid md:grid-cols-1 lg:grid-cols-2 mt-10 '>

<div className='max-w-[634px] h-[478px]  bg-[#2A254B] ml-14  '>
<div className='w-[495px] h-[99px] '>
    <div className='w-[495px h-[99px] ml-[64px] '>
   <p className='font-normal text-[32px] mt-16 text-[#FFFFFF] leading-[39.36px] hover:scale-125 overflow-hidden duration-1000 '>It started with a small idea</p>
   <p className='text-[15px]  leading-[22.3px] mt-7 font-normal text-[#ffffff]  hover:scale-125 overflow-hidden duration-1000'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>



</div>

</div>
</div>
<div className='max-w-[630px] h-[478px] ml-7 ' >
   <Image src={block} width={630} height={478} alt='home'></Image>
</div>



</div>









<div className='w-[1420px] h-[759px] bg-white grid grid-cols-2 mt-10'>

<div className='max-w-[721px] h-[759px]   '>
<Image src={left} width={630} height={478} alt='home'></Image>
</div>
<div className='max-w-[602px] h-[597px] mt-[40px] ' >
     
<div className='w-[281px] h-[69px] mt-[40px] ml-[40px] text-[#2A254B] gap-[13px] '>

<div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>The Dandy chair </h4>
<div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '>£250</p></div>
</div>

<div className='w-[602px] h-[251px] mt-[43px]  text-[#2A254B] gap-[16px] '>
   
    
    <p className='font-normal text-16px leadiing-[23.6px] py-4' >A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
    <ul>
        <li>Premium material</li>
        <li>Handmade upholstery</li>
        <li>Quality timeless classic</li> 


    </ul>



</div>

<div className='w-[602px] h-[134px] '>
<div className='w-[241px] h-[99px] '>
    <p>Dimensions</p>
 
</div>
</div>



<div className='text-black w-[143px] h-[53px] hover:bg-slate-400 hover:rounded-sm '><button className=' px-6 py-3'>Get in touch</button></div>

</div>


</div>
</div>


<div className='w-[1440px] h-[355px] bg-white '>
    <div className='w-[366px] h-[34px] mt-[60px] ml-[529px] '><h3 className='font-normal text-[24px] leading-[33.6px] text-[#2A254B] hover:scale-125 duration-1000 '>What makes our brand different</h3></div>
</div>
 <div className='w-[270px] h-[124px] mt-[-230px] ml-[86px] gap-[16px] bg-white shadow-xl '>
<PiVanLight className='animate-bounce duration-75 text-2xl ' />
    <div className='w-[270px] h-[84px] gap-[8px]  '>
       <div className='w-[199px] h-[28px]' > <h4 className='font-normal text-[13px] leading-[28px]'>Next day as standard</h4></div>
    <div className='w-[270px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>Order before 3pm and get your order
    the next day as standard</p></div>
    </div>
 </div>
 <div className='w-[266px] h-[124px] mt-[-130px] ml-[415px] gap-[16px] bg-white shadow-xl '>
 <CiCircleCheck  className='animate-bounce duration-75 text-2xl' />
    <div className='w-[205px] h-[28px] gap-[8px]'>
       <div className='w-[199px] h-[28px]' > <h4 className='font-normal text-[13px] leading-[28px]'>Made by true artisans</h4></div>
    <div className='w-[266px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>Handmade crafted goods made with
    real passion and craftmanship</p></div>
    </div>
 </div>
 <div className='w-[235px] h-[124px] mt-[-130px] ml-[739px] gap-[16px]  bg-white shadow-xl '>
 <IoIosLaptop  className='animate-bounce duration-5000 text-2xl' />
    <div className='w-[235px] h-[84px] gap-[8px]'>
       <div className='w-[199px] h-[28px]' > <h4 className='font-normal text-[13px] leading-[28px]'>Unbeatable prices</h4></div>
    <div className='w-[270px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>Order before 3pm and get your order
    the next day as standard</p></div>
    </div>
 </div>
 <div className='w-[265px] h-[124px] mt-[-130px] ml-[1065px] gap-[13px]  bg-white shadow-xl '>
  <LuSprout  className='animate-bounce duration-75 text-2xl' />
    <div className='w-[265px] h-[87px] gap-[11px]'>
       <div className='w-[198px] h-[28px]' > <h4 className='font-normal text-[11px] leading-[28px]'>Recycled packaging</h4></div>
    <div className='w-[265px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>We use 100% recycled packaging to ensure our footprint is manageable</p></div>
    </div>

    <div className='w-[170px] h-[56px] mt-[690px] ml-[-550px]  pt-[16px] pr-[32px] pb-[16px] pl-[32px]   gap-[10px]'>
                    <button className='w-[200px] h-[40px] top-[2658px] left-[680px] font-bold text-[16px] leading-6 border-[1px]  text-black'>View collection</button>
            </div>
 </div>


 <div className='w-[1420px] h-[481px] '>
<div className='w-[1237px] h-[364px]  mt-[92px] ml-[93px]'>
<div className='w-[571px] h-[114px]  mt-[68px] ml-[351px]'>
   <h1 className='font-normal text-[36px] leading-[50.4px] items-center text-[#2A254B]'>Join the club and get the benefits</h1>
    <p className='font-normal text-[16px] leading-[40.4px] ml-12 items-center text-[#2A254B]'>Sign up for our newsletter and receive exclusive offers on new</p>
    <p className='font-normal text-[16px] leading-[35.4px] ml-32 items-center text-[#2A254B]'>  ranges, sales, pop up stores and more</p>
    </div>


<div className='w-[472px] h-[56px] mx-auto mt-[154px] flex '>
    <input className='w-[354px] h-[56px] ' type="text " placeholder='your@email.com' />
    <div className='bg-[#2A254B] text-[#FFFFFF] w-[143px] h-[53px]'><button className='py-3 px-8'>Sign up</button></div>
    </div>
</div>



</div>


























     
      <div className='w-[] h-[] mt-[] ml-[]'></div>
      <div className='w-[] h-[] mt-[] ml-[]'></div>
      <div className='w-[] h-[] mt-[] ml-[]'></div>
    </div>
  )
}

export default about
