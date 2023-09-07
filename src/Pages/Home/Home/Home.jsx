import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Latest from '../Latest/Latest'
import ContactBanner from '../ContactBanner/ContactBanner'
import Slider from '../Carousel/Carousel'
import SlideCarousel from '../ScroolCa/ScrollCarousel'

function Home() {
  return (
    <div className='container mx-auto'>
      <Hero></Hero>
      <Slider></Slider>
      <Latest></Latest>
      <SlideCarousel></SlideCarousel>
      <About></About>
      <ContactBanner></ContactBanner>
    </div>
  )
}

export default Home