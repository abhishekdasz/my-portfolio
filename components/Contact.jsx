import React, { useRef, useState } from 'react';
import StarCanvas from './Stars';
// import { emailjs } from '@emailjs/browser'
import emailjs from 'emailjs-com';
 
const data = [
  "Development",
  "Web Design",
  "Blockchain",
  "Mobile App Dev.",
  "Cloud Computing",
];

const Contact = () => {
  // const formRef = useRef();
  const [form, setForm] = useState({
    name:"", email:"", phone:"", message:""
  });
  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value; 
    setForm({...form, [name]: value});
    console.log(form);

    // qZW6DK2FQLlxKKujj
    // template_8wv0b79
    // service_fgs7dbu
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs.send(
      'service_fgs7dbu', 
      'template_skz8sfm', 
      {
        from_name: form.name,
        to_name: "Abhishek Das",
        from_email: form.email ,
        to_email: 'abhishekdaszy@gmail.com' ,
        message: form.message ,
    }, 
    'qZW6DK2FQLlxKKujj'
    ).then(()=>{
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({ name:"", email:"", phone:"", message:"" });
    }, (error)=>{
      console.log(error);
      alert('something went wrong')
    })
  }
  return (
    <div className='services-section'>
      <div className="contact-heading">
        <p> GET IN TOUCH </p>
        <h1> Contact </h1>
        <div className="underline"> </div>
      </div>
      <div className="services-container">

        {/* Left section */}
        <div className="left-services">
          <ul>
            {data.map((item) => (
              <li key={item} text={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right section */}
        <div className="right-services">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className='inputs'>
                <label> <span> Your Name: </span> </label>
                <input type="text" name="name" value={form.name} onChange={handleChange}/>
              </div>
              <div className="inputs">
                <label> <span> Your Email: </span> </label>
                <input type="email" name="email" value={form.email} onChange={handleChange} />
              </div>
              <div className="inputs">
                <label> <span> Your Number: </span> </label>
                <input type="number" name="phone" value={form.phone} onChange={handleChange} />
              </div>
              <div className="inputs">
                <label> <span> Your Message: </span> </label>
                <textarea name="message" rows="7" placeholder='What do you want to say?' value={form.message} onChange={handleChange} />
              </div>
              <button className='con-btn' > Send </button>
            </form>
          </div>        
        </div>

      </div>

      <div className='star-sec'>
        <StarCanvas />
      </div>
    </div>
  );
};

export default Contact;
