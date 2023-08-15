import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

  const details = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  }

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const onFormUpdate = () => {
    if (firstName === '' && lastName === '' && email === '' && phone === '', message === '') {
      alert('Please Enter All the Information'); return;
    }
    else {
      alert('Your Information has been sent Successfully');
    }
  }
  return (
    <div className='container1'>
      <h2>Contact Me</h2>

      <form onSubmit={() => onFormUpdate()} >
        
          <div className='form-group'>
            <input type='text' className='form-control child' name='firstName' value={firstName} placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
            <input type='text' className='form-control child' placeholder='Last Name' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} /> 
        
           </div>
          <div className='form-group'>
          <input type='email' id='child1' className='form-control child' name='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input type='phone' max='11' min='11' className='form-control child' placeholder='Cell' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} /> 
          </div>
          <div className='form-group'>
          <textarea rows='6' className='form-control' value={message} name='message' placeholder='Message' onChange={(e) => setMessage(e.target.value)} />
          <input type='submit' className='btn btn-primary' id='white' value='Submit' />
          </div>
          
        
      </form>
    </div>
  )
}

export default Contact
