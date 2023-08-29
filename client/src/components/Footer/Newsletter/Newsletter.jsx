import "./Newsletter.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign Up For Lattest Updates And Offers</span>
        <div className="form">
          <input type="email" placeholder="Email Address..." />
          <button style={{textTransform:'uppercase'}}>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our privacy policy
        </div>
        <div className="social-icons">
          <div className="icon-div">
            <div className="icons">
              <FaFacebookF size={20} />
            </div>
            <div className="icons">
              <FaTwitter size={20} />
            </div>
            <div className="icons">
              {" "}
              <FaInstagram size={20} />
            </div>
            <div className="icons">
              <FaLinkedinIn size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
