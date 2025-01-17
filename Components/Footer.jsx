import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex justify-around flex-col sm:gap-0 sm:flex-row bg-black py-5 items-center'>
            <Image src={assets.logolight} alt='' width={120} />
            <p className='text-sm text-white'>All right reserved. Copyright @thoughtcanvas</p>
            <div className='flex'>
                <Image src={assets.facebook_icon} alt='' width={40}/>
                <Image src={assets.twitter_icon} alt='' width={40}/>
                <Image src={assets.googleplus_icon} alt='' width={40}/>
            </div>
        </div>
    </div>
  )
}

export default Footer