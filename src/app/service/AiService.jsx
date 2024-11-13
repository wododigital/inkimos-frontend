import React from 'react'
import Circle1 from '../../assets/Group 28.png'
import Circle2 from '../../assets/custom.png'
const AiService = () => {
  return (
<>
<section id='heading' className='bg-black'>
<div className='bg-black min-h-[450px] w-full relative'>
<img src={Circle1} alt="Circle1 image" className='absolute right-0 w-[200px] h-[450px]'/>
<img src={Circle2} alt="Circle2 image" className='absolute  '/>
</div>
</section>
</>  )
}

export default AiService