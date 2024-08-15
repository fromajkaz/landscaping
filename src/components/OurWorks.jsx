import React from 'react'
import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'
import ArrowImage from '../assets/image/arrow-black.svg'
import { Element } from 'react-scroll'
import { Link } from 'react-scroll'

const OurWorks = () => {
  return (

    <div>
          <Element name='ourworks'>
        <div className='container mx-auto px-8 py-14  font-montserrat items-center'>
        <motion.h1 
        initial={{opacity:0, y: -100}}
        animate={{opacity:1, y: 0}}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
      className='max-w-6xl font-bold leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 text-black capitalize'>познакомьтесь с нашими - <span className='text-customGreen'> последними работами </span></motion.h1>
           
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
        <div>
          <ImageCarousel/>
        </div>
        </Element>
        <Link to="contactus" smooth={true} duration={500}>
        
        <motion.div
                initial={{opacity:0, y:   100}}
                animate={{opacity:1, y: 0}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
              className="flex items-center justify-center my-14  -ml-10">
                <a href="/"><img src={ArrowImage} width={40} height={40}  alt="" /></a>
        </motion.div>
        </Link>
    </div>

  )
}

export default OurWorks
