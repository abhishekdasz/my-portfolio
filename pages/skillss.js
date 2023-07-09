import React from 'react'
import { technologies } from '@/constants/constants'
import BallCanvas from '@/components/Ball'
import ComputersCanvas from '@/components/Computers'
import StarCanvas from '@/components/Stars'

const Skillss = () => {
  return (
    <div className='skillss-sec'>
      
      {/* headings section */}
      <div className="headings">
        <h1> Skills </h1>
        <div className="underline"> </div>
      </div>

      {/* skills-balls & skills-description section */}
      <div className="skills-balls-desc">
        <div className="skillss-balls">
            {technologies.map((element) => (
                <div className="balls" key={element.id}>
                    <BallCanvas imgurl={element.imgurl}/>
                </div>
            ))}
        </div>

        <div className="skillss-desc">
            <p> A diverse range of technical skills including programming languages, frameworks, and tools, enabling me to develop dynamic and innovative solutions for web and software development projects. </p>
        </div>
      </div>

      {/* 3d computer section */}
      <div className="computer">
        <ComputersCanvas/>
      </div>


      <div className='star-sec'>
        <StarCanvas />
      </div>



    </div>
  )
}

export default Skillss
