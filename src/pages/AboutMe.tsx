import "./AboutMe.css";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";

export const AboutMe = (): JSX.Element => {
  return (
    <div className="aboutme-main-container">
      <section className="aboutme-section profile-section">
        <div className="aboutme-image-wrapper">
          <img className="aboutme-image" src={about1} alt="Profile" />
        </div>
        <div className="aboutme-text-wrapper">
          <h1 className="aboutme-title-main">Silvy Yang</h1>
          <h2 className="aboutme-role">Product Designer</h2>
          <p className="aboutme-desc">Turning MVPs into scalable, delightful products.</p>
          <ul className="aboutme-facts">
            <li>🌏 Based in Korea</li>
            <li>🎨 UX/UI for SaaS & B2B</li>
            <li>💡 User research & prototyping</li>
            <li>🛠️ Figma, Framer, Notion, Zeplin, Adobe CC</li>
            <li>🌱 Always learning and iterating</li>
          </ul>
          <div className="aboutme-links">
            <a href="mailto:silvy@example.com">✉️ silvy@example.com</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
      <section className="aboutme-section band-section">
        <div className="aboutme-image-wrapper">
          <img className="aboutme-image" src={about2} alt="Band Performance" />
        </div>
        <div className="aboutme-text-wrapper">
          <h2 className="aboutme-section-title">밴드 공연</h2>
          <p className="aboutme-section-desc">음악을 사랑하는 디자이너로, 밴드에서 보컬로 활동하며 창의력과 협업 능력을 키웠습니다. 무대 위에서의 경험은 사용자와의 소통에도 큰 도움이 되었습니다.</p>
        </div>
      </section>
      <section className="aboutme-section freedive-section">
        <div className="aboutme-image-wrapper">
          <img className="aboutme-image" src={about3} alt="Freediving" />
        </div>
        <div className="aboutme-text-wrapper">
          <h2 className="aboutme-section-title">프리다이빙</h2>
          <p className="aboutme-section-desc">프리다이빙을 통해 집중력과 침착함을 기릅니다. 깊은 바다에서의 경험은 문제 해결과 디자인에도 긍정적인 영향을 줍니다.</p>
        </div>
      </section>
    </div>
  );
}; 