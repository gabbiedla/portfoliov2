import '../Contact/Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
  const [fields, setFields] = useState('visible');
  const [confirm, setConfirm] = useState('confirm-m hidden');
  const [isSendClicked, setIsSendClicked] = useState(false);
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

  const confirmMessage = () => {
    if (!isSendClicked) {
      setFields('hidden');
      setConfirm('confirm-m visible');
    } else {
      setFields('visible');
      setConfirm('hidden');
    }
    setIsSendClicked(!isSendClicked);
  };

  return (
    <div className="contact-Container" id="Contact">
      <div className="contact-sub-container">
        <div className="contact-Copy">
          <h1>Get in touch</h1>
          <h2>I'd love to hear from you!</h2>
        </div>
        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="form-Section"
            id="contact-submissions"
          >
            <label className={fields}>Full Name</label>
            <input
              type="text"
              placeholder=" Enter your name..."
              name="name"
              className={fields}
              tabIndex="1"
            ></input>
            <label className={fields}>Email</label>
            <input
              type="text"
              placeholder=" Enter your email..."
              name="email"
              className={fields}
              tabIndex="2"
            ></input>
            <label className={fields}>Message</label>
            <textarea
              type="text"
              placeholder=" Type a message..."
              name="message"
              className={fields}
              tabIndex="3"
            ></textarea>
            <input
              className={fields}
              onClick={confirmMessage}
              type="submit"
              value="Send"
              id="submit-btn"
            />
            <h4 className={confirm}>Your message has been sent!</h4>
            {/* <input type="submit" value="Send" className="submit-btn"></input> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
