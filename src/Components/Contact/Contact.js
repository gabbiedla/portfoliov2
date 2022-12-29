import '../Contact/Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_71o9cir',
        'template_if7f782',
        form.current,
        'RVqJcC8XGbk5W6I8h'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset(); //add message sent. make button clickable
  };

  return (
    <div className="contact-Container" id="Contact">
      <div className="contact-sub-container">
        <div className="contact-Copy">
          <h1>Get in touch</h1>
          <h2>I'd love to hear from you!</h2>
        </div>
        <form ref={form} onSubmit={sendEmail} className="form-Section">
          <label>Full Name</label>
          <input
            type="text"
            placeholder=" Enter your name..."
            name="name"
            className="name-Field"
            tabIndex="1"
          ></input>
          <label>Email</label>
          <input
            type="text"
            placeholder=" Enter your email..."
            name="email"
            className="email-Field"
            tabIndex="2"
          ></input>
          <label>Message</label>
          <textarea
            type="text"
            placeholder=" Type a message..."
            name="message"
            className="email-Field"
            tabIndex="3"
          ></textarea>
          <input className="submit-btn" type="submit" value="Send" />
          {/* <input type="submit" value="Send" className="submit-btn"></input> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
