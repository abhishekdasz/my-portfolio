import React from 'react';
// import ComputersCanvas from '@/components/Computers';
// import BallCanvas from '@/components/Ball';
// import { technologies } from '@/constants/constants';
import StarCanvas from '@/components/Stars';
import { allprojects } from '@/constants/constants';
import Image from 'next/image'

const Skills = () => {
  return (
    <>
                <div className="projects-blog-container">
                    {
                        allprojects.map((element)=>{
                            return(
                            <div key={element.index} className='my-projects'>
                                {/* <h1> {element.name} </h1> */}
                                <div className="blogs-content">
                                <h4> Features of this website: </h4>
                                <li> Hospital Search: <br /> Easily search for hospitals in Odisha citywise </li>
                                <li> Top Hospitals: Access information about the top hospitals in each city </li>
                                <li> Detailed Hospital Pages: Explore comprehensive details about hospitals, including services, facilities, and contact information </li>
                                <li> Top Doctors: Discover the leading doctors practicing at each hospital </li>
                                <li> Doctor Filtering: Filter doctors based on different medical departments for targeted results </li>
                                <li> Doctor Profiles: View doctor profiles with qualifications, achievements, patient reviews, and additional details </li>
                                <li> Consultation Fees: Find information about doctor consultation fees </li>
                                <li> Appointment Booking: Conveniently book doctor consultations through the website </li>
                                <li> User-Friendly Experience: The website provides a seamless and user-friendly interface for finding hospitals and doctors </li>
                                </div>

                                <Image src={element.imgsrc} alt='proj-img' width={680} height={430} />
                            </div>
                            )
                        })
                    }
                </div>

    </>
  );
}

export default Skills;
