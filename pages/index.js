import Hero from '@/components/Hero'
import React from 'react'
import Projects from './projects'
import About from './about'
import Contacts from './contacts'
import Skillss from './skillss'

const index = () => {
  return (
    <div className='app-container'>
      <Hero/>
      <About/>
      <Projects/>
      <Skillss/>
      <Contacts/>
    </div>
  )
}

export default index
