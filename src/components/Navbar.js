import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link
          to="/"
          className={activeLink === "home" ? "nav-link active" : "nav-link"}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={activeLink === "projects" ? "nav-link active" : "nav-link"}
          onClick={() => handleLinkClick("projects")}
        >
          Projects
        </Link>
        <Link
          to="/experience"
          className={activeLink === "experience" ? "nav-link active" : "nav-link"}
          onClick={() => handleLinkClick("experience")}
        >
          Experience
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
