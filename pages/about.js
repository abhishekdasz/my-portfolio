import React, { useState } from 'react';
import { BiLogoJava, BiRightArrowAlt } from "react-icons/bi";
import { SiHiveBlockchain } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

import Link from 'next/link';
import StarCanvas from '@/components/Stars';
import LefSideAbout from '@/components/LefSideAbout';

const About = () => {
  return (
    <div className='about-sec'>
    <div className="about-heading">
      <h1> About Me </h1>
      <div className="underline">  </div>
    </div>
    <div className='aboutContainer'>
      {/* left-side */}
      <LefSideAbout/>

      {/* Right-side */}
      <div className="right-a">

        <div className="left-box">
          <div className="box selected">
            <div className="head-symb"> <BiLogoJava/> </div>
              <div className="heading">Java</div>
              <div className="cont">With extensive experience in Java development, I create robust software solutions..</div>
              <Link href='/'> View More<BiRightArrowAlt/> </Link>
          </div>
          <div className="box">
            <div className="head-symb"> <SiHiveBlockchain/> </div>
              <div className="heading">Blockchain</div>
              <div className="cont"> In blockchain development, I create decentralized and secure applications. </div>
              <Link href='/'> View More<BiRightArrowAlt/> </Link>
          </div>
        </div>

        <div className="right-box">
          <div className="box">
              <div className="head-symb"> <TbBrandNextjs/> </div>
              <div className="heading">Web</div>
              <div className="cont"> With proficiency in both front-end and back-end technologies, I create seamless full-stack app. </div>
              <Link href='/'> View More<BiRightArrowAlt/> </Link>
          </div>
          <div className="box">
            <div className="head-symb"> <FaAws/> </div>
              <div className="heading">Cloud</div>
              <div className="cont">With hands-on experience in AWS, I deploy and manage scalable cloud infrastructure.</div>
              <Link href='/'> View More<BiRightArrowAlt/> </Link>
          </div>
        </div>



      </div>
    </div>
    <div className='star-sec'>
        <StarCanvas />
      </div>
    </div>
  )
}

export default About;
