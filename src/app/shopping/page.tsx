
import React from 'react'
import Image from 'next/image'
import Product from '@/app/accests/Product Image.png'
import Prod from '@/app/accests/ProdImage.png'

const page = () => {
  return (
    <div>
   <div className='mt-[200px]'>
     <div className='w-[328px] h-[50px] mt-[110px] ml-[144px]'><h1 className='font-normal text-[36px] leading-[2.4]'>Your shopping cart</h1></div>

     




 {/* //////////////////////////////////////////////// main div 2 /////////////////////////////////////////// */}
             <div className='w-[1170px] h-[840px] mt-[80px] ml-[135px] gap-[80px]'>

       {/* //////////////////////////////////////// DIV 2A  ////////////////////////////////////// */}

      <div className='w-[1170px] h-[436px] gap-[24px]'>
 {/* ///////////////////////////////////////// DIV 2B ////////////////////////////////////////////// */}

     <div className='w-[1170px] h-[356px] gap-[40px]'>
       

       <div className='w-[1170px] h-[72px] rounded-md '>
       <div className=' flex w-[1091px] h-[24px] mt-[24px] ml-[40px] gap-[248px]'>
        <p className='w-[63px] h-[24px] font-normal text-[16px] leading-6 text-[#000000]'> Product</p>
       
        <p className='w-[69px] h-[24px]  ml-[320px]  font-normal text-[16px] leading-6 text-[#000000]'> Quantity</p>
        <p className='w-[68px] h-[24px] font-normal text-[16px] leading-6 text-[#000000]'> Subtotal</p>
       </div>
         {/* ///////////////////////////////// main div 3 ////////////////////// */}
       <div className='w-[1170px] h-[102px] rounded-md mt-[60px] ml-[30px]'>
        <div className='flex w-[309px] h-[134px] mt-[214] ml-[188px]gap-[21px]  '>
 <Image src={Product} width={109} height={134} alt='product'></Image>
  
       <div className='w-[179px] h-[110px] gap-[8px] '>
        <h4 className='w-[150px] h-[28px] ml-5 font-normal text-[20px] leading-[28px] text-[#2A254B]'>Graystone vase</h4>
<p className='w-[179px] h-[42px] mt-5 ml-4 text-[#2A254B] font-normal text-[14px] leading-[25px]'>A timeless ceramic vase with 
a tri color grey glaze.</p>
<p className='w-[29px] h-[24px] mt-5 ml-4 text-[#2A254B] font-normal text-[14px] leading-[21px]'>£85</p>

        <div className='w-[122px] h-[46px] mt-[-150px] ml-[538px] pt-[12px] pr-[16px] pb-[12px] pl-[16px]'><p className='w-[6px] h-[22px] font-normal text-[16px] leading-[21px]'>1</p></div>
<div className='w-[33px] h-[27px] mt-[-35px] ml-[870px] font-normal text-[18px] leading-[27px]'>£85</div>
       </div>
   
    
    
       <div className='w-[1170px] h-[356px] gap-[40px]'>
       

       <div className='w-[1170px] h-[72px] rounded-md '>
       <div className=' flex w-[1091px] h-[24px] mt-[24px] ml-[40px] gap-[248px]'>
        <p className='w-[63px] h-[24px] font-normal text-[16px] leading-6 text-[#000000]'> Product</p>
       
        <p className='w-[69px] h-[24px]  ml-[320px]  font-normal text-[16px] leading-6 text-[#000000]'> Quantity</p>
        <p className='w-[68px] h-[24px] font-normal text-[16px] leading-6 text-[#000000]'> Subtotal</p>
       </div>
         {/* ///////////////////////////////// main div 3 ////////////////////// */}
       <div className='w-[1170px] h-[102px] rounded-md mt-[130px] ml-[-290px]'>
        <div className='flex w-[309px] h-[134px] mt-[214] ml-[188px]gap-[21px]  '>
 <Image src={Prod} width={109} height={134} alt='product'></Image>
  
       <div className='w-[179px] h-[110px] gap-[8px] '>
        <h4 className='w-[150px] h-[28px] ml-5 font-normal text-[20px] leading-[28px] text-[#2A254B]'>Basic white vase</h4>
<p className='w-[179px] h-[42px] mt-7 ml-4 text-[#2A254B] font-normal text-[14px] leading-[25px]'>Beautiful and simple this is
one for the classics</p>
<p className='w-[29px] h-[24px] mt-5 ml-4 text-[#2A254B] font-normal text-[14px] leading-[21px]'>£85</p>

        <div className='w-[122px] h-[46px] mt-[-150px] ml-[538px] pt-[12px] pr-[16px] pb-[12px] pl-[16px]'><p className='w-[6px] h-[22px] font-normal text-[16px] leading-[21px]'>1</p></div>
<div className='w-[33px] h-[27px] mt-[-35px] ml-[870px] font-normal text-[18px] leading-[27px]'>£125</div>
       </div>
   
    
    <div className='w-[282px] h-[67px] mt-[300px] ml-[970] gap-[12px] '>
        <div className='w-[150px] h-[34px] gap-[16px]'>
            <div className='w-[80px] h-[28px] ml-[624px] font-normal text-[20px] leading-[28px] '>Subtotal</div>
            <h3 className='w-[54px] h-[34px] ml-[720px] mt-[-30px] font-normal text-[24px] leading-[33.6px] text-[#2A254B]'>£210</h3>
        <p className='w-[282px] h-[21px] font-normal text-[11px]  ml-[532px] leading-[21px] '>Taxes and shipping are calculated at checkout</p>
        </div>
        <button className='w-[172px] h-[56px] mt-[45px] ml-[600px] pt-[16px] pr-[32px]pb-[16px] pl-[32px] bg-[#2A254B] gap-[] 10px'>
            <p className='w-[120px] h-[24px] mt-[50] font-normal text-[16px] leading-[20px] text-[#FFFFFF]'>Go to checkout</p>
        </button>
    </div>
    
    
    
    
    
    </div>
    </div>
    </div>
    </div>
    </div>
</div>




</div>




</div>
</div>
</div>    
    </div>
    </div>
    
    
  )
}

export default page







