import React from "react";
import { Mail, Send } from "react-feather";

function Contact(props) {
  return (
    <div className="contact">
      <h3>Let's connect!</h3>
      <p>
        <Mail /> &nbsp; owen.brittany@gmail.com
      </p>
      <form
        action="https://getform.io/f/226df11a-1393-42c8-81e8-4c98d6de6ab3"
        method="POST"
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name"/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea type="text" name="message" rows={10} />
        </div>
        <button id="send" type="submit">
          <Send />
        </button>
      </form>
    </div>
  );
}

export default Contact;
