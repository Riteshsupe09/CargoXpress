import "../styles/services.css";
import {
  FaPlane,
  FaShieldAlt,
  FaWarehouse,
  FaTruck,
  FaProjectDiagram,
  FaGlobe,
} from "react-icons/fa";

export default function Services() {
  return (
    <section className="services">
      <div className="services-grid">
        <div className="service-card">
          <div className="icon blue">
            <FaPlane />
          </div>
          <h3>Air & Sea Freight</h3>
          <p>
            Comprehensive air and ocean freight services with global coverage.
          </p>
        </div>

        <div className="service-card">
          <div className="icon green">
            <FaShieldAlt />
          </div>
          <h3>Custom Clearance</h3>
          <p>
            Expert customs clearance and documentation services.
          </p>
        </div>

        <div className="service-card">
          <div className="icon purple">
            <FaWarehouse />
          </div>
          <h3>Warehousing Solutions</h3>
          <p>
            Secure storage facilities with inventory management.
          </p>
        </div>

        <div className="service-card">
          <div className="icon orange">
            <FaTruck />
          </div>
          <h3>Land Transportation</h3>
          <p>
            Reliable door-to-door delivery services.
          </p>
        </div>

        <div className="service-card">
          <div className="icon orange">
            <FaProjectDiagram />
          </div>
          <h3>Supply Chain Management</h3>
          <p>
            End-to-end logistics solutions for maximum efficiency.
          </p>
        </div>

        <div className="service-card">
          <div className="icon orange">
            <FaGlobe />
          </div>
          <h3>Global Network</h3>
          <p>
            Worldwide partner network ensuring seamless operations.
          </p>
        </div>
      </div>
    </section>
  );
}
