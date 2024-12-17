import React from 'react'
import Image from 'next/image'
import left from '@/app/accests/Image Left.png'
import plus from '@/app/accests/+.png'
import Parent from '@/app/accests/Parent.png'
import Two from  '@/app/accests/two.png'
import Three from '@/app/accests/three.png'
import Four from '@/app/accests/four.png'
import { PiVanLight } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosLaptop } from "react-icons/io";
import { LuSprout } from "react-icons/lu";

const prolisting2 = () => {
  return (
    <div>
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
    <p className='font-normal text-16px leadiing-[19.68px] ' >Description</p>
    
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
    <div className='w-[241px] h-[51px]  gap-[57px] py-4 '>
    <ul className='flex justify-between'>
        <li>Height</li>
        <li>Width</li>
        <li>Depth</li>
    </ul>
    <ul className='flex justify-between py-2'>
        <li>110cm</li>
        <li>75cm</li>
        <li>50cm</li>
    </ul>
</div>
</div>
</div>

<div className='w-[602px] h-[115px] flex justify-around '>

<div className='w-[209px] h-[46px]  ml-[-100px] flex justify-around  '>
<p className=''>Amount:</p>
<p className=''>1</p>
<Image src={plus} width={11} height={5} alt='plus'></Image>
</div>
<div className='bg-[#2A254B] text-[#FFFFFF] w-[143px] h-[53px]'><button className='py-3 px-6'>Add to card</button></div>
</div>

</div>


</div>
</div>


{/* //////////////////section 2///////////////// */}
<div className='w-[1420px] h-[761px] '>

    <div className='w-[274px] h-[39px] mt-[5px] ml-[72px] '>
        <p className='font-normal text-[30px] leading-[39.36px] '>You might also like</p>
    </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-[-100px] '>

    <div className='w-[305px] h-[462px] mt-[152px] ml-[80px] gap-[24px]'>
    <Image src={Parent} width={305} height={375} alt='Parent'></Image>
    <div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>The Dandy chair </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '>£250</p></div>
    </div>
</div>
<div className='w-[305px] h-[462px] mt-[152px] ml-[50px] gap-[24px]'>
    <Image src={Two} width={305} height={375} alt='Parent2'></Image>
    <div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>Rustic Vase Set </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '>£155</p></div>
    </div>
</div>
<div className='w-[305] h-[462px] mt-[152px] ml-[20px] gap-[24px]'>
<Image src={Three} width={305} height={375} alt='Parent2'></Image>
<div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>The Silky Vase </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '>£125</p></div>
    </div>
</div>
<div className='w-[305px] h-[462px] mt-[152px]   gap-[24px]'>
<Image src={Four} width={305} height={375} alt='Parent2'></Image>
<div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>The Lucy Lamp </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '></p></div>
    </div>
</div>
<div className='w-[170px] h-[56px] mt-[65px] ml-[635px]' >
  <button>View collection</button>
  </div>
</div>

</div>


{/* //////////////////section 3//////////////// */}

<div className='max-w-[1420px] h-[355px] bg-white'>

<div className='w-[366px] h-[34px] mt-[-30px] ml-[529px] '><h3 className='font-normal text-[24px] leading-[33.6px] text-[#2A254B] '>What makes our brand different</h3></div>

<div className='mt-[115px] ml-[125px] gap-8 flex'>

    <div className='w-[270px] h-[84px] gap-[8px] mt-10 '>
    <PiVanLight className='animate-bounce duration-75 text-2xl ml-10' />
       <div className='w-[199px] h-[28px]' > <h4 className='font-normal text-[13px] leading-[28px]'>Next day as standard</h4></div>
    <div className='w-[270px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>Order before 3pm and get your order
    the next day as standard</p></div>
    
    </div>

    
    <div className='w-[270px] h-[84px] gap-[8px] mt-10'>
    <CiCircleCheck  className='animate-bounce duration-5000 text-2xl ' />
       <div className='w-[199px] h-[28px] ' > <h4 className='font-normal text-[13px] leading-[28px]'>Made by true artisans</h4></div>
    <div className='w-[270px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>Handmade crafted goods made with
    real passion and craftmanship</p></div>
    
    </div>
 

   
    <div className='w-[270px] h-[84px] gap-[8px] mt-10 '>
    <IoIosLaptop  className='animate-bounce duration-5000 text-2xl' />
       <div className='w-[199px] h-[28px] ' > <h4 className='font-normal text-[13px] leading-[28px]'>Unbeatable prices</h4></div>
    <div className='w-[270px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>Order before 3pm and get your order
    the next day as standard</p></div>
    
    </div>

    
    <div className='w-[270px] h-[84px] gap-[8px] mt-10'>
    <LuSprout  className='animate-bounce duration-75 text-2xl' />
       <div className='w-[199px] h-[28px]' > <h4 className='font-normal text-[13px] leading-[28px]'>Recycled packaging</h4></div>
    <div className='w-[270px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>We use 100% recycled packaging to ensure our footprint is manageable</p></div>
    
    </div>
</div>
</div>
{/* /////////////////////section 4///////////////// */}

<div className='w-[1420px] h-[481px] '>
<div className='w-[1237px] h-[364px]  mt-[52px] ml-[93px]'>
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
</div>





    
  )
}

export default prolisting2
