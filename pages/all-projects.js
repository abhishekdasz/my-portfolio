import React, { useState } from 'react'
import { allprojects } from '@/constants/constants';
import Tilt from "react-parallax-tilt"
import Image from 'next/image'
import github from "../public/github.png"


const Allprojects = () => {
    const [ projitems, setProjitems ] = useState(allprojects);

    const filterItems = (categItem) => {
        if (categItem === '#html') {
          const updatedItems = allprojects.filter((currElem) => {
            return currElem.techs.some((tech) => tech === categItem);
          });
          setProjitems(updatedItems);
        } 
        else if(categItem === '#reactjs')
        {
            const updatedItems = allprojects.filter((currElem) => {
                return currElem.techs.some((tech) => tech === categItem);
              });
              setProjitems(updatedItems);
        }
        else if(categItem === '#nextjs')
        {
            const updatedItems = allprojects.filter((currElem) => {
                return currElem.techs.some((tech) => tech === categItem);
              });
              setProjitems(updatedItems);
        }
        else 
        {
          setProjitems(allprojects);
        }
      };
      
      
  return (
    <div className='all-projects'>
        <div className='all-proj-sec'>


            <div className="headings">
                <h1> MY PROJECTS </h1>
                <div className="underline"> </div>
            </div>

            <div className="filter-projs">
                <span onClick={()=>{filterItems('#html')}}> HTML </span>
                <span onClick={()=>{filterItems('#reactjs')}}> ReactJS </span>
                <span onClick={()=>{filterItems('#nextjs')}}> NextJS </span>
                <span onClick={()=>{filterItems('#all')}}> All </span>
            </div>

            <div className='all-projects-card-section'>
                <div className='all-proj-card-container'>
                    {
                        projitems.map((element)=>{
                            return (
                                <div key={element.index}>
                                    <Tilt>
                                        <div className='card'>
                                            <div className="img-container">
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
                                                {element.techs.map((tech, index) => (
                                                    <p key={index}>{tech}</p>
                                                ))}
                                            </div>
                                        </div> 
                                    </Tilt>
                                </div>
                            )
                        })
                    }
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Allprojects;
