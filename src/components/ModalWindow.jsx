import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: ''
    });
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      closeModal();
    };

    
  

    return (
        <div className="relative ">
          <button
          
            className="font-montserrat px-4 py-2 bg-customGreen text-white hover:text-black rounded-3xl hover:bg-white  transition-colors"
            onClick={openModal}
        >
            Оставить Заявку 
          </button>
    
          {isModalOpen && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
              <div className="bg-customGreen p-8 rounded-lg shadow-lg relative text-left w-1/3 text-white">
                <button
                  className="absolute top-0 right-0 m-7 text-4xl text-white text-gray-500 hover:text-black"
                  onClick={closeModal}
                >
                  ×
                </button>
                <motion.h2
                 initial={{opacity:0, y: -100}}
                 animate={{opacity:1, y: 0}}
                 transition={{
                   type: "spring",
                   stiffness: 100,
                   damping: 10,
                   delay: .2,
                 }}
                className="font-montserrat font-bold text-2xl mb-4 ">Заполните Форму</motion.h2>
                <form onSubmit={handleSubmit}>
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
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-full text-sm  border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none"
                      required
                    />
                  </motion.div>
                  <div className="flex justify-end">
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
            </motion.div>
          )}
        </div>
      );
    }
    
    export default App;