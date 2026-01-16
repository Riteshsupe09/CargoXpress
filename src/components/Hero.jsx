import "../styles/hero.css";
import { FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">
      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {/* Left Content */}
        <div className="hero-left">
          <h1>CargoXpress Logistics Services</h1>
          <h2>17+ Years of Excellence in Freight Forwarding</h2>
          <p>
            From air and sea freight to custom clearance and warehousing, we
            provide comprehensive logistics solutions with 24/7 operations.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">→ Our Services</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        {/* Right Form */}
        <div className="hero-form">
          <h3>
            <FaPhoneAlt /> Get In Touch
          </h3>

          <input type="text" placeholder="Your full name" />
          <input type="email" placeholder="xyz@company.com" />
          <input type="text" placeholder="+91 Mobile number" />

          <select>
            <option>Select a service</option>
            <option>Air Freight</option>
            <option>Sea Freight</option>
            <option>Road Transport</option>
          </select>

          <select>
            <option>Select Location</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bangalore</option>
          </select>

          <textarea placeholder="Tell us about your shipping requirements (optional)" />

          <div className="captcha-row">
            <input type="text" placeholder="Enter CAPTCHA" />
            <span className="captcha-box">A1B2C3</span>
          </div>

          <button className="btn-submit">Get In Touch</button>
        </div>
      </div>
    </section>
  );
}
