import React from 'react'
import { motion } from 'framer-motion';
import Card from './Card';
import ArrowImage from "../assets/image/arrow-black.svg"
import image1 from "../assets/image/monument.svg"
import image2 from "../assets/image/brick.svg"
import image3 from "../assets/image/table.svg"
import image4 from "../assets/image/build.svg"
import image5 from "../assets/image/building.svg"
import image6 from "../assets/image/concrete.svg"
import { Element } from 'react-scroll';
import {Link} from 'react-scroll';


const cards = [
  {
    title: 'ИЗГОТОВЛЕНИЕ ПАМЯТНИКОВ, ОГРАД И ДРУГИХ ЭЛЕМЕНТОВ',
    description: 'Мы предлагаем как стандартные варианты, так и изготовление памятников по индивидуальному заказу. Наши опытные мастера помогут Вам выбрать наиболее подходящий вариант, учитывая Ваши пожелания и финансовые возможности. ',
    imageUrl: image1,
  },
  {
    title: 'БОЛЬШОЙ ВЫБОР ПАМЯТНИКОВ И ПЛИТКИ',
    description: 'В нашем каталоге вы найдете памятники из различных материалов, а также большой выбор плитки для облицовки могил. Мы предлагаем памятники различных форм и размеров с возможностью нанесения гравировки.',
    imageUrl: image2,
  },
  {
    title: 'УСТАНОВКА И ПОКРАСКА ОГРАД, СТОЛОВ, СКАМЕЕК',
    description: 'Наши специалисты имеют большой опыт работы в области установки и покраски оград, столов и скамеек. Мы гарантируем качество выполненных работ и соблюдение всех необходимых технологий. Мы постоянно обновляем наш ассортимент, чтобы удовлетворить потребности самых взыскательных клиентов.',
    imageUrl: image3,
  },
  {
    title: 'УСТАНОВКА ПАМЯТНИКОВ',
    description: 'Наши специалисты обладают высокой квалификацией и опытом работы в данной области, что гарантирует качество и надежность выполненных работ. ',
    imageUrl: image4,
  },
  {
    title: 'УКЛАДКА ПЛИТКИ',
    description: 'Мы используем только качественные материалы и современные технологии, чтобы обеспечить долговечность и эстетичный вид покрытий. Наши специалисты имеют опыт работы с различными видами плитки и могут предложить оптимальные решения для каждого конкретного случая. ',
    imageUrl: image5,
  },
  {
    title: 'БЕТОННЫЕ РАБОТЫ',
    description: 'Наши специалисты выполняют все виды бетонных работ, включая заливку фундаментов, стяжки и других элементов. ',
    imageUrl: image6,
  },
];


const Services = () => {
  return (

    <div className="text-white py-10 ">
          <Element name='services'>
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
      className='max-w-6xl font-bold leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 text-black'>Предоставляем <span className='text-customGreen'> Услуги</span></motion.h1>
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
          
           <motion.div 
           className="  py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
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
      <Link to="ourworks" smooth={true} duration={500}>
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

export default Services
