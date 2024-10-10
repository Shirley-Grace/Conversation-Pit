import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="form">
        <form>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>

          <div className="input-group">
            <label htmlFor="number">Phone No.</label>
            <input type="text" id="number" required />
          </div>

          <div className="input-group">
            <label htmlFor="name">Email</label>
            <input type="text" id="email" required />
          </div>

          <div className="input-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="8" required>  </textarea>
          </div>

          <button type="submit">SUBMIT</button>

        </form>
      </div>
    </div>
  );
}

export default Contact;
