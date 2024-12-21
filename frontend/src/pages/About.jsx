import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
       </div>

       <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc at ipsum maximus tempus vel vel odio. Fusce sit amet orci vestibulum, aliquam metus vitae, vestibulum libero. Curabitur et erat sit amet elit dictum lacinia. Pellentesque malesuada nisi id neque auctor, sit amet egestas ligula vehicula</p>
            <p>Donec euismod ligula sed erat efficitur, non feugiat neque tincidunt. Sed euismod, magna ac porttitor vehicula, lorem nunc hendrerit purus, id maximus turpis ante ac ante.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>

       </div>
       <div className='text-4xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
       </div>

       <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dui risus. In hac habitasse platea dictumst. Nunc viverra elit nec risus cursus, non tempus purus auctor</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dui risus. In hac habitasse platea dictumst. Nunc viverra elit nec risus cursus, non tempus purus auctor</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dui risus. In hac habitasse platea dictumst. Nunc viverra elit nec risus cursus, non tempus purus auctor</p>
            </div>

       </div>

       <NewsletterBox/>

    </div>
  )
}

export default About