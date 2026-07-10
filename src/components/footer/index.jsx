import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";   // 👈 add this
import './index.css';

const Footer = () => {
  return (
    <footer className="footer-container text-dark pt-5 pb-3" id="contact">
      <div className="container">
        <div className="row">

          {/* Contact Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 heading-dark">Contact Us</h5>
            <p className="mb-1 heading-light">
              <strong>Phone:</strong> +977 9851423263
            </p>
            <p className="mb-1 heading-light">
              <strong>Email:</strong> ssiplsales01@gmail.com
            </p>
            <p className="mb-0 heading-light">
              <strong>WhatsApp:</strong> +977 9851423263
            </p>
          </div>

          {/* Address Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 heading-dark">Our Address</h5>
            <p className="mb-0 heading-light">
              Factory - Rupandehi Butwal, Nepal (PIN: 32900)<br />
              Corporate Office - Near Blue Cross Hospital, Panchakuri galli tripureshwar, Kathmandu (PIN: 44600)
            </p>
          </div>

          {/* Certification Section ✅ */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 heading-dark">
              Certifications
            </h5>
            <Link
              to="/certification"
              className="heading-light text-decoration-none footer-link"
            >
              View Our Certifications
            </Link>
          </div>

          {/* Social Media Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 heading-dark">Follow Us</h5>
            <div className="d-flex gap-3 heading-light">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="heading-light fs-4"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="heading-light fs-4"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="heading-light fs-4"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center mt-3 heading-dark font-manrope">
          <h6>
            &copy; {new Date().getFullYear()} Samira Cotton Udyog Pvt. Ltd.
            All rights reserved.
          </h6>
          <div className="text-center mt-3 heading-dark font-manrope">
            <h5>ISO 9001:2015 Certified Company</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
