import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'


function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const { name, email, message } = formState;
  const [error, setError]=useState(false);
  const [success, setSuccess]=useState(false);
  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value })
  }
  
  // console.log(formState);
  
  function handleSubmit(e) {
    e.preventDefault();
    if(name.length==0||email.length==0||message.length==0){
      setError(true);
      e.target.reset()
    }
    else{
    emailjs.sendForm('service_0g40heo', 'template_5e7js4l', e.target, '9zTG0HzvdR-IKYNqg')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
          setError(false);
      }, (error) => {
          console.log(error.text);
          setError(true);
      });
    console.log(formState);
    e.target.reset()
  }
}
  return (
    <section className='contact'>  
      <h1 className='header'>Contact me</h1>
    <div className='contact-page'>
      <form id='contact-form' onSubmit={handleSubmit} >
        <p>Email me at: <a className='email' href="mailto: makdagirmay4@gmail.com">makdagirmay4@gmail.com</a><br />
        You can also fill out the form below</p>
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
        <Button type="submit">Submit</Button>
        <div className="message">
         {success? <Alert variant="success" className="success">
            Submit success, message Sent!
          </Alert>:""}
          {error?<Alert variant="danger" className="failed">
            Failed submit, fields cant be empty!
          </Alert>:""}
        </div>
       
      </form>
      <div className='contact-links'>
      <a href='https://github.com/maks-pixel' ><FontAwesomeIcon icon={faGithub} className='fa-4x'/></a>
      <a href='https://instagram.com/maksgirmay'><FontAwesomeIcon icon={faInstagram}  className='fa-4x'/></a>
      {/* <a href="mailto: makdagirmay4@gmail.com"><FontAwesomeIcon icon="fa-solid fa-at" className='fa-4x' /></a> */}
      <a href='https://www.linkedin.com/in/makda-girmay-a8b937b0/' ><FontAwesomeIcon icon={faLinkedin} className='fa-4x'/></a>
      </div>
    </div>
    </section>
  )
}

export default ContactForm;