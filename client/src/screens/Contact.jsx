import React from 'react';
import { Mail } from "react-feather"

function Contact(props) {
  return (
    <div className="contact">
      <h3>Let's connect!</h3>
      <p><Mail /> &nbsp; owen.brittany@gmail.com</p>

      {/* <br></br>
      <a href="https://www.linkedin.com/in/bnowen/" rel="noreferrer" target="_blank" className="inline">LinkedIn: Brittany Owen</a> */}
    </div>
  );
}

export default Contact;