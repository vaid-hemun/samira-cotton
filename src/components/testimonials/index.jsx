import React, { useState, useEffect } from "react";
import { testimonials } from "./data";
import "./index.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 px-5 testimonial-container" id="testimonials">
      
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold testi-header heading-dark">
          What Our Clients Say
        </h2>
        <p className="testi-header-desc heading-light">
          Hear from our trusted partners and customers about their experience with us.
        </p>
      </div>

      {/* Testimonial Card (Slider) */}
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              
              <h6 className="card-title mb-2 text-success">
                {testimonials[currentIndex].type}
              </h6>
              <div className="mb-2">
  {"★★★★★"}
</div>
              <p className="card-text flex-grow-1 font-manrope">
                {testimonials[currentIndex].text}
              </p>

              <h6 className="mt-3 mb-0">
                {testimonials[currentIndex].name}
              </h6>

              <small className="text-muted font-manrope">
                {testimonials[currentIndex].designation}
              </small>

            </div>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="text-center mt-3">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              height: "10px",
              width: "10px",
              margin: "5px",
              display: "inline-block",
              borderRadius: "50%",
              background:
                index === currentIndex ? "#1c4b8c" : "#ccc",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

    </section>
  );
};

export default Testimonials;