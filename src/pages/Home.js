import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, Im Kenneth</h2>
        <div className="prompt">
          <p>
            I am a passionate and dedicated software developer student, eager to
            learn and grow in the field of application development. I am
            constantly seeking new opportunities to expand my knowledge and
            enhance my skills. Creating innovative applications is not just a
            career path for me; it is a source of fulfillment and excitement. I
            am committed to staying updated with the latest technologies and
            best practices to deliver efficient and user-friendly solutions.
            With a strong determination and a thirst for knowledge, I am ready
            to embark on an exciting journey of creating impactful applications.
          </p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>HTML, CSS, React, NPM, BootStrap, MaterialUI, Yarn,</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, GraphQL MySQL, MongoDB, SQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript,</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
