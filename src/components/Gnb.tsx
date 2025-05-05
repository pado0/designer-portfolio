import PropTypes from "prop-types";
import "./Gnb.css";

interface Props {
  property1: "variant-2" | "default";
}

export const Gnb = ({ property1 }: Props): JSX.Element => {
  return (
    <div className="GNB">
      <div className="frame">
        <div className="nav-links">
          <div className={`text-wrapper ${property1}`}>
            <a href="/">Home</a>
          </div>
          <div className={`div property-1-${property1}`}>
            <a href="/about">About</a>
          </div>
          <div className="div-2">
            <a href="/projects">Projects</a>
          </div>
          <div className="div-2">
            <a href="/resume">Resume</a>
          </div>
          <div className="div-2">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

Gnb.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
