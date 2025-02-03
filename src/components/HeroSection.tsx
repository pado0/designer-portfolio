import profile from "./../assets/profile.png";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="HeroSection">
            <img src={profile} alt="profile" />
            <div>
                <h2>Hi there, I'm </h2>
                <h1>
                    Silvy Yang<br />
                    Product Designer
                </h1>
                <p>
                    A 6 year+ UI/UX designer dedicated to bridging creativity with user-centric
                    design principles, sculpting intuitive digital experiences that resonate with audiences.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
