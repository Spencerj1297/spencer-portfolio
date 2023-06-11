import React, { useState } from "react"
import axios from "axios"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://formspree.io/f/xknallla', {
        name,
        email,
        message,
      });
      console.log(response);
      // Optionally, display a success message or perform any other actions upon successful form submission.
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during form submission.
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:"smooth"
    }) 
  }
    
  return (
  <div>
    <h1 className="subHeaderContact" id="subHeaderContact" >Contact Me</h1>
    <form onSubmit={handleSubmit}>
      <div>
      <input className="your-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      </div>
      <div>
      <input className="your-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      </div>
      <div>
      <textarea className="your-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
      </div>
      <button onClick={scrollToTop} type="submit" className="send-a-message">Submit</button>
    </form>
  </div>
  );
};


export default Contact
