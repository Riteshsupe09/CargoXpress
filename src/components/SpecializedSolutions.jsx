
import {
  FaBox,
  FaWarehouse,
  FaShieldAlt,
  FaGlobe,
  FaFileAlt,
  FaThermometerHalf,
} from "react-icons/fa";

const solutions = [
  {
    title: "General Cargo",
    desc: "Standard freight and cargo handling with reliable service",
    icon: <FaBox />,
  },
  {
    title: "Industrial Goods",
    desc: "Heavy machinery and industrial equipment transportation",
    icon: <FaWarehouse />,
  },
  {
    title: "Pharmaceutical",
    desc: "Temperature-controlled medical and pharmaceutical shipments",
    icon: <FaShieldAlt />,
  },
  {
    title: "Hazardous Materials",
    desc: "Certified dangerous goods handling with safety compliance",
    icon: <FaGlobe />,
  },
  {
    title: "Express Courier",
    desc: "Fast delivery for documents and small packages",
    icon: <FaFileAlt />,
  },
  {
    title: "Export Perishable Goods",
    desc: "Cold chain logistics and export services for temperature-sensitive items like food, flowers, and pharmaceuticals",
    icon: <FaThermometerHalf />,
  },
];

export default function SpecializedSolutions() {
  return (
    <section className="solutions-section">
      <h2>Specialized Solutions</h2>
      <p className="subtitle">
        We handle diverse cargo types with specialized expertise and equipment
        for every industry need
      </p>

      <div className="solutions-grid">
        {solutions.map((item, index) => (
          <div
            key={index}
            className={`solution-card ${item.active ? "active" : ""}`}
          >
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
