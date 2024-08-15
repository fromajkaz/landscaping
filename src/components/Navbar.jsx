import React from 'react'
import Logo from '../assets/image/logo.svg'
import ModalWindow from '../components/ModalWindow'
import { motion } from 'framer-motion'
import BurgerMenu from './BurgerMenu'
import { Link } from 'react-scroll';

// const navigation = [
//   { name: 'О нас', href: '#about'  },
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

const Navbar = () => {


  return (
    <main className=' bg-black bg-opacity-50' >
      <div className=' container mx-auto px-8 py-6 font-montserrat flex justify-between items-center'>
        
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
        
        href='' className='flex items-center gap-3'>
          <img src={Logo} alt="" width={40} height={40} />
          <span className=' text-2xl text-white font-bold hover:underline-effect'>SkyGardens</span>
        </motion.a>
        
        <motion.div
          initial={{opacity:0, y: 100}}
          animate={{opacity:1, y: 0}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: .4,
          }}
        className='lg:gap-x-6 xl:flex max-xl:hidden ' >
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
          
          <motion.div 
           initial={{opacity:0, y: 100}}
           animate={{opacity:1, y: 0}}
           transition={{
             type: "spring",
             stiffness: 100,
             damping: 10,
             delay: .6,
           }}
           className='xl:flex max-xl:hidden text-white text-sm'>
            <h2>Время работы:<br /><span>Ежедневно: 08:00 - 18:00</span></h2>
          </motion.div>

        <motion.button
           initial={{opacity:0, y: -100}}
           animate={{opacity:1, y: 0}}
          transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: .8,
        }}
 className='xl:flex max-xl:hidden'>
          <ModalWindow/>
        </motion.button>
        <BurgerMenu/>
      </div>
    </main>

  )
}

export default Navbar
