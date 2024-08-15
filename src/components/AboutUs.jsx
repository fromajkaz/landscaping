import React from 'react'
import BgAbout from '../assets/image/bg-caring.jpg'
import PercentageImage from "../assets/image/percentage.svg"
import WorldImage from "../assets/image/world.svg"
import AcceptImage from "../assets/image/accept.svg"
import ArrowImage from '../assets/image/arrow-black.svg'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll';
import {Link} from 'react-scroll'


const AboutUs = () => {
  return (

    <div  className='container mx-auto px-8 py-14  font-montserrat items-center justify-center'>
      <Element name='about'>
    <motion.h1 
      initial={{opacity:0, y: -100}}
      animate={{opacity:1, y: 0}}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2,
      }}
     className='max-w-6xl font-bold leading-snug text-xl sm:text-2xl md:text-4xl lg:text-4xl mb-10'>Ваша Проблема - <span className='text-customGreen'>Наша Работа</span></motion.h1>
      </Element>

    <motion.p
     initial={{opacity:0, x: -100}}
     animate={{opacity:1, x: 0}}
     transition={{
       type: "spring",
       stiffness: 100,
       damping: 10,
       delay: .4,
     }}
    className='w-full lg:w-1/2 xl:w-1/2 text-sm md:text-base xl:text-base text-black mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci inventore voluptatem laboriosam. 
      Veritatis quia rem magnam, voluptatibus et sapiente doloribus.</motion.p>
    <div className='flex flex-col lg:flex-row gap-10 justify-between '>
      <div className=''>
        <motion.div 
          initial={{opacity:0, y: -100}}
          animate={{opacity:1, y: 0}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: .6,
          }}
        className='shadow-2xl px-5 py-2 h-60 lg:h-40 mb-10 xl:mb-10'>
          <img src={PercentageImage} alt="" width={40} height={40} />
          <h1 className='font-bold py-3 '>Предоставляем <span className='text-customGreen'>Беспроцентную</span> Рассрочку</h1>
          <p>Мы предлагаем уникальную возможность разбить стоимость услуги на несколько платежей без процентов.</p>
        </motion.div>
        <motion.div 
          initial={{opacity:0, y: -100}}
          animate={{opacity:1, y: 0}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: .8,
          }}
        className='shadow-2xl px-5 py-2 h-60 lg:h-40 mb-10 xl:mb-10'>
          <img src={WorldImage} alt="" width={40} height={40} />
          <h1 className='font-bold py-3'>Работаем По <span className='text-customGreen' >Орше и Оршанскому Району</span> </h1>
          <p>Также выезжаем в другие города и районы по договоренности.</p>
        </motion.div>
        <motion.div 
          initial={{opacity:0, y: -100}}
          animate={{opacity:1, y: 0}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1,
          }}
        className='shadow-2xl px-5 py-2 h-60 lg:h-40  mb-10 xl:mb-10'>
          <img src={AcceptImage} alt="" width={40} height={40} />
          <h1 className='font-bold py-3'>Заключаем <span className='text-customGreen'>Договор</span></h1>
          <p>Вы можете не переживать за качество выполненных работ, за соблюдение сроков и т.д.e</p>
        </motion.div>

      </div>
      <motion.img 
        initial={{opacity:0, x: 100}}
        animate={{opacity:1, x: 0}}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.2,
        }}
      className='  lg:w-1/3 lg:h-[550px]' src={BgAbout}  alt="" />
    </div>
    <Link to="howitworks" smooth={true} duration={500}>
        <motion.div
                initial={{opacity:0, y:   100}}
                animate={{opacity:1, y: 0}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.8,
                }}
              className="flex items-center justify-center mt-20 -ml-10">
                
                <a href="/"><img src={ArrowImage} width={40} height={40}  alt="" /></a>
                
      </motion.div>
      </Link>
  </div>
  )
}

export default AboutUs
