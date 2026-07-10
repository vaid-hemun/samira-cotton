import React, { useState, useEffect } from "react";
import SurgicalGroup from "../../assets/images/surgicalGroup.png";
import img1 from "../../assets/images/heroImg1.jpg";
import img2 from "../../assets/images/heroImg.png";
import "./index.css";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Reliable Medical Equipments",
    text: "As a trusted manufacturer, seller, and trader of medical equipment, we deliver certified, high-quality products.",
    image: img1,
    buttonText: "Explore Our Products",
    buttonLink: "/our-products",
  },
  // {
  //   title: "Nepal's #1 ISO-Certified Company",
  //   text: "Nepal's First ISO-Certifies Company in Healthcare & Medical Supplies",
  //   image: img2,
  //   buttonText: "View Certificates",
  //   buttonLink: "/certification",
  // },
  // {
  //   title: "Orthopedic rehabilation Products",
  //   text: "Delivering modern medical equipment designed for efficiency.",
  //   image: SurgicalGroup,
  //   buttonText: "Explore",
  //   buttonLink: "/",
  // },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${slides[current].image})`,
      }}
    >
      <div className="hero-overlay">

        {/* CONTENT BOX */}
        <div className="hero-box">
          <h1 className="hero-title">
            {slides[current].title}
          </h1>

          <p className="hero-text">
            {slides[current].text}
          </p>

          <div className="hero-buttons">
            <button
              className="btn dark-bg-button"
              onClick={() => navigate(slides[current].buttonLink)}
            >
              {slides[current].buttonText}
            </button>

            <button
              className="btn btn-outline-lights"
              onClick={() => navigate("/contact")}
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* DOTS */}
        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${
                current === index ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;