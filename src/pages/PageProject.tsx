import {useState, useEffect, useCallback} from "react";
// import {useNavigate} from "react-router-dom";
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
    const [hovered, setHovered] = useState<null | 'case1' | 'case2'>(null);
    // const navigate = useNavigate();

    const handleNext = useCallback(() => {
        setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, []);

    const handlePrev = useCallback(() => {
        setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }, []);

    // const handleCaseStudy1Click = () => {
    //     // navigate("/casestudy1");
    // };

    // const handleCaseStudy2Click = () => {
    //     // navigate("/casestudy2");
    // };

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
        <div className="page-project">
            <p className="hi-i-m-silvy-yang-i">
                Hi, I'm Silvy Yang.
                <br/>I turn MVPs into scalable products—fast.
            </p>
            <div className="case-study-text">Case Study</div>
            <div
                className="case1-thumbnail-wrapper"
                onMouseEnter={() => setHovered('case1')}
                onMouseLeave={() => setHovered(null)}
                style={{cursor: 'pointer'}}
            >
                <a href="https://stingy-alto-975.notion.site/How-I-Reinvented-POS-UX-and-Drove-40-Growth-1ea21919550a806e9428cebad06f3fcc"
                   target="_blank" rel="noopener noreferrer">
                    <img className="thumbnail" alt="Thumbnail" src={case1Thumbnail}/>
                    <div className="case-dim-overlay" style={{opacity: hovered === 'case1' ? 1 : 0}}>
                        <span className="case-overlay-text">
                            How I Reinvented POS UX<br/>—and Drove +40% Growth
                        </span>
                    </div>
                </a>
            </div>

            <div
                className="case2-thumbnail-wrapper"
                onMouseEnter={() => setHovered('case2')}
                onMouseLeave={() => setHovered(null)}
                style={{cursor: 'pointer'}}
            >
                <a href="https://stingy-alto-975.notion.site/Franchise-Ready-Admin-From-MVP-to-Growth-Driver-1ea21919550a80a3884ee52352659d02"
                   target="_blank" rel="noopener noreferrer">
                    <img className="thumbnail" alt="Thumbnail" src={case2Thumbnail}/>
                    <div className="case-dim-overlay" style={{opacity: hovered === 'case2' ? 1 : 0}}>
                        <span className="case-overlay-text">
                            Franchise-Ready Admin:<br/>From MVP to Growth Driver
                        </span>
                    </div>
                </a>
            </div>

            <div className="quick-look-text">Quick Looks</div>

            <div className="closelook-image-wrapper">
                <img
                    key={current}
                    className="closelook-image slide-fade"
                    alt="Closelook"
                    src={projects[current].image}
                />
            </div>

            <div className="closelook-arrow-text-wrapper">
                <div key={current} className="closelook-text-wrapper slide-fade">
                    <div className="closelook-title">{projects[current].title}</div>
                    <p className="closelook-text">{projects[current].desc}</p>
                </div>
                <div className="arrow-wrapper">
                    <img
                        className="left-arrow"
                        alt="Left"
                        src={iconArrowLeft}
                        onClick={handlePrev}
                        style={{cursor: 'pointer'}}
                    />
                    <img
                        className="right-arrow"
                        alt="Right"
                        src={iconArrowRight}
                        onClick={handleNext}
                        style={{cursor: 'pointer'}}
                    />
                </div>
            </div>
        </div>
    );
};
