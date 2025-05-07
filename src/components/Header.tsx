import {NavLink} from "react-router-dom";
import "./Header.css";

interface HeaderProps {
  activeMenu: "projects" | "about" | "resume";
}

export const Header = ({ activeMenu }: HeaderProps): JSX.Element => {
  return (
      <div className="gnb-menu">
        <div className="gnb-wrapper">
          <div className="nav-links">
            <div className={`gnb-menu-wrapper ${activeMenu === "projects" ? "active" : ""}`}>
              <NavLink to="/">Projects</NavLink>
            </div>
            <div className={`gnb-menu-wrapper ${activeMenu === "about" ? "active" : ""}`}>
              <NavLink to="/about">About Me</NavLink>
            </div>
            <div className="gnb-menu-wrapper">
              <a href="https://drive.google.com/file/d/1JK3-3ASmIgYH5Ji6KOSQw8jR0yMM8Ycb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </div>
            <div className="gnb-menu-wrapper">
              <a href="https://www.linkedin.com/in/silvy-yang-27bbb015b/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};
