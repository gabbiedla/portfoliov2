import '../Contact/Contact.css';

function Contact() {
  return (
    <div className="contact-Container" id="Contact">
      <div className="contact-Copy">
        <h1>Get in touch</h1>
        <h2>I'd love to hear from you!</h2>
      </div>
      <form className="form-Section">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name..."
          name="firstName"
          className="first-Field"
          tabIndex="1"
        ></input>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email..."
          name="firstName"
          className="last-Field"
          tabIndex="1"
        ></input>
        <label>Message</label>
        <input
          type="text"
          placeholder="Type a message..."
          name="firstName"
          className="email-Field"
          tabIndex="1"
        ></input>
        <input type="submit" value="Send" className="submit-btn"></input>
      </form>
    </div>
  );
}

export default Contact;
