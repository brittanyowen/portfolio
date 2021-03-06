import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className="about">
      <h3>About Me: </h3>
      <p>
        I am a full-stack software engineer with prior experience in
        administrative support, project assistance, program planning, and
        customer service. I am currently employed as an Application Developer at
        the Shedd Aquarium.
      </p>
      <br></br>
      <p>
        I recieved my Bachelor's Degree in Environmental Studies at DePaul
        University in 2013 and continue to be passionate about the environment
        and sustainability. Between then and now, I have had the pleasure of
        working with diverse clientele in a variety of industries from
        construction management assistance and event planning to teaching
        preschool and organizing recreational community programs. I recently
        completed a 12-week full-time software engineering course through
        General Assembly. Throughout this course, I completed 420 hours of
        instruction and developed 4 web applications. These projects can be
        found in the{" "}
        <Link to="/projects" className="inline">
          projects
        </Link>{" "}
        section of my portfolio.
      </p>
      <br></br>
      <p>
        I have experience working with the following languages, frameworks, and
        programs but am eager to expand my skills and look forward to continuing
        to grow as a developer:
      </p>
      <div class="languages">
        <ul>
          <li>HTML</li>
          <li>CSS and Sass</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Ruby on Rails</li>
          <li>SQL</li>
          <li>Express/Mongoose</li>
        </ul>
        <ul>
          <li>Adobe XD and Figma</li>
          <li>Git and GitHub</li>
          <li>RestAPIs</li>
          <li>rSpec</li>
          <li>CircleCI</li>
          <li>Confluence and JIRA</li>
          <li>Node and npm libraries</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
