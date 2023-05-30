import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, Im Kenneth</h2>
        <div className="prompt">
          <p>
            I am a passionate software development student with a strong drive
            for learning and growth. Creating innovative applications is not
            just a career path, but a source of fulfillment and excitement for
            me. I strive to stay updated with the latest technologies and best
            practices to deliver efficient and user-friendly solutions. With a
            strong determination and thirst for knowledge, I am ready to embark
            on an exciting journey of creating impactful applications
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
