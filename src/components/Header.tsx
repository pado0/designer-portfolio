import PropTypes from "prop-types";
import "./Header.css";

export const Header = (): JSX.Element => {
  return (
    <div className="gnb-menu">
      <div className="gnb-wrapper">
        <div className="nav-links">

          <div className="gnb-menu-wrapper">
            <a href="/projects">Projects</a>
          </div>

          <div className="gnb-menu-wrapper">
            <a href="/about">About Me</a>
          </div>

          <div className="gnb-menu-wrapper">
            <a href="/resume">Resume</a>
          </div>
          <div className="gnb-menu-wrapper">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
