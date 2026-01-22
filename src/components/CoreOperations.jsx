
import {
  FaFileAlt,
  FaGlobe,
  FaCube,
  FaWarehouse,
  FaShieldAlt,
  FaBoxes,
  FaCommentDots,
} from "react-icons/fa";

const operations = [
  {
    title: "Customs Clearance",
    desc: "Complete import & export clearance services with full documentation support and compliance management",
    icon: <FaFileAlt />,
  },
  {
    title: "Freight Forwarding",
    desc: "Comprehensive ocean and air freight forwarding services with all INCO Terms coverage",
    icon: <FaGlobe />,
  },
  {
    title: "ODD Dimension Handling",
    desc: "Specialized loading, unloading, and transportation services for oversized and heavy cargo",
    icon: <FaCube />,
  },
  {
    title: "Warehousing & Storage",
    desc: "Secure storage facilities with advanced inventory management and distribution services",
    icon: <FaWarehouse />,
  },
  {
    title: "Documentation Services",
    desc: "Complete pre and post shipment documentation support with regulatory compliance",
    icon: <FaShieldAlt />,
  },
  {
    title: "Container Stuffing",
    desc: "Professional dock stuffing and factory stuffing services with quality assurance",
    icon: <FaBoxes />,
  },
];

const CoreOperations = () => {
  return (
    <section className="core-operations">
      <div className="overlay">
        <h2>Core Operations</h2>
        <p className="subtitle">
          Professional logistics operations with end-to-end service coverage
          and industry-leading expertise
        </p>

        <div className="operations-grid">
          {operations.map((item, index) => (
            <div className="operation-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <button className="quote-btn">
          <FaCommentDots /> Get Service Quote
        </button>
      </div>
    </section>
  );
};

export default CoreOperations;
