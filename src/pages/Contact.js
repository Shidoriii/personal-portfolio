// File Name: Contacts.js
// Name: Rumsha Ahmed | Student ID: 301477527 | Due Date: May 23rd, 2025

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', contact: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    navigate('/');
  };

  return (
    <div className="page contact">
        <h1>Contact Me</h1>
        <div>
            <p>Email: rahme.110@my.centennialcollege.ca</p>
            <p>Phone: (123) 456-7890</p>
        </div>
        <form onSubmit={handleSubmit}>
                <input placeholder="First Name" onChange={e => setFormData({...formData, firstName: e.target.value})} />
                <input placeholder="Last Name" onChange={e => setFormData({...formData, lastName: e.target.value})} />
                <input placeholder="Contact Number" onChange={e => setFormData({...formData, contact: e.target.value})} />
                <input placeholder="Email Address" type="email" onChange={e => setFormData({...formData, email: e.target.value})} />
                <textarea placeholder="Message" onChange={e => setFormData({...formData, message: e.target.value})} />
                <button type="submit">Send</button>
        </form>
    </div>
  );
}

export default Contact;