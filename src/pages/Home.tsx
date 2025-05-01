import { useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection.tsx";
import "./Home.css";
import ProjectSection from "../components/ProjectSection.tsx";

const Home = () => {
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

    return (
        <div className="Home">
                <HeroSection />
                <ProjectSection
                    title="Featured Work"
                    description="From concept to completion, these projects highlight my expertise in Product Design."
                    projectList={[
                        {
                            title: "Franchise Dashboard",
                            imageName: "project_1",
                            tagList: ["Web Design", "Research"],
                        },
                        {
                            title: "POS for Restaurant",
                            imageName: "project_2",
                            tagList: ["App Design", "User Test"],
                        },
                        {
                            title: "Smart Payroll for Owners",
                            imageName: "project_3",
                            tagList: ["App Design", "Research"],
                        },
                        {
                            title: "Easy e-Certificates",
                            imageName: "project_4",
                            tagList: ["App Design"],
                        },
                    ]}
                />
                <ProjectSection
                    title="Beyond the Interface"
                    description="I also explore user research and seasonal event to create impactful user experiences."
                    projectList={[
                        {
                            title: "Insight-Driven QR Sticker Redesign",
                            imageName: "project_5",
                            tagList: ["Research"],
                        },
                        {
                            title: "Engaging Users with Happy Moments",
                            imageName: "project_6",
                            tagList: ["Project Management"],
                        },
                    ]}
                />
            </div>
    );
};

export default Home;
