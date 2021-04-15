import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className="about">
      <h3>A little about me: </h3>
      <p>
        I am a full-stack software engineer with prior experience in
        administrative support, project assistance, program planning, and
        customer service.
      </p>
      <br></br>
      <p>
        I recieved my bachelors degree in Environmental Studies at DePaul
        University in 2013 and continue to be passionate about the environment
        and sustainability. Between then and now, I have had the pleasure of
        working with diverse clientele in a variety of industries from
        construction management assistance and event planning to teaching
        preschool and organizing recreational community programs. I recently
        completed a 12-week full-time software engineering course through
        General Assembly. Throughout this course, I completed 420 hours of
        instruction and developed 4 web application. These projects can be found
        in the{" "}
        <Link to="/projects" className="inline">
          projects
        </Link>{" "}
        section of my portfolio.
      </p>
      <br></br>
      <p>
        I currently work with the following languages, frameworks, and programs
        but am eager to expand my skills and look forward to continuing to grow
        as a developer:
      </p>
      <div className="icons">
        <img
          src="https://imgur.com/FzkawUh.png"
          alt="HTML, CSS, Javascript logos"
        />
        <img src="https://imgur.com/xM3Y0xt.png" alt="MERN logo" />
        <img src="https://imgur.com/RgKoW9W.png" alt="Git logo" />
        <img src="https://imgur.com/2yCG45b.png" alt="Ruby on Rails logo" />
        <img src="https://imgur.com/PJfS1k1.png" alt="Mongoose logo" />
        <img src="https://imgur.com/0mVr83u.png" alt="PostgreSQL logo" />
        <img src="https://imgur.com/frnX8x4.png" alt="Adobe XD logo" />
      </div>
    </div>
  );
}

export default About;
