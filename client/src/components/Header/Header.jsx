import { useContext, useEffect, useState } from "react";
import "./Header.scss";
// icons--------
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Context } from "../../utils/context";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const {cartCount} = useContext(Context)

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // useEffect for behaviour of navbar while scrolling webpage.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
          <Link to="hero-banner" spy={true} smooth={true} offset={-100} duration={1000} ><li onClick={() => navigate("/")}>Home</li></Link> 
          <Link to="footer-content" spy={true} smooth={true} offset={50} duration={1500} ><li>About</li></Link>
            <Link to="category" spy={true} smooth={true} offset={-130} duration={1000} ><li>Categories</li></Link>
          </ul>
          <div className="center">
            <span style={{ wordSpacing: "1px" }} onClick={() => navigate("/")}>
              GADGET
            </span>
            <span className="haven" onClick={() => navigate("/")}>
              ＨΛＶΞＮ　
            </span>
          </div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              <span>{cartCount}</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
