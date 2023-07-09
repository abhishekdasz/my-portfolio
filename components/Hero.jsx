import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import StarCanvas from './Stars';

const Hero = () => {
    const transition = {type:'spring', duration: 3 }
    const gdrive_link = "https://drive.google.com/file/d/1nVyabWk6xEwe9iSQlUkAW7EuhmG_VTjt/view?usp=sharing"
  return (
    <div className='hero-sec'>
        <div className="hero-container">
            <div className="left-hero">

                {/* the best ad */}
                <div className="the-best-ad">
                    <motion.div initial={{left:'200px'}} whileInView={{left:'9px'}} transition={{...transition, type: 'tween'}} ></motion.div>
                    <span>Let&rsquo;s Buld Something Together</span>
                </div>

                {/* Hero Heading */}
                <div className="hero-text">
                    <div className='intro'>
                        <span className='stroke-text'>Hey, </span>
                        <span>I Am</span>
                    </div>
                    <div>
                        <span>Abhishek Das</span>
                    </div>
                    <div>
                        <span>I&rsquo;m a fullstack developer specializing in bulding exceptional digital experiences.  I am also passionate about mobile app development and Blockchain development.</span>
                    </div>
                </div>

                {/* figures */}
                <div className="figures">
                    <div>
                        <span> <NumberCounter end={25} start={1} delay='1' prefix="+" postFix="+" className="increment" /> </span>
                        <span>Projects <br />Completed</span>
                    </div>
                    <div>
                        <span> <NumberCounter end={10} start={1} delay='1' postFix="+" className="increment" /> </span>
                        <span>Happy <br />Clients</span>
                    </div>
                    <div>
                        <span> <NumberCounter end={3} start={1} delay='1' postFix="+" className="increment" /> </span>
                        <span>Years <br />Experience</span>
                    </div>
                </div>
                
                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn" onClick={()=> window.open(gdrive_link, "_blank")}> Download CV </button>
                    <button className="btn" onClick={()=> window.open(gdrive_link, "_blank")}> Know More </button>
                </div>
                
            </div>







            <div className="right-hero">
                {/* <h1> Hello </h1> */}
                <Canvas>
                    <OrbitControls enableZoom={false}/>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[3,2,1]} />

                    <Sphere args={[1,100,200]} scale={2.4}>
                        <MeshDistortMaterial color="#3d1c56" attach="material" distort={0.5} speed={2}  />
                    </Sphere>
                </Canvas>

                <Image src='/heroimg.png' alt='heroimg' width={350} height={250}/>
            </div>
        </div>

        <div className='star-sec'>
        <StarCanvas />
      </div>
    </div>
  )
}

export default Hero
