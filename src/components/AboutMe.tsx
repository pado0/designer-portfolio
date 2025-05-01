import React from 'react';
import "./AboutMe.css";
import band from "../assets/band.png";
import yoga from "../assets/yoga.png";
import video from "../assets/ScreenRecording_04-15-2025_19-28-47_1.mov";

const AboutMe: React.FC = () => {
    return (
        <div className="AboutMe">
            <div className="FullTitle">
                <h1>About Me</h1>
                <p>Discover my journey, passions, and what drives me as a designer</p>
            </div>

            <div className="about-card">
                <div className="about-content">
                    <h2>I Love Side Projects at Work</h2>
                    <p>
                        <strong>Christmas at the Card Reader</strong> - I led a Christmas project where Santa appeared at the card reader, creating a magical moment for customers. The video went viral on Instagram, reaching over 1M views and generating significant engagement.
                    </p>
                </div>
                <div className="about-media">
                    <video className="about-video" controls>
                        <source src="/christmas.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className="about-card">
                <div className="about-content">
                    <h2>I Thrive on Collaboration (and Scaling It)</h2>
                    <p>
                        <strong>From Design Team to Band</strong> - I formed a band with my colleagues, combining our creative energies. We performed live at company events, bringing our collaborative spirit to the stage and strengthening our team bond.
                    </p>
                </div>
                <div className="about-media">
                    <img src={band} alt="Band Performance" className="about-image" />
                </div>
            </div>

            <div className="about-card">
                <div className="about-content">
                    <h2>I Protect My Energy to Stay Creative</h2>
                    <p>
                        <strong>Yoga & Freediving</strong> - As an introvert, I've learned to manage my energy through yoga and freediving. These practices help me maintain focus and creativity in my work, allowing me to deliver my best designs.
                    </p>
                </div>
                <div className="about-media">
                    <img src={yoga} alt="Yoga Practice" className="about-image" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe; 