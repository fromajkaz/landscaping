import {React,useState} from 'react'
import FormImage from "../assets/image/contact-us.jpg"
import { motion } from 'framer-motion'

const FormContactUs = () => {

       

  return (
    <div className='w-[80%] bg-customGreen flex items-center justify-center rounded-3xl my-10  '>
      <div className='hidden lg:block lg:w-1/2 xl:block xl:w-1/2'>
        <img src={FormImage} alt="" className='rounded-3xl' />
      </div>
        <div className='mx-auto py-10 lg:px-10 w-2/4'>
                <form className='w-full'>
                        <motion.div
                        initial={{opacity:0, y: -100}}
                        animate={{opacity:1, y: 0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: .4,
                        }}
                        className="mb-4">
                            <label className="block text-white text-1xl mb-1 font-semibold">Name</label>
                            <input
                            type="text" 
                            name="name"
                        
                            className="w-full px-4 py-2 rounded-full text-sm  border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none "
                            required
                            />
                        </motion.div>
                        <motion.div 
                            initial={{opacity:0, y: -100}}
                            animate={{opacity:1, y: 0}}
                            transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: .6,
                            }}
                        className="mb-4">
                            <label className="block text-white text-1xl mb-1 font-semibold">Email</label>
                            <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-2 rounded-full text-sm  border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none"
                            required
                            />
                        </motion.div>
                        <motion.div
                            initial={{opacity:0, y: -100}}
                            animate={{opacity:1, y: 0}}
                            transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: .8
                            }}
                        className="mb-4">
                            <label className="block text-white text-1xl mb-1 font-semibold">Phone</label>
                            <input
                            type="tel"
                            name="phone"
                            className="w-full px-4 py-2 rounded-full text-sm  border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none"
                            required
                            />
                        </motion.div>
                        <div className="flex justify-end]]">
                            <motion.button
                                initial={{opacity:0, y: -100}}
                                animate={{opacity:1, y: 0}}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: .1,
                                }}
                            type="submit"
                            className="w-full px-4 py-2 bg-white text-customGreen rounded-full hover:bg-green-500 hover:text-white transition-all "
                            >
                            Отправить
                            </motion.button>
                        </div>
                </form>
        </div>
    </div>
  )
}

export default FormContactUs
