import React from 'react'
import BgHowItWorks from '../assets/image/bg-howitworks.png'
import { motion } from 'framer-motion'
import Card from './Card'
import image1 from "../assets/image/money.svg"
import image2 from "../assets/image/shield.svg"
import image3 from "../assets/image/rocket.svg"
import image4 from "../assets/image/people.svg"
import image5 from "../assets/image/heart.svg"
import ArrowImage from "../assets/image/arrow.svg"
import { Element, Link } from 'react-scroll';



const bgImage = {
  backgroundImage: `url(${BgHowItWorks})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: '100%',
  }

  const cards = [
    {
      title: 'Лучшие цены',
      description: 'Благоустройство захоронений может быть на любой бюджет, в зависимости от Ваших пожеланий и финансовых возможностей.В ходе выполнения работ стоимость не меняется.',
      imageUrl: image1,
    },
    {
      title: 'ГАРАНТИИ',
      description: 'Предоставляем гарантии на выполненные работы и использованные материалы.',
      imageUrl: image2,
    },
    {
      title: 'Оперативность',
      description: 'Благоустройство может быть выполнено в кратчайшие сроки, что особенно важно при организации похорон или годовщин.',
      imageUrl: image3,
    },
    {
      title: 'ОПЫТНЫЕ СПЕЦИАЛИСТЫ',
      description: 'У нас работают только высококвалифицированные специалисты, которые обеспечивают высокое качество работ и долговечность результата.',
      imageUrl: image4,
    },
    {
      title: 'ИНДИВИДУАЛЬНЫЙ ПОДХОД',
      description: 'Учтем все Ваши пожелания и предпочтения. Можно выбрать различные материалы, формы, цвета и размеры, чтобы создать уникальный дизайн.',
      imageUrl: image5,
    },
  ];


const HowItWorks = ({ title, description, imageUrl }) => {
  return (

    <div className="text-white py-10 " style={bgImage}>
          <Element name='howitworks'>
      <div className='container mx-auto px-8 py-14 font-montserrat items-center'>
        <motion.h1 
        initial={{opacity:0, y: -100}}
        animate={{opacity:1, y: 0}}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
      className='max-w-6xl font-bold leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6'>Почему стоит выбрать <br /> <span className='text-customGreen'>именно нас ?</span></motion.h1>
           
           <motion.p
     initial={{opacity:0, x: -100}}
     animate={{opacity:1, x: 0}}
     transition={{
       type: "spring",
       stiffness: 100,
       damping: 10,
       delay: .4,
     }}
    className='w-full ld:w-1/2 xl:w-1/2 text-sm md:text-base xl:text-base text-white mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci inventore voluptatem laboriosam. 
      Veritatis quia rem magnam, voluptatibus et sapiente doloribus.</motion.p>
          
           <motion.div 
           className="shadow-2xl  py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </motion.div>
      </div>
      </Element>
      <Link to="services" smooth={true} duration={500}>
      <motion.div
                initial={{opacity:0, y:   100}}
                animate={{opacity:1, y: 0}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
              className="flex items-center justify-center  -ml-10">
                <a href="/"><img src={ArrowImage} width={40} height={40}  alt="" /></a>
      </motion.div>
      </Link>
    
      
    </div>

      
  )
}

export default HowItWorks
