import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HeaderLogo from "../../assets/images/suLogo.png";
import { categories } from "../catalogue/products";
import "./index.css";
const generateKeywords = (name) => {
  const words = name.toLowerCase().split(" ");

  return [
    name.toLowerCase(),
    ...words,
    words.join("")
  ];
};

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const[showDropdown, setShowDropdown]=useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  

 const handleSearch = () => {
  const query = searchText.toLowerCase();

  let foundCategory = null;
  let foundSubcategory = null;

  categories.forEach(cat => {

    // check direct products
    cat.products?.forEach(product => {
      const keywords = generateKeywords(product.name);

      if (keywords.some(k => k.includes(query))) {
        foundCategory = cat;
      }
    });

    // check subcategories
    cat.subcategories?.forEach(sub => {
      sub.products?.forEach(product => {
        const keywords = generateKeywords(product.name);

        if (keywords.some(k => k.includes(query))) {
          foundCategory = cat;
          foundSubcategory = sub;
        }
      });
    });

  });

  if (foundCategory) {
    navigate("/our-products", {
      state: {
        category: foundCategory.name,
        subcategory: foundSubcategory?.id || null
      }
    });
  } else {
    alert("No product found");
  }
};

  const handleHome = () => {
    navigate("/");
    setOpen(false);
  };

  const handleNavClick = (sectionId,data={}) => {
  // if(sectionId==="proudcts")
  //   {navigate("/our-products",{state:{category:data.category,
  //     subcategory:data.subcategory
  //   }
  // });
  // setOpen(false);
  //   return;
  // }


    if(sectionId === 'certificates'){
      navigate('/certification')
      setOpen(false);
      return
    }
    setOpen(false);

    // Already on home → just scroll
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Not on home → go home first, then scroll
    else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header className="header-parent-div">
      {/* LEFT */}
      <div className="header-left" onClick={handleHome}>
        <img src={HeaderLogo} alt="logo" className="logo_header" />
        <span className="company-name">
          Samira Cotton Udyog
        </span>
      </div>

      <div className="right-section">

  {/* DESKTOP MENU */}
  <nav className="desktop-menu">
    <span onClick={() => handleNavClick("home")}>Home</span>
    <span onClick={() => handleNavClick("about")}>About Us</span>
    
    < div classname="nav-item"
    style={{position:"relative"}}
    onMouseEnter={() => window.innerWidth >
      768 && setShowDropdown(true)}
    onMouseLeave={() => window.innerWidth >
      768 && setShowDropdown(false)
    }
    >
    < span
    onClick={() => setShowDropdown(!showDropdown)}
    style={{cursor:"pointer"}}
    >
      Products▼
    </span>
    {showDropdown && (
      < div
      style={{
        position:"absolute",
        top: "100%",
        left:0,
        background:"#fff",
        borderRadius:"8px",
        padding:"8px 0",
        minWidth:"250px",
        boxShadow:"0 10px 25px rgba(0,0,0,0.1",
        zIndex:999
      }}
      >
        {categories.map((cat) => (
          <div
          key={cat.id}
          onClick={() => {
             navigate("/our-products", {
      state: {
        category:cat.name,
        subcategory: cat.subcategory?.[0]?.id || null
      }
    });
            setShowDropdown(false);
          }}
          style={{
            padding:"10px 15px",
            cursor:"pointer"
          }}
          >
            {cat.name}
            </div>
            ))}
            </div>
            )}
    </div>
    <span onClick={() => handleNavClick("certificates")}>Certificates</span>
    <span onClick={() => handleNavClick("contact")}>Contact Us</span>
  </nav>

  {/* 🔍 SEARCH BOX (DESKTOP) */}
  <div className="search-box desktop-search">
   <input
  type="text"
  placeholder="Search..."
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") handleSearch();
  }}
/>
    <button onClick={handleSearch}>🔍</button>
  </div>

  {/* HAMBURGER */}
  <div
    className={`hamburger ${open ? "active" : ""}`}
    onClick={() => setOpen(!open)}
  >
    <span />
    <span />
    <span />
  </div>

</div>
      {/* MOBILE MENU */}
     <div className={`mobile-menu ${open ? "show" : ""}`}>

  {/* 🔍 MOBILE SEARCH */}
  <div className="search-box mobile-search">
   <input
  type="text"
  placeholder="Search..."
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") handleSearch();
  }}
/>
    <button classname="search-btn1" onClick={handleSearch}>🔍</button>
  </div>

  <span onClick={() => handleNavClick("home")}>Home</span>
  <span onClick={() => handleNavClick("about")}>About Us</span>
  <span onClick={() => handleNavClick("products")}>Products</span>
  <span onClick={() => handleNavClick("certificates")}>Certificates</span>
  <span onClick={() => handleNavClick("contact")}>Contact Us</span>

</div>
    </header>
  );
};

export default Header;
