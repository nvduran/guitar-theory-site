import React from "react";
import "../../styles/About.css";

const About = () => {
  return (
    <div className="about-page-container-div">
      <h1>About</h1>
      <p>This website was created by Nick Duran.</p>
      <p>
        You can check out my GitHub profile at{" "}
        <a href="https://github.com/nvduran">https://github.com/nvduran</a>.
      </p>
      <p>
        For more information about how we handle your personal data, please see
        our <a href="https://guitar-theory.com/PrivacyPolicy">Privacy Policy</a>
        .
      </p>
    </div>
  );
};

export default About;
