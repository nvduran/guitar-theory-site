import React from "react";
import "../../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p className="updated-date-p">Last updated: December 18, 2022</p>
      <p>
        We are committed to protecting your privacy and personal data. This
        privacy policy explains how we collect, use, and share your personal
        data when you visit our website.
      </p>
      <p>
        When you visit our website, we may collect your IP address and location
        data. This information is used to improve the performance of our website
        and to understand how users interact with our site. We do not use this
        information to personally identify you.
      </p>
      <p>
        We do not sell or share your personal data with third parties, except as
        necessary to fulfill your requests or as required by law.
      </p>
      <p>
        We take appropriate technical and organizational measures to protect
        your personal data from unauthorized access, misuse, or disclosure.
      </p>
      <p>
        If you have any questions or concerns about our privacy practices,
        please contact us <a href="https://github.com/nvduran">here</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
