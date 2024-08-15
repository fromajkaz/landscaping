import React from 'react'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import OurWorks from './components/OurWorks'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'


const App = () => {

  return (
        <div className='overflow-x-hidden'>
            <Hero/>
            <AboutUs />
            <HowItWorks/>
            <Services/>
            <OurWorks/>
            <ContactUs/>
            <Footer/>
          </div> 


  )
}

export default App
