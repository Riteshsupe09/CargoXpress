import "../styles/ourservices.css";
import {
  FaCheckCircle,
  FaGlobe
} from "react-icons/fa";

import air from "../assets/Air freight.jpg";
import sea from "../assets/Sea freight.jpg";
import land from "../assets/Land freight.jpg";
import cargo from "../assets/Cargo Handling.jpg";
import perishable from "../assets/Import Export.jpg";

const services = [
  {
    title: "Air Freight",
    image: air,
    desc:
      "Fast and reliable air cargo services with global reach and express delivery options for time-sensitive shipments.",
    points: ["Express Delivery", "Global Network", "Real-time Tracking"]
  },
  {
    title: "Sea Freight",
    image: sea,
    desc:
      "Cost-effective ocean freight solutions for bulk cargo and container shipments with worldwide coverage.",
    points: ["LCL & FCL", "Port-to-Port", "Door-to-Door"]
  },
  {
    title: "Land Transport",
    image: land,
    desc:
      "Comprehensive ground transportation services including trucking and rail freight for domestic and cross-border delivery.",
    points: ["Door Delivery", "Interstate", "Last Mile"]
  },
  {
    title: "Cargo Handling",
    image: cargo,
    desc:
      "Professional cargo handling and specialized equipment for safe transportation of all types of goods.",
    points: ["Safe Handling", "Special Equipment", "Documentation"]
  },
  {
    title: "Import & Export Perishable Goods",
    image: perishable,
    desc:
      "Specialized solutions for exporting temperature-sensitive goods such as food, flowers, and pharmaceuticals.",
    points: ["Cold Chain Logistics", "Time-Critical Delivery", "Compliance & Certifications"]
  }
];

const OurServices = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <div className="icon-circle">
          <FaGlobe />
        </div>
        <h2>
          Our <span>Services</span>
        </h2>
        <div className="underline"></div>
        <p>
          Comprehensive freight, logistics & transportation solutions with
          professional courier services and global network coverage.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="services-card" key={index}>
            <div className="image-box">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
            </div>

            <div className="service-content">
              <p>{service.desc}</p>

              <ul>
                {service.points.map((point, i) => (
                  <li key={i}>
                    <FaCheckCircle /> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
