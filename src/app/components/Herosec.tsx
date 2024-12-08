import React from 'react'
import Image from 'next/image'
import Right from '@/app/accests/Right Image.png'
import Delivery from '@/app/accests/Delivery.png'
import Outline from '@/app/accests/Checkmark--outline.png'
import Pur from '@/app/accests/Purchase.png'
import Sprout from '@/app/accests/Sprout.png'
import Parent from '@/app/accests/Parent.png'
import Two from  '@/app/accests/two.png'
import Three from '@/app/accests/three.png'
import Four from '@/app/accests/four.png'
import Large from '@/app/accests/Large.png'
import Chair from '@/app/accests/chair.png'
import Image1 from '@/app/accests/Image.png'

const Herosec = () => {
  return (
    <div>
      {/* ////////////////////// main div 1//////////////////////// */}

      <div className='w-[1280px] h-[584px] mt-[60px] ml-[80px] bg-[#2A254B]'>
        
        <div className='ml-[760px]'> <Image src={Right} width={520} height={584} alt=''></Image> </div>
        <div className='w-[513px] h-[187px]  ml-[60px] gap-[41px]'>
        <h2 className='w-[513px] h-[90px] mt-[-530px] font-normal text-[32px] leading-[1.5] text-[#ffffff]'>The furniture brand for the future,with timeless designs</h2>
        <div className='w-[170px] h-[56px] mt-11 pt-4 pr-8 pb-4 pl-8 gap-[10px] bg-[#F9F9F926]'>
            <button  className='w-[115px] h-[24px] font-normal text-[16px] leading-6 text-[#ffffff]'>View collection</button> 
        </div>
        
        </div>
        <div className='w-[602px] h-[81px] mt-[220px] ml-[60px]'>
            <p className='font-[200px] text-[18px] leading-[27px] text-[#5B5676]'>A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.</p>
        </div>
 </div>
{/* ////////////////// main div 2 //////////////////////////////////////// */}
<div className='w-[1440px] h-[355px] bg-white '>
    <div className='w-[366px] h-[34px] mt-[60px] ml-[529px] '><h3 className='font-normal text-[24px] leading-[33.6px] text-[#2A254B] '>What makes our brand different</h3></div>
</div>
 {/* /////////////////////////////////// main div * 4 ///////////////////////////////////////////// */}

 <div className='w-[270px] h-[124px] mt-[-230px] ml-[86px] gap-[16px] bg-white'>
    <Image src={Delivery}width={14} height={14} alt='Delivery'></Image>
    <div className='w-[270px] h-[84px] gap-[8px]'>
       <div className='w-[199px] h-[28px]' > <h4 className='font-normal text-[13px] leading-[28px]'>Next day as standard</h4></div>
    <div className='w-[270px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>Order before 3pm and get your order
    the next day as standard</p></div>
    </div>
 </div>
 <div className='w-[266px] h-[124px] mt-[-130px] ml-[415px] gap-[16px] bg-white'>
 <Image src={Outline}width={14} height={14} alt='Delivery'></Image>
    <div className='w-[205px] h-[28px] gap-[8px]'>
       <div className='w-[199px] h-[28px]' > <h4 className='font-normal text-[13px] leading-[28px]'>Made by true artisans</h4></div>
    <div className='w-[266px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>Handmade crafted goods made with
    real passion and craftmanship</p></div>
    </div>
 </div>
 <div className='w-[235px] h-[124px] mt-[-130px] ml-[739px] gap-[16px]  bg-white'>
 <Image src={Pur}width={14} height={14} alt='Delivery'></Image>
    <div className='w-[235px] h-[84px] gap-[8px]'>
       <div className='w-[199px] h-[28px]' > <h4 className='font-normal text-[13px] leading-[28px]'>Unbeatable prices</h4></div>
    <div className='w-[270px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>Order before 3pm and get your order
    the next day as standard</p></div>
    </div>
 </div>
 <div className='w-[265px] h-[124px] mt-[-130px] ml-[1065px] gap-[13px]  bg-white'>
 <Image src={Sprout}width={14} height={14} alt='Delivery'></Image>
    <div className='w-[265px] h-[87px] gap-[11px]'>
       <div className='w-[198px] h-[28px]' > <h4 className='font-normal text-[11px] leading-[28px]'>Recycled packaging</h4></div>
    <div className='w-[265px] h-[48px]'><p className='font-normal text-[15px] leading-[24px]'>We use 100% recycled packaging to ensure our footprint is manageable</p></div>
    </div>

    <div className='w-[170px] h-[56px] mt-[690px] ml-[-550px]  pt-[16px] pr-[32px] pb-[16px] pl-[32px]   gap-[10px]'>
                    <button className='w-[200px] h-[40px] top-[2658px] left-[680px] font-bold text-[16px] leading-6 border-[1px]  text-black'>View collection</button>
            </div>
 </div>

{/* //////////////////////////////////main div 5 ////////////////////// */}

<div className='w-[1440px] h-[761px] '>
    <div className='w-[217px] h-[39px] mt-[-490px] ml-[80px] '>
        <p className='font-normal text-[32px] leading-[39.36]'>New ceramics</p>
    </div>
</div>
<div className='flex gap-3 '>
<div className='w-[305px] h-[462px] mt-[-70px] ml-[80px] gap-[24px]'>
    <Image src={Parent} width={305} height={375} alt='Parent'></Image>
    <div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>The Dandy chair </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '>£250</p></div>
    </div>
</div>

<div className='w-[305px] h-[462px] mt-[-70px] ml-[404] gap-[24px]'>
    <Image src={Two} width={305} height={375} alt='Parent2'></Image>
    <div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>Rustic Vase Set </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '>£155</p></div>
    </div>
</div>

<div className='w-[305] h-[462px] mt-[-70px] ml-[330] gap-[24px]'>
<Image src={Three} width={305} height={375} alt='Parent2'></Image>
<div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>The Silky Vase </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '>£125</p></div>
    </div>

</div>

<div className='w-[305px] h-[462px] mt-[-70px]  gap-[24px]'>
<Image src={Four} width={305} height={375} alt='Parent2'></Image>
<div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>The Lucy Lamp </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '></p></div>
    </div>
</div>

</div>

 
{/* //////////////////////// main div 6 /////////////////////// */}
<div className='w-[1440px] h-[744px]  bg-white'>
<div className='w-[1440px] h-[761px] '>
    <div className='w-[330px] h-[45px] mt-[65px] ml-[80px] '>
        <h2 className='font-normal text-[32px] leading-[44.8px]'>Our popular products</h2>
    </div>
</div>
<div className='flex  mt-[-620px] ml-40 '>
<div className='w-[630px] h-[462px] mt-[-70px] ml-[-100px] gap-[24px]'>
    <Image src={Large} width={630} height={375} alt='Parent2'></Image>
    <div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>Rustic Vase Set </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '>£980</p></div>
    </div>
</div>

<div className='w-[305px] h-[462px] mt-[-70px] ml-[10px] gap-[24px]'>
    <Image src={Parent} width={305} height={375} alt='Parent2'></Image>
    <div className='w-[209px] h-[28px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>The Dandy chair </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '>£250</p></div>
    </div>
</div>

<div className='w-[305] h-[462px] mt-[-70px] ml-[10px]  gap-[24px]'>
<Image src={Chair} width={305} height={375} alt='Parent2'></Image>
<div className='w-[156px] h-[63px]  mt-5 gap-[8px]'> <h4 className='font-normal text-[20px] leading-[28px]'>The Dandy chair </h4>
    <div className='w-[44px] h-[26px] mt-3'><p className='font-normal text-[18px] '>£250</p></div>
    </div>
    <div className='w-[170px] h-[56px] mt-[90px] ml-[-450px]  pt-[16px] pr-[32px] pb-[16px] pl-[32px]   gap-[10px]'>
                    <button className='w-[200px] h-[40px] top-[2658px] left-[680px] font-bold text-[16px] leading-6 border-[1px]  text-black'>View collection</button>
            </div>
</div>



</div>
</div>
{/* //////////////////////////// main div 7 /////////////////////////////// */}

<div className='w-[1440px] h-[841]  bg-[#F9F9F9]'>
    

<div className='w-[1273px] h-[364] mt-[120px]  bg-[#ffffff] '>
    
<div className='w-[571px] h-[114] mt-[68px] ml-[451px] gap-4 bg-[#ffffff] '>
    <h1 className='w-[571px] h-[50px] font-normal text-[36px] leading-[50.4px] items-center text-[#2A254B]'>Join the club and get the benefits</h1>
<p className='w-[470px] h-[84px]  mt-6 ml-16 font-normal text-[15px] leading-[24px] items-center text-[#2A254B]'>Sign up for our newsletter and receive exclusive offers on new </p>
<p className='w-[470px] h-[84px]  mt-[-50px] ml-36 font-normal text-[15px] leading-[24px] items-center text-[#2A254B]'> ranges, sales, pop up stores and more</p>

</div>
<div className='w-[472px] h-[56px] mt-[44px] ml-[390px] flex'>
<input className='w-[354px] h-[22px] mt-[17px] ml-[32px] opacity-50 text-[#F9F9F9]' type="text" placeholder='your@email.com' />
<button className='w-[118px] h-[56px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[10px] bg-[#2A254B]'><p className='w-[60px] h-[24px] font-normal text-[16px] leading-[24px] text-[#ffffff]'>Sign up</p></button>
</div>

<div className='w-[1440px] h-[603px] '>

<div className='w-[720px] h-[603px]  bg-[#ffffff]'>
   <div className='mt-[210px] ml-14'>
        <p className='  w-[514px] h-[68px] font-normal text-[24px] leading-[33.6px] text-[#2A254B] '>From a studio in London to a global brand with
        over 400 outlets</p>
        </div>

        <div className='w-[516px] h-[132px] mt-[50px] ml-14'>
            <p className='font-normal  text-[16px] leading-[21.6px]text-[#505977]'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. </p>
            <p className='font-normal text-[16px] leading-[21.6px]text-[#505977] mt-5'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
            <button className='w-[150px] h-[56px] mt-[150px] ml-[44px] pt-[16px] pr-[32px] pb-[16px] pl-[32px]'>
                <p className='w-[96px] h-[24px] font-normal text-[16px] leading-[24px]'>Get in touch</p>
            </button>
         </div>

        
        <div className='w-[720px] h-[603px] mt-[-350px] ml-[700px]'>
    <Image src={Image1} width={720} height={603} alt='image'></Image>
</div>
    </div>


</div>
</div>


</div>


















</div>
  )
}

export default Herosec














































