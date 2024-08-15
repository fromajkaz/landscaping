import React from 'react'
import Logo from "../assets/image/logo.svg"
import { motion } from 'framer-motion'
import PhoneImage from '../assets/image/phone.svg'
import MailImage from '../assets/image/mail.svg'
import { Link } from 'react-scroll';



// const navigation = [
//   { name: 'О нас', href: '#'  },
//   { name: 'Как это работает?', href: '#' },
//   { name: 'Услуги', href: '#' },
//   { name: 'Наши работы', href: '#' },
// ]

const sections = [
  { name: 'about', label: 'О Нас' },
  { name: 'howitworks', label: 'Как Это Работает' },
  { name: 'services', label: 'Услуги' },
  { name: 'ourworks', label: 'Наши Работы' }
];


const Footer = () => {
  return (
    <div className='bg-customGreen'>
      <div className='flex flex-col lg:flex-row lg:justify-between  container mx-auto py-14 px-8 '>
        <div className='w-full lg:w-1/2 '>
          <motion.a
          whileHover={{ scale: 1.1 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}

          initial={{opacity:0, y: -100}}
          animate={{opacity:1, y: 0}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: .2,
            
          }}
          
          href='' className='flex items-center'>
            <img src={Logo} alt="" width={40} height={40} />
            <span className=' text-2xl text-white font-bold hover:underline-effect'>SkyGardens</span>
          </motion.a>
          <p className='mt-12 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, eos praesentium. Cumque, quam possimus?</p>
        </div>
        <motion.div
          initial={{opacity:0, y: 100}}
          animate={{opacity:1, y: 0}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: .4,
          }}
        className='my-10 flex flex-col lg:gap-6 lg:my-0 ' >
        {/* className="hidden lg:flex lg:gap-x-12 */}
          {/* {navigation.map((item) => (
            <a key={item.name} href={item.href} className="font-regular relative custom-underline text-1xl border-customGreen text-white">
              {item.name}
            </a>
          ))} */}

          
{sections.map((section) => (
          <li key={section.name} className="font-regular relative cursor-pointer custom-underline text-1xl border-customGreen text-white">
            <Link
              to={section.name}
              smooth={true}
              duration={500}
            >
              {section.label}
            </Link>
          </li>
        ))}
        </motion.div>
          
        <div className='text-white '>
          <h2>Время работы:<br /><span>Ежедневно: 08:00 - 18:00</span></h2>

          <div className="flex flex-col  gap-3">
              <motion.a
               initial={{opacity:0, x: -100}}
               animate={{opacity:1, x: 0}}
               transition={{
                 type: "spring",
                 stiffness: 100,
                 damping: 10,
                 delay: 1.4,
               }}
              className="w-60 py-3  flex gap-3  bg-customGreen rounded-full " href="tel:+375333593108"><span><img src={PhoneImage} width={25} height={25} alt="" /></span>+375-(33)-359-31-08</motion.a>
              <motion.a
               initial={{opacity:0, x: 100}}
               animate={{opacity:1, x: 0}}
               transition={{
                 type: "spring",
                 stiffness: 100,
                 damping: 10,
                 delay: 1.6,
               }}
              className="w-60  flex gap-3  bg-customGreen rounded-full" href="mailto:orshakrov@gmail.com"><span><img src={MailImage} width={25} height={25} alt="" className="" /></span>orshakrov@gmail.com</motion.a>
          </div>
              <p className='py-3'>ИП №391731309 <br />
              Чепурин Тимофей Викторович</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
