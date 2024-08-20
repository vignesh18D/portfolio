import React from 'react'
import {Element} from 'react-scroll'

import './Hero.css'
import Display from './Display'
const Hero = () => {
  return (
    <Element name='about' className='hero-main'>
        <Display/>
    </Element>
  )
}

export default Hero
