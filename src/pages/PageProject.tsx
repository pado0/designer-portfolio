import { useState, useEffect, useCallback } from "react";
import case1Thumbnail from "../assets/case1-thumbnail.png";
import case2Thumbnail from "../assets/case2-thumbnail.png";
import closelook1 from "../assets/closelook-1.gif";
import closelook2 from "../assets/closelook-2.png";
import closelook3 from "../assets/closelook-3.png";
import closelook4 from "../assets/closelook-4.png";
import iconArrowLeft from "../assets/icon-arrow-left.svg";
import iconArrowRight from "../assets/icon-arrow-right.svg";
import "./PageProject.css";

const projects = [
  {
    image: closelook2,
    title: "Mobile QR Ordering",
    desc: "Built a review-friendly ordering flow and scaled it from scratch to 1,000 franchise locations.",
  },
  {
    image: closelook3,
    title: "Paying Fines—Before They're Late",
    desc: "Partnered with traffic enforcement to integrate fine notifications and payments into one seamless flow.",
  },
  {
    image: closelook1,
    title: "Branding for a New Ordering Habit",
    desc: "Collaborated with the brand team to introduce QR ordering to customers unfamiliar with the experience.",
  },
  {
    image: closelook4,
    title: "Better QR Sticker",
    desc: "After 1 month of research, found that owners preferred stickers that matched their store's colors.",
  },
];

export const PageProject = (): JSX.Element => {
  const [current, setCurrent] = useState(0);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, []);

  // 자동 슬라이드 효과
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      handleNext();
    }, 5000); // 5초마다 다음 슬라이드로

    return () => {
      window.clearInterval(intervalId);
    };
  }, [handleNext]);

  return (
    <div>
      <div className="page-project">
        <div className="div-2">
          <div className="thumbnail-wrapper">
            <img className="thumbnail" alt="Thumbnail" src={case1Thumbnail} />
          </div>

          <div className="case-thumbnail-wrapper">
            <img className="thumbnail" alt="Thumbnail" src={case2Thumbnail} />
          </div>

          <p className="hi-i-m-silvy-yang-i">
            Hi, I'm Silvy Yang.
            <br />I turn MVPs into scalable products—fast.
          </p>

          <div className="text-wrapper-2">Quick Looks</div>
          <div className="text-wrapper-3">Case Study</div>

          <div className="closelook-wrapper">
            <img
              key={current}
              className="closelook slide-fade"
              alt="Closelook"
              src={projects[current].image}
            />
          </div>

          <img 
            className="img" 
            alt="Left" 
            src={iconArrowLeft} 
            onClick={handlePrev}
            style={{ cursor: 'pointer' }}
          />
          <img 
            className="image" 
            alt="Right" 
            src={iconArrowRight} 
            onClick={handleNext}
            style={{ cursor: 'pointer' }}
          />

          <div key={current} className="frame-2 slide-fade">
            <div className="text-wrapper-4">{projects[current].title}</div>
            <p className="p">{projects[current].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
