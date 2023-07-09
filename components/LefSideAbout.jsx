import React, { useState } from 'react'
import { SlGraduation } from "react-icons/sl";
import { BsBriefcase, BsCalendar3 } from "react-icons/bs";

const LefSideAbout = () => {
    const [ exp, setExp ] = useState(false);
  return (
    <div className='qualification_container' id='qualification'>
        <div className="qualification_tabs">
            <div className="qualification_button" onClick={()=>{setExp(false)}}>
                <SlGraduation className="qualification-icon"/> Education  {!exp ? <div className="und"></div> : null}
            </div>

            <div className="qualification_button" onClick={()=>{setExp(true)}}>
                <BsBriefcase className='className="qualification-icon"'/> Experience  {exp ? <div className="und"></div> : null}
            </div>
        </div>

        <div className="qualification_section">
            <div className="qualification_content">
                {
                    exp ?
                    (
                            // Experience 1
                              <div>
                                  <div className="qualification_data">
                                      <div className='qual-data'>
                                          <h3 className="qualification_title"> Intern Developer </h3>
                                          <span className="qualification_subtitle"> Danip Technologies, Delhi </span>
                                          <div className="qualification_calender"> <BsCalendar3 /> June, 2022 </div>
                                      </div>

                                      <div>
                                          <span className='qualification_rounder'></span>
                                          <span className='qualification_line'></span>
                                      </div>
                                  </div>

                                  {/* Experience 2 */}
                                  <div className="qualification_data">
                                      <div></div>
                                      <div>
                                          <span className='qualification_rounder'></span>
                                          <span className='qualification_line'></span>
                                      </div>
                                      <div className='qual-data'>
                                          <h3 className="qualification_title"> Web Development Intern </h3>
                                          <span className="qualification_subtitle"> The Sparks Foundation </span>
                                          <div className="qualification_calender"> <BsCalendar3 /> June, 2021 </div>
                                      </div>
                                  </div>

                                  {/* Experience 3 */}
                                  <div className="qualification_data">
                                      <div className='qual-data'>
                                          <h3 className="qualification_title"> Open Source Contribution </h3>
                                          <span className="qualification_subtitle"> Hacktoberfest </span>
                                          <div className="qualification_calender"> <BsCalendar3 /> October, 2021 </div>
                                      </div>
                                      <div>
                                          <span className='qualification_rounder'></span>
                                      </div>
                                  </div>
                              </div>
                    ) 
                    :
                    (
                            // Qualification 1
                              <div>
                                  <div className="qualification_data">
                                      <div className='qual-data'>
                                          <h3 className="qualification_title">B.Tech in CSE</h3>
                                          <span className="qualification_subtitle">C.V. Raman Global University</span>
                                          <div className="qualification_calender"> <BsCalendar3 /> 2020-2024 </div>
                                      </div>

                                      <div>
                                          <span className='qualification_rounder'></span>
                                          <span className='qualification_line'></span>
                                      </div>
                                  </div>

                                  {/* Qualification 2 */}
                                  <div className="qualification_data">
                                      <div></div>
                                      <div>
                                          <span className='qualification_rounder'></span>
                                          <span className='qualification_line'></span>
                                      </div>
                                      <div className='qual-data'>
                                          <h3 className="qualification_title">Intermediate</h3>
                                          <span className="qualification_subtitle">Basic Science & Humanities</span>
                                          <div className="qualification_calender"> <BsCalendar3 />  2018-2020 </div>
                                      </div>
                                  </div>

                                  {/* Qualification 3 */}
                                  <div className="qualification_data">
                                      <div className='qual-data'>
                                          <h3 className="qualification_title">Schooling</h3>
                                          <span className="qualification_subtitle">School Of Integral Education</span>
                                          <div className="qualification_calender"> <BsCalendar3 /> 2006-2018 </div>
                                      </div>
                                      <div>
                                          <span className='qualification_rounder'></span>
                                      </div>
                                  </div>
                              </div>
                    )
                }
                 {/* Qualification 1 */}
            </div>
        </div>
    </div>
  )
}

export default LefSideAbout
