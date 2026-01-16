import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/header.css";

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <p>Welcome to CargoXpress Services - Your Global Logistics Partner</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="logo">
          <img src="/logo.png" alt="CargoXpress Logo" />
          <span>
            <strong>CargoXpress</strong> Logistics Services
          </span>
        </div>

        <nav className="nav-links">
          <a className="active" href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">SERVICES</a>
          <a href="#">CONTACT</a>
        </nav>

        <button className="profile-btn">Company Profile</button>
      </header>
    </>
  );
}

