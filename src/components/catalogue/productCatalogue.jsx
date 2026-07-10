import { useState , useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import  {categories}  from "./products";

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeSub, setActiveSub] = useState(
    categories[0].subcategories ? categories[0].subcategories[0] : null
  );
  const location = useLocation();
  useEffect(() => {
  if (!location.state) return;

  // set category
  if (location.state?.category) {
    const foundCat = categories.find(
      cat => cat.name === location.state.category
    );
    if (foundCat) {
      setActiveCategory(foundCat);
      setActiveSub(foundCat.subcategories?.[0] || null);
  }
  }

  // set subcategory (convert id → object)
  if (location.state.subcategory) {
    const allSubs = categories.flatMap(cat => cat.subcategories || []);
    const foundSub = allSubs.find(
      sub => sub.id === location.state.subcategory
    );

    if (foundSub) setActiveSub(foundSub);
  }
}, [location]);

  const hasSubcategories = !!activeCategory.subcategories;
  const[selectedProduct,setSelectedProduct]=useState(null);

  const getCategoryDescription = ()  => {
    return activeCategory?.description || 
    "High-quality medical product designed for reliability and performance.";

  };

  return (
    <div className="container-fluid catalog-page section-light-blue">
      <hr />

      <div className="row">

        {/* ================= DESKTOP SIDEBAR ================= */}
        <div className="col-md-3 sidebar d-none d-md-block">
          <div className="sidebar-card">
            <h6 className="sidebar-title">Categories</h6>

            <div className="list-group list-group-flush">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`sidebar-item ${
                    cat.id === activeCategory.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveSub(cat.subcategories?.[0] || null);
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="col-md-9 content-area">

          {/* ========== MOBILE TOP FILTERS ========== */}
          <div className="mobile-top-filters d-md-none">

            {/* SUBCATEGORY FIRST */}
            {hasSubcategories && (
              <div className="subcategory-scroll mobile-subcategory">
                {activeCategory.subcategories.map((sub) => (
                  <button
                    key={sub.id}
                    className={`subcategory-chip ${
                      activeSub?.id === sub.id ? "active" : ""
                    }`}
                    onClick={() => setActiveSub(sub)}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            )}

            {/* CATEGORY SECOND */}
            <div className="mobile-category-bar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`mobile-category-chip ${
                    cat.id === activeCategory.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveSub(cat.subcategories?.[0] || null);
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* ========== DESKTOP SUBCATEGORY PILLS ========== */}
          {hasSubcategories && (
            <ul className="nav subcategory-pills mb-4 d-none d-md-flex">
              {activeCategory.subcategories.map((sub) => (
                <li className="nav-item" key={sub.id} style={{marginTop:'10px'}}>
                  <button
                    className={`nav-link ${
                      activeSub?.id === sub.id ? "active" : ""
                    }`}
                    onClick={() => setActiveSub(sub)}
                  >
                    {sub.name}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* ========== IMAGE GRID ========== */}
          <div className="row">
            {(hasSubcategories 
  ? activeSub.products || []
  : activeCategory.products || []
).map((item, index) => (
  <div
  className="col-6 col-sm-6 col-md-4 col-lg-3  mb-4"
  onClick={() => setSelectedProduct(item)}
  style={{ cursor: "pointer" }}
  key={index}
>
  <div className="product-card">
    <div className="product-image-wrapper">
      <img src={item.image} alt={item.name} />
    </div>

    <p className="product-name">{item.name}</p>
  </div>
</div>
))}
          </div>

        </div>
      </div>
      {/* 👇 ADD MODAL HERE */}
{selectedProduct && (
  <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
    
    <div className="product-modal" onClick={(e) => e.stopPropagation()}>
      
      <span className="close-btn" onClick={() => setSelectedProduct(null)}>✖</span>

      <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />

      <h2>{selectedProduct.name}</h2>

      <p>
        {getCategoryDescription()}
      </p>

    </div>

  </div>
)}
    </div>
  );
}
