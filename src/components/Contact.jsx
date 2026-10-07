import React from "react";
import profile from "../assets/images/logo.jpeg";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="side">
          <img src={logo} alt="#" />
          <p>
            I build projects that are visually <br /> appealing and easy to use.
          </p>
        </div>
        <div className="left">
          <h3>Let's Work Together</h3>
          <p>Have a project idea? Contact Me.</p>
          <h5>Email</h5>
          <span>chukwunekestephanie038@gmail.com</span>
          <h5>Phone</h5>
          <span>+234 904 670 5005</span>
        </div>
        <div className="right">
          <h4>Your Details</h4>
          <div className="input">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Email" />
            </div>
          </div>
          <h4>Your Message</h4>
          <textarea placeholder="Type in your Message"></textarea>
        </div>
      </div>
    </>
  );
}

export default Contact;
