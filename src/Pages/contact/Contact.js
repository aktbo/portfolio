import React, { useState } from "react";
import "./Contact.css";

// const messageTaHeight = {
//   height: "290px",
// };
// const subjectTaHeight = {
//   height: "120px",
// };

const Contact = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="contact-pgcon">
      <div className="contact-border" id="con-box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="contact-formcon">
        <div id="con-insidecon">
          <p id="con-head">Contact Me</p>
          <p id="p-1">
            aktbomusic@gmail.com <br /> +1(337)300-6843
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name<font color="#ff0066">*</font>
            </label>
            <input
              type="text"
              id="name-i"
              name="name"
              placeholder="Your Name.."
              required
              // style={subjectTaHeight}
            />
            <label htmlFor="email">
              Email<font color="#ff0066">*</font>{" "}
            </label>
            <input
              type="text"
              id="email-i"
              name="email"
              placeholder="Your email.."
              required
            />
            <label htmlFor="message">
              Message<font color="#ff0066">*</font>
            </label>

            <textarea
              type="text"
              id="message-i"
              name="message"
              placeholder="The message.."
              required
              // style={messageTaHeight}
            />
            <input type="submit" id="submit-i"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
