import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="form_container ">
       <h3 className='form_title' ><label htmlFor="name">Contact Us</label></h3>
      <form onSubmit={handleSubmit}>
    
        <div>
          <div className='row'>
            <label htmlFor="name" className='col-2 col-md-4'>Name</label>
            <input
              className='col-8 col-md-6'
              type="text"
              id="name"
              name="name"
              placeholder='Please Enter Your Name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='row'>
            <label htmlFor="email" className='col-2 col-md-4'>Email</label>
            <input
              className='col-8 col-md-6'
              type="email"
              id="email"
              name="email"
              placeholder='Please Enter your Email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='row'>
            <label htmlFor="mobile" className='col-2 col-md-4'>Mobile</label>
            <input
              className='col-8 col-md-6'
              type="tel"
              id="mobile"
              name="mobile"
              placeholder='Please Enter Your Number'
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div className='row'>
            <label htmlFor="message" className='col-2 col-md-4'>Your message (optional)</label>
            <textarea
              className='col-lg-8 col-md-6 col-4'
              id="message"
              name="message"
              placeholder='Type your message here'
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='d-flex justify-content-center'>
        <button type="submit" className='btn btn-outline-success'>SUBMIT</button>
        </div>
      </form>

    </div>

  );
};

export default ContactForm;
