import "./AboutMe.css";
import band from "../assets/band.png";
import yoga from "../assets/yoga.png";
import video from "../assets/ScreenRecording_04-15-2025_19-28-47_1.mov";

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <div className="FullTitle">
                <h1>About Me</h1>
                <p>Discover more about my journey and what drives me as a designer.</p>
            </div>
            <div className="about-card">
                <h2>I Love Side Projects at Work</h2>
                <p>
                    During the Christmas season, I had a fun idea—"What if Santa showed up on our card reader?"
                    So I gathered an Android dev and a 3D artist, and we made it happen: Santa waving and saying "Merry Christmas" at checkout.
                    I also ran a "Spot the Santa" event on Instagram, and it became our <strong>most-tagged company campaign ever.</strong>
                    Now it's a seasonal tradition, and still one of the most joyful things I've shipped.
                </p>
                <video controls className="about-video">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="about-card">
                <h2>I Thrive on Collaboration (and Scaling It)</h2>
                <p>
                    I love persuading, debating, and building better ideas together. At my last company, I'd just started learning bass guitar when I told the frontend dev next to me, "You should start guitar lessons—we're starting a cool rock band."
                    I gathered teammates, practiced after hours, and performed live four times in front of 1,000+ colleagues. Yes, we even had a small fan club.
                    I love making things bigger than myself—with people.
                </p>
                <img src={band} alt="Band performance" className="about-image" />
            </div>

            <div className="about-card">
                <h2>I Protect My Energy to Stay Creative</h2>
                <p>
                    Band life might sound outgoing, but I'm actually an introvert. Socializing drains me, and life can be overwhelming—especially when you're hustling in a new country.
                    Yoga and freediving became my way to reset. Both taught me how to slow down, clear my mind, and breathe through stress. They've helped me stay grounded and recover from burnout—so I can return with fresh ideas and full focus.
                </p>
                <img src={yoga} alt="Yoga practice" className="about-image" />
            </div>
        </div>
    );
};

export default AboutMe; 