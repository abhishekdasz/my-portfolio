import React from 'react'

const Experience = (props) => {
  return (
    <div className='exp-container' >

      <div className="course-details">
        <div>
          <h1> {props.course}  </h1>
          <h2> {props.clg} </h2>
        </div>
      </div>

      <div className="line-round">
        <div className="round"> </div>
        <div className='line'>  </div>
      </div>

      <div className="year-details">
        <div> 
          <h1> {props.year}  </h1>
        </div>
      </div>
    </div>
  )
}

export default Experience
