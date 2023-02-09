import React from "react";
import emailjs from "emailjs-com";

function Email() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE}`,
        `${process.env.REACT_APP_TEMPLATE}`,
        e.target,
        `${process.env.REACT_APP_USERNAME}`
      )
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="main">
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <div className="name">
          <label>Name</label>
          <input type="text" name="to_name" />
        </div>
        <div className="email">
          <label>Email</label>
          <input type="email" name="from_email" />
        </div>
        <div className="message">
          <label>Message</label>
          <textarea name="message" />
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
export default Email;
