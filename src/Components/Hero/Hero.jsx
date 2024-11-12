import "./Hero.css";
import Arrow_icon from "../../assets/dark-arrow.png";

function Hero() {
  return (
    <div className="hero nav-container">
      <div className="hero-text">
        <h1>We ensure better education for better world </h1>
        <p>
          Our cutting edge Curriculam is Designed to empower students with the
          knowledge , skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="explore-btn">
          Explore more <img src={Arrow_icon} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
