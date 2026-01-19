import "../styles/footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="logo-box"><img src="/logo.png" alt="CargoXpress Logo" /></div>
          <p>
            Your trusted partner for freight forwarding, custom clearance, and
            logistics solutions with 17+ years of excellence.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-links">
          <h4>Our Services</h4>
          <ul>
            <li>Air Freight</li>
            <li>Sea Freight</li>
            <li>Custom Clearance</li>
            <li>Warehousing</li>
            <li>Transportation</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>

          <div className="contact-block">
            <strong>Main Office - Mumbai</strong>
            <p>
              <FaMapMarkerAlt />
              302 Sitaram Apt, Swadeshi Mill Road, Sion Chunabhatti, Mumbai - 400022
            </p>
            <p>
              <FaPhoneAlt /> Office: +91 9820063594
            </p>
            <p>
              <FaPhoneAlt /> Mobile: +91 9819361952
            </p>
            <p>
              <FaEnvelope /> Email:
              lmpcs.cargoxpress@gmail.com
            </p>
          </div>

          <div className="divider"></div>

          <div className="contact-block">
            <strong>Port Operations - JNPT</strong>
            <p>
              <FaMapMarkerAlt />
              Jawaharlal Nehru Port Trust, Air Cargo Complex
            </p>
            <p>
              <FaPhoneAlt /> Mobile: +91 9820063594
            </p>
            <p>
              <FaEnvelope /> Email:
              lmpcs.cargoxpress@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 CargoXpress Logistics Services. All rights reserved.</p>
        <p>
          Operating 24/7, 365 days a year |{" "}
          <span>17+ Years of Excellence</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
