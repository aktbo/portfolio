import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-pgcon">
      <div className="contact-infocon">
        <p id="p-1">
          Aaron Thibeaux <br /> +1(337)300-6843 <br /> aktbomusic@gmail.com
        </p>
      </div>
      <div className="contact-formcon">
        <h1>Contact Me</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name-i"
            name="name"
            placeholder="Your name.."
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
