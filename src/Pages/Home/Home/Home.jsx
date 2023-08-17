import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Latest from '../Latest/Latest'
import ContactBanner from '../ContactBanner/ContactBanner'
import Slider from '../Carousel/Carousel'

function Home() {
  return (
    <>
      <Hero></Hero>
      <Slider></Slider>
      <Latest></Latest>
      <About></About>
      <ContactBanner></ContactBanner>
    </>
  )
}

export default Home