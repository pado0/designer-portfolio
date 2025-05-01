import { useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import "./Home.css";
import ProjectSection from "../components/ProjectSection";
import AboutMe from "../components/AboutMe";

const Home = () => {
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

    return (
        <div className="Home">
            <div className="section">
                <HeroSection />
            </div>
            <div className="section">
                <ProjectSection
                    title="Case Study"
                    description="From concept to completion, these projects highlight my expertise in Product Design."
                    projectList={[
                        {
                            title: "How I Reinvented POS UX—and Drove +40% Growth",
                            imageName: "project_1",
                            tagList: ["Web Design", "Research"],
                        },
                        {
                            title: "Franchise-Ready Dashboard: From MVP to Growth Drivert",
                            imageName: "project_2",
                            tagList: ["App Design", "User Test"],
                        }                   
                    ]}
                />
            </div>
            <div className="section">
                <AboutMe />
            </div>
        </div>
    );
};

export default Home;
