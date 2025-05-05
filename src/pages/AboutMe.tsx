import "./AboutMe.css";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import {Header} from "../components/Header.tsx";

export const AboutMe = (): JSX.Element => {
  return (

    <div className="aboutme-main-container">
      <Header activeMenu="projects"></Header>
      <div className="aboutme-container">
      <h1 className="aboutme-title">About Me</h1>
      <section className="aboutme-section">
        <div className="aboutme-image-wrapper">
          <img className="aboutme-image" src={about1} alt="Freediving" />
        </div>
        <div className="aboutme-text-wrapper">
          <h2 className="aboutme-section-title">When in Doubt, Dive Deep</h2>

          <p className="aboutme-section-desc">
            I like solving tough problems without losing my cool. Curiosity keeps me moving—and I love seeing things through, start to finish.<br />
            <br />
            Feel free to contact me: <a href="mailto:fullpomos@gmail.com">fullpomos@gmail.com</a>
          </p>
        </div>
      </section>
      <section className="aboutme-section">
        <div className="aboutme-image-wrapper">
          <img className="aboutme-image" src={about2} alt="Band Performance" />
        </div>
        <div className="aboutme-text-wrapper">
          <h2 className="aboutme-section-title">Team Player? I Made a Whole Band</h2>
          <p className="aboutme-section-desc">
            I formed an office rock band from scratch—recruited devs, jammed at work, and performed four times for 2,000+ employees. That's how much I love cross-functional collaboration.
          </p>
        </div>
      </section>
      <section className="aboutme-section">
        <div className="aboutme-image-wrapper">
          <img className="aboutme-image" src={about3} alt="Keep Calm" />
        </div>
        <div className="aboutme-text-wrapper">
          <h2 className="aboutme-section-title">Keep Calm and Bring It On</h2>
          <p className="aboutme-section-desc">
            When I need a reset, I freedive. Holding my breath underwater is my version of meditation—it clears my head and recharges my creativity.
          </p>
        </div>
      </section>
    
    </div>
    </div>
  );
}; 