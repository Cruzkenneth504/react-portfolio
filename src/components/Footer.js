import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/cruzkenneth504/">
          <LinkedInIcon />
        </a>
        <a href="cruzkenneth504@gmail.com">
          <EmailIcon />
        </a>
        <a href="https://github.com/Cruzkenneth504">
          < GithubIcon/>
        </a>
      </div>
      <p>Thank you 👻</p>
    </div>
  );
}

export default Footer;
