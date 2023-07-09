import React from 'react';
// import ComputersCanvas from '@/components/Computers';
// import BallCanvas from '@/components/Ball';
// import { technologies } from '@/constants/constants';
import StarCanvas from '@/components/Stars';

const Skills = () => {
  return (
    <div className='skillsss'>
    <div className="skills-heading">
      <h1> Skills </h1>
      <div className="underline"> </div>
    </div>
    <div className='skills-sec'>
      {/* <div className="skills-container">
        {technologies.map((technology) => (
          <div className='skills-ball' key={technology.id}>
            <BallCanvas imgurl={technology.imgurl} /> 
          </div>
        ))}
      </div> */}

      <div className='abt-description'> <p> A diverse range of technical skills including programming languages, frameworks, and tools, enabling me to develop dynamic and innovative solutions for web and software development projects. </p> </div>

      {/* <div className='comp'>
        <ComputersCanvas/>
      </div> */}
      </div>
      <div className='star-sec'>
        <StarCanvas />
      </div>
      </div>
  );
}

export default Skills;
