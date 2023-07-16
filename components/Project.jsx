import React from 'react'
import { projects } from '@/constants/constants'
// import { motion } from 'framer-motion'
// import { fadeIn, textVariant } from '@/utils/motion'
import Tilt from "react-parallax-tilt"
import Image from 'next/image'
import github from "../public/github.png"
import StarCanvas from './Stars'
import Allprojects from '@/pages/all-projects'

import { useRouter } from 'next/router'

const Project = () => {
  const router = useRouter();
  return (
    <div className='proj-sec'>
    <div className="headings">
      <h1> MY PROJECTS </h1>
      <div className="underline"> </div>
      <p> A showcase of my diverse portfolio, highlighting the various web and software development projects I have worked on. From responsive web applications to innovative software solutions, each project represents my dedication to delivering high-quality work with a focus on user experience, functionality, and modern design. </p>
    </div>
    <div className='project-section'>
      <div className='card-container'>
        {projects.map((element, index)=>{
          const git_link = element.github; 
            return(
              <div key={index}>
                <Tilt>
                    <div className='card'>
                        <div className="img-container">
                          {/* <Image src={element.imgsrc} alt='cardImg' height={150} width={270} /> */}
                          <img src={element.imgsrc} alt="codeImg" />
                          <div className='hover-div'> 
                            <div onClick={()=> window.open(git_link, "_blank")}>
                              <Image src={github} alt='github' className='github-img' />
                            </div>  
                          </div>
                        </div>

                        <div className='content'>
                          <h3> {element.name} </h3>
                          <p> {element.descr} </p> 
                        </div>

                        <div className="footer">
                          <p> {element.tech1} </p>
                          <p> {element.tech2} </p>
                          <p> {element.tech3} </p>
                        </div>
                    </div> 
                </Tilt>
                </div>
            )  
        })}
      </div>

      <div className='btn-container'>
        <div className="explore-btn" onClick={()=>{router.push('/all-projects')}} > More Projects </div>
      </div>
    </div>

    <div className='star-sec'>
        <StarCanvas />
      </div>
    </div>
  )
}

export default Project
