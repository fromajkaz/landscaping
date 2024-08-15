// BurgerMenu.js
import React, { useState, useEffect} from 'react';
import Logo from "../assets/image/logo.svg"
import { motion } from 'framer-motion';
import ModalWindow from '../components/ModalWindow'
import { Link } from 'react-scroll';



const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Add or remove overflow-hidden class to body
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  // const navigation = [
  //   { name: 'О нас', href: '#' },
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
  

  return (
    <motion.div
    initial={{opacity:0, x: 100}}
    animate={{opacity:1, x: 0}}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: .6,
    }}
    className="flex items-center justify-end xl:hidden overflow-y-hidden">
      <button className="top-6 right-6 text-white hover:text-gray-900 focus:outline-none" onClick={toggleMenu}>
        <svg className="w-6 h-6" fill="" viewBox="0 0 24 24" stroke="#ffffff">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-center justify-center ">
          <div className=" absolute top-0 right-0 bg-white  rounded-xl shadow-lg max-sm:w-1/2 w-1/3 h-[100vh]">
            <div className='bg-customGreen py-6 px-4 rounded-xl'>
              <motion.a
                  initial={{opacity:0, y: -100}}
                  animate={{opacity:1, y: 0}}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: .2,
                  }}
                  
                  href='/' className='flex items-center gap-3'>
                    <img src={Logo} alt="" width={20} height={20} />
                    <span className='max-md:text-sm text-2xl text-white font-bold hover:underline-effect'>SkyGardens</span>
          </motion.a>
            </div>
            <motion.button
            initial={{opacity:0, x: 100}}
            animate={{opacity:1, x: 0}}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: .4,
            }}
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-700" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="" viewBox="0 0 24 24" stroke="#000000">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            
            <motion.div
              initial={{opacity:0, x: 100}}
              animate={{opacity:1, x: 0}}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: .6,
              }}
            className='py-8 px-4 border-b-customGreen border-b-2 grid flex-col gap-8'>
              {/* {navigation.map((item) => (
              <a key={item.name} href={item.href} onClick={closeMenu} className="font-regular custom-underline text-1xl  border-customGreen text-black">
                {item.name}
              </a>
            ))} */}
             {sections.map((section) => (
          <li key={section.name} className="font-regular relative cursor-pointer custom-underline text-1xl border-customGreen text-black">
            <Link
              to={section.name}
              smooth={true}
              duration={500}
              onClick={closeMenu} 
            >
              {section.label}
            </Link>
          </li>
        ))}
            </motion.div>
            < motion.button
              initial={{opacity:0, y: 100}}
              animate={{opacity:1, y: 0}}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: .8,
              }}
            onClick={closeMenu}
            className='py-2 px-2' > 
              <ModalWindow/>
            </motion.button>
              

          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BurgerMenu;
