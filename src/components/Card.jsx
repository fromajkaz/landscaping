import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description, imageUrl }) => {
  return (
    <motion.div 
    initial={{opacity:0, y:   100}}
    animate={{opacity:1, y: 0}}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.6,
    }}
    className="p-4 px-4 w-full bg-white hover:bg-customGreen  transition duration-300 cursor-pointer rounded-lg shadow-2xl overflow-hidden group ">
      <img className="w-14 h-14 object-cover bg-white py-3 px-3 rounded-3xl mb-4" src={imageUrl} alt={title} />
      <div className="">
        <h2 className="text-base lg:text-xl xl:text-xl text-black group-hover:text-white uppercase font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-500 group-hover:text-black">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;