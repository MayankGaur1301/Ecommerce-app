import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import {Link} from 'react-scroll';

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>𝗦𝗔𝗟𝗘S</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vel
            beatae blanditiis distinctio necessitatibus facilis, ex corporis quo
            nesciunt quasi tempora aut ab quod, ipsa accusantium dignissimos
            natus illum explicabo?
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
           <Link to="sec-heading" spy={true} smooth={true} offset={-100} duration={1000}> <div className="banner-cta v2">Shop Now</div></Link>
          </div>
        </div>
        <img className='banner-img' src={BannerImg} alt="banner_image" />
      </div>
    </div>
  );
};

export default Banner;
