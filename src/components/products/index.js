import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.css";
import catalogData from "./product";
import Product1 from "../../assets/images/category1.png";
import Product2 from "../../assets/images/category2.png";
import Product3 from "../../assets/images/category3.png";
import Product4 from "../../assets/images/category4.png";
import Product5 from "../../assets/images/category5.png";
import Product6 from "../../assets/images/category6.png";
import Product7 from "../../assets/images/category7.png";
import Product8 from "../../assets/images/category8.png";


const images = [Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8];

// Split data into slides of 4 items
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Healthcare & Diagnostic Equipment");

const location = useLocation();

useEffect(() => {
  if (location.state?.category) {
    setSelectedCategory(location.state.category);
  }
}, [location]);

  const slides = chunkArray(catalogData, 4);

  const navigate = useNavigate();

  const handleViewCatalogue = () => {
    navigate('/our-products')
  }


  return (
    <div className="container py-5" id='products'>

      {/* HEADER */}
      <div className="text-center mb-5">
        <h2 className="fw-bold heading-dark">Our Products</h2>
        <p className="heading-light">
          Comprehensive range of medical & healthcare solutions
        </p>
      </div>

      {/* CAROUSEL WRAPPER */}
      <div className="products-carousel-wrapper">

        <div
          id="productsCarousel"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-stage">
            {/* LEFT ARROW */}
            <button
              className="carousel-control-prev custom-carousel-arrow"
              type="button"
              data-bs-target="#productsCarousel"
              data-bs-slide="prev"
            >
              <span aria-hidden="true">‹</span>
            </button>

            {/* RIGHT ARROW */}
            <button
              className="carousel-control-next custom-carousel-arrow"
              type="button"
              data-bs-target="#productsCarousel"
              data-bs-slide="next"
            >
              <span aria-hidden="true">›</span>
            </button>
            <div className="carousel-inner">

              {slides.map((group, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
                >
                  <div className="row g-4">
                    {group.map((item, index) => (
                      <div className="col-md-6 col-lg-3 carousel-product-col" key={index}>
                        <ProductCard
                          title={item.category}
                          description={item.description}
                          image={images[slideIndex * 4 + index]}
                        />
                      </div>

                    ))}
                  </div>
                </div>
              ))}


            </div>

          </div>

        </div>
      </div>

      {/* CTA */} <div className="text-center mt-5">
        <button className="btn px-5 py-2 dark-bg-button"
          onClick={handleViewCatalogue}
        > View Full Catalogue </button>
      </div>
    </div>
  );
};

const ProductCard = ({ title, description, image }) => (
  <div className="product-card h-100">
    <img src={image} alt={title} className="product-img" />
    <h5 className="mt-3 fw-bold">{title}</h5>
    <p className="text-muted small">{description}</p>
  </div>
);

export default Products;
