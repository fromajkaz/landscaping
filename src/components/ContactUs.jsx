import React from 'react'
import { motion } from 'framer-motion'
import FormContactUs from './FormContactUs'
import ArrowImage from '../assets/image/arrow-black.svg'
import { Element } from 'react-scroll'



const ContactUs = () => {
  return (
    <Element name='contactus'>
    <div className='container mx-auto px-8 py-14  font-montserrat flex items-center justify-center flex-col '>
      <div>
      <motion.h1 
        initial={{opacity:0, y: -100}}
        animate={{opacity:1, y: 0}}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
      className='max-w-6xl   font-bold leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 text-black capitalize'>Оставьте Заявку и мы  <span className='text-customGreen'>с Вами Свяжемся </span></motion.h1>
           
           <motion.p
     initial={{opacity:0, x: -100}}
     animate={{opacity:1, x: 0}}
     transition={{
       type: "spring",
       stiffness: 100,
       damping: 10,
       delay: .4,
     }}
    className='w-full ld:w-1/2 xl:w-1/2 text-sm md:text-base xl:text-base text-black mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci inventore voluptatem laboriosam. 
      Veritatis quia rem magnam, voluptatibus et sapiente doloribus.</motion.p>

      </div>

     <FormContactUs/>
    </div>
    </Element>
    
  )
}

export default ContactUs
