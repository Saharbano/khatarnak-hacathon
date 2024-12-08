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
