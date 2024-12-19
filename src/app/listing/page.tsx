<<<<<<< HEAD
import React from 'react'
import Image from 'next/image'
import Page2 from '@/app/accests/2nd page.png'

const page = () => {
  return (
    <div>
      <div className='w-[1440px] h-[209px]'>
        <Image src={Page2} width={1440} height={209} alt='product '></Image>
      </div>
      <div className='w-[1440px] h-[64px] bg-[#e09595]'>
        <div className='w-[557px] h-[48px] top-[8px] left-[24px] gap-[12px]'>
          <div className='w-[137px] h-[48px] pt-[12px] pr-[24px] p'>

          </div>

        </div>

      </div>
    </div>
  )
}

export default page
=======
import React from 'react'
import Image from 'next/image'
import Page2 from '@/app/accests/2nd page.png'
import Down from '@/app/accests/Caret--down.png'
import Parent from '@/app/accests/Parent.png'
import Two from  '@/app/accests/two.png'
import Three from '@/app/accests/three.png'
import Four from '@/app/accests/four.png'
import Parentsec1  from '@/app/accests/Parentsec1.png'
import Parentsec2 from '@/app/accests/Parentsec2.png'
import Parentsec3 from'@/app/accests/Parentsec3.png'
import Parentsec4 from '@/app/accests/Parentsec4.png'


const page = () => {
  return (
    <div>
     
   <div className='  sm:w-[390px] md:w-[750px] lg:w-[1440px] sm:h-[146px] md:h-[190px] lg:h-[209px]  '>
        <Image src={Page2} width={1440} height={209} alt='product '></Image>
      </div>
      <div className='sm:w-[390px] md:w-[750px] lg:w-[1440px] sm:h-[96px] md:h-[85px] lg:h-[64px]  bg-[#ffffff] '>
        <div className='w-[557px] h-[48px]  ml-[24px] mt-[8px] gap-[12px] bg-[#ffffff]'>
        
        <div className='flex w-[237px] h-[48px]  ml-[1179px] mt-[8px] gap-[30px] bg-[#ffffff]'>
          <div className='w-[67px] h-[21px]'>
           <p className='font-normal mt-[10px] text-[10px] leading-[21px] text-[#2A254B] '>Sorting by:</p>
           </div>
           <div className='flex w-[154px] h-[48px]'>
          <p className='w-[82px] h-[24px] font-normal mt-[8px]  text-[12px] leading-[21px] text-[#2A254B] ' > Date added 
           </p>
           <Image  src={Down} width={16} height={16} alt='down arrow'></Image>
          </div>
          </div>
      
</div>
</div>


{/* ////////////////////////////////////section 2///////////////////////////// */}

<div className='  h-[510p] text-[#FFFFFF] '>

<div className='  ml-8 grid lg:grid-cols-4 md:grid-cols-3 gap-[5px] px-[20px] '>
<div className='shadow-lg rounded-md'>
<div className='overflow-hidden duration-1000'>  <Image  className='hover:scale-125' src={Parent} width={305} height={375} alt='product'></Image></div>

<h4 className='p-3  text-[#2A254B]'>The Dandy chair</h4>
<p className='text-[#2A254B]'>£250</p>
</div>
<div className='shadow-lg rounded-md'>
<div className='overflow-hidden duration-1000'> <Image  className='hover:scale-125' src={Two} width={305} height={375} alt='product'></Image></div>
  <h4 className='text-[#2A254B] py-2' >Rustic Vase Set</h4>
<p className='p-3 text-[#2A254B]'>£155</p>
  </div>

  <div className='shadow-lg rounded-md'>
  <div className='overflow-hidden duration-1000'>  <Image  className='hover:scale-125' src={Three} width={305} height={375} alt='product'></Image></div>
  <h4 className=' text-[#2A254B] p-3'>The Silky Vase</h4>
<p className='p-3 text-[#2A254B]'>£125</p>
  </div>

  <div className='shadow-lg rounded-md'>
  <div className='overflow-hidden duration-1000'> <Image  className='hover:scale-125' src={Four} width={305} height={375} alt='product'></Image></div>
  <h4 className=' text-[#2A254B] py-3'>The Lucy Lamp</h4>
<p className='p-3 text-[#2A254B]'>£399</p>

  </div>
  </div>



</div>
{/* //////////////////////////////////////// section 3///////////////////////////////// */}


<div className=' my-8 h-[510p] text-[#FFFFFF] '>

<div className='  ml-8 grid lg:grid-cols-4 md:grid-cols-3 gap-[5px] px-[20px] '>
<div className='shadow-lg rounded-md'>
<div className='overflow-hidden duration-1000'>  <Image className='hover:scale-125' src={Parentsec1} width={305} height={375} alt='product'></Image></div>

<h4 className='p-3  text-[#2A254B]'>The Dandy chair</h4>
<p className='text-[#2A254B]'>£250</p>
</div>
<div className='shadow-lg rounded-md'>
<div className='overflow-hidden duration-1000'>  <Image className='hover:scale-125' src={Parentsec2} width={305} height={375} alt='product'></Image></div>
  <h4 className='text-[#2A254B] py-2' >Rustic Vase Set</h4>
<p className='p-3 text-[#2A254B]'>£155</p>
  </div>

  <div className='shadow-lg rounded-md'>
  <div className='overflow-hidden duration-1000'>  <Image className='hover:scale-125' src={Parentsec3} width={305} height={375} alt='product'></Image></div>
  <h4 className=' text-[#2A254B] p-3'>The Silky Vase</h4>
<p className='p-3 text-[#2A254B]'>£125</p>
  </div>

  <div className='shadow-lg rounded-md'>
  <div className='overflow-hidden duration-1000'>   <Image className='hover:scale-125' src={Parentsec4} width={305} height={375} alt='product'></Image></div>
  <h4 className=' text-[#2A254B] py-3'>The Lucy Lamp</h4>
<p className='p-3 text-[#2A254B]'>£399</p>

  </div>
  </div>



</div>





{/* //////////////////////////////////////////section 4///////////////////////////////////////////// */}


<div className='  h-[510p] text-[#FFFFFF] '>

<div className='  ml-8 grid lg:grid-cols-4 md:grid-cols-3 gap-[5px] px-[20px]'>
<div>
  <Image src={Parent} width={305} height={375} alt='product'></Image>

<h4 className='p-3  text-[#2A254B]'>The Dandy chair</h4>
<p className='text-[#2A254B]'>£250</p>
</div>
<div>
  <Image src={Two} width={305} height={375} alt='product'></Image>
  <h4 className='text-[#2A254B] py-2' >Rustic Vase Set</h4>
<p className='p-3 text-[#2A254B]'>£155</p>
  </div>

  <div>
  <Image src={Three} width={305} height={375} alt='product'></Image>
  <h4 className=' text-[#2A254B] p-3'>The Silky Vase</h4>
<p className='p-3 text-[#2A254B]'>£125</p>
  </div>

  <div>
  <Image src={Four} width={305} height={375} alt='product'></Image>
  <h4 className=' text-[#2A254B] py-3'>The Lucy Lamp</h4>
<p className='p-3 text-[#2A254B]'>£399</p>

  </div>
  </div>



</div>

























</div>


    
  )
}

export default page
>>>>>>> 681e10b (update)
