import React from "react";
import './Footer.css'
import { Facebook, Instagram, LinkedIn, Telegram} from "@mui/icons-material";

export const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="back-to-top" >Back to top</div>
        <div className="container-list">

          <div className="list">
            <div className="list-items">
              <h3>Get to Know Us</h3>
              <ul>
                <li><a href="#">About Amazon</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press Releases</a></li>
                <li><a href="#">Amazon Science</a></li>
              </ul>
            </div>

            <div className="list-items">
              <h3>Connect with Us</h3>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>

            <div className="list-items">
              <h3>Make Money with Us</h3>
              <ul>
                <li><a href="#">Sell on Amazon</a></li>
                <li><a href="#">Sell under Amazon Accelerator</a></li>
                <li><a href="#">Protect and Build Your Brand</a></li>
                <li><a href="#">Amazon Global Selling</a></li>
                <li><a href="#">Supply to Amazon</a></li>
                <li><a href="#">Become an Affiliate</a></li>
                <li><a href="#">Fulfilment by Amazon</a></li>
                <li><a href="#">Advertise Your Products</a></li>
                <li><a href="#">Amazon Pay on Merchants</a></li>
              </ul>
            </div>

            <div className="list-items">

              <h3>Let Us Help You</h3>
              <ul>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Returns Centre</a></li>
                <li><a href="#">Recalls and Product Safety Alerts</a></li>
                <li><a href="#">100% Purchase Protection</a></li>
                <li><a href="#">Amazon App Download</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
          </div>

          <div className="address-mail-container">
            <div className="office-address">
              <h3>Registered Office Address</h3>
              <p>Flipkart Internet Private Limited <br />
                Buildings Alyssa, Begonia & <br />
                and Clover, Embassy Tech Village, <br />
                Outer Ring Road, Devarabeesanahalli Village, <br />
                Bengaluru, Karnataka, 560103, India.</p>
            </div>
            <div className="mail">
              <h3>Mail Us</h3>
              <p>Flipkart Internet Pvt Ltd.<br />
                Embassy Tech Village,<br />
                8th Floor, Block 'B', Devarabeesanahalli Village,<br />
                Varthur Hobli, Bengaluru East Taluk,<br />
                Bengaluru District, Karnataka, India, 560103.</p>
            </div>
            <div className="social-media-icons">
              <LinkedIn />
              <Instagram />
              <Facebook />
              <Telegram />
            </div>
          </div>

        </div>



      </footer>
    </>
  );
};

export default Footer;







