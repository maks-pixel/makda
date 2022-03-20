import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value })
  }
  
  //console.log(formState);
  

  function handleSubmit(e) {
    e.preventDefault();
    emailjs.sendForm('service_0g40heo', 'template_5e7js4l', e.target, '9zTG0HzvdR-IKYNqg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    console.log(formState);
    e.target.reset()
  }
  return (
    <section className='contact'>  
      <h1 className='header'>Contact me</h1>
    <div className='contact-page'>
      
      <form id='contact-form' onSubmit={handleSubmit} >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" defaultValue={email} name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className='contact-links'>
      <a href='https://github.com/maks-pixel' ><FontAwesomeIcon icon={faGithub} className='fa-4x'/></a>
      <a href='https://www.linkedin.com/in/makda-girmay-a8b937b0/' ><FontAwesomeIcon icon={faLinkedin} className='fa-4x'/></a>
      </div>
    </div>
    </section>
  )
}

export default ContactForm;