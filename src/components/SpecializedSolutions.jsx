
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
    <section className="px-10 py-10">
      <h2 className="text-3xl font-bold text-gray-600 text-center">Specialized Solutions</h2>
      <p className="mb-12 mt-4 text-center text-gray-500 text-lg">
        We handle diverse cargo types with specialized expertise and equipment
        for every industry need
      </p>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4">
        {solutions.map((item, index) => (
          <div
            key={index}
            className={`bg-white text-center rounded-2xl px-10 py-10 hover:bg-orange-400 hover:-translate-y-2 transition-all duration-300 ${item.active ? "active" : ""}`}
          >
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-xl text-orange-400 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] rounded-lg transition-all duration-300 ">{item.icon}</div>
            <h3 className="mt-4 font-bold text-gray-600 text-lg/8 text-center transition-colors duration-300 group-hover:text-white">{item.title}</h3>
            <p className="mt-4 text-gray-600 transition-colors duration-300 group-hover:text-white">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
