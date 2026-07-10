import React from "react";
import "./index.css";
import certificateImg from "../../assets/images/certificates/Certificate1.jpeg";

const Certification = () => {
  return (
    <div className="certificate-page">
      <div className="certificate-header">
        <h2>Our Certifications</h2>
        <p>Trusted • Verified • Certified</p>
      </div>

      <div className="certificate-wrapper">
        <img
          src={certificateImg}
          alt="Company Certification"
          className="certificate-image"
        />
      </div>
    </div>
  );
};

export default Certification;
