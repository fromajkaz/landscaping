import React from 'react'
import BgImage from '../assets/image/bg-header.png'
import Navbar from '../components/Navbar'
import PhoneImage from '../assets/image/phone.svg'
import MailImage from '../assets/image/mail.svg'
import ArrowImage from '../assets/image/arrow.svg'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import AboutUs from './AboutUs'

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: '100%',
  height: '100vh',
}


const Hero = () => {
  return (
    <div style={bgImage}>
      <div>
        <Navbar/>
        <div className="text-white text-center flex flex-col items-center justify-center h-screen mx-5 ">
            <motion.h1 
             initial={{opacity:0, y: -100}}
             animate={{opacity:1, y: 0}}
             transition={{
               type: "spring",
               stiffness: 100,
               damping: 10,
               delay: 1,
             }}
            className="font-bold leading-snug text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-6">Благоустройство <br /> мест захоронений</motion.h1>
            <motion.p 
             initial={{opacity:0, x: -100}}
             animate={{opacity:1, x: 0}}
             transition={{
               type: "spring",
               stiffness: 100,
               damping: 10,
               delay: 1.2,
             }}
            className="text-sm sm:text-sm md:text-base lg:text-xl  text-gray-200 mb-10">Связаться с нами можно по телефону, <br /> а также по электронной почте, указанной ниже:</motion.p>
            <div className=" flex flex-col md:flex-row gap-4 items-center justify-center">
              <motion.a
               initial={{opacity:0, x: -100}}
               animate={{opacity:1, x: 0}}
               transition={{
                 type: "spring",
                 stiffness: 100,
                 damping: 10,
                 delay: 1.4,
               }}
              className="w-60  px-4 py-4 flex gap-3  bg-customGreen rounded-full " href="tel:+375333593108"><span><img src={PhoneImage} width={25} height={25} alt="" /></span>+375-(33)-359-31-08</motion.a>
              <motion.a
               initial={{opacity:0, x: 100}}
               animate={{opacity:1, x: 0}}
               transition={{
                 type: "spring",
                 stiffness: 100,
                 damping: 10,
                 delay: 1.6,
               }}
              className="w-60 px-4 py-4 flex gap-3  bg-customGreen rounded-full" href="mailto:orshakrov@gmail.com"><span><img src={MailImage} width={25} height={25} alt="" className="" /></span>orshakrov@gmail.com</motion.a>
            </div>
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
              <Link to="about" smooth={true} duration={500}>
              <a href=""><img src={ArrowImage} width={40} height={40} alt=""  /></a>
              </Link>
            </motion.div>
          </div>
      </div>
    </div>
  )
}

export default Hero
