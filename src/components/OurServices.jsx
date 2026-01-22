
import {
  FaCheckCircle,
  FaGlobe,
  FaBox,
  FaWarehouse,
  FaShieldAlt,
  FaFileAlt,
  FaThermometerHalf,
} from "react-icons/fa";

import air from "../assets/air-freight.jpg";
import sea from "../assets/sea-freight.jpg";
import land from "../assets/land-freight.jpg";
import cargo from "../assets/cargo-handling.jpg";
import perishable from "../assets/import-export.jpg";

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
    <section className="px-40 py-15 bg-white">
      <div className="text-center mb-12">
        <div className="mx-auto mb-4 w-16 h-16 shrink-0 bg-orange-400 flex items-center justify-center rounded-full">
          <FaGlobe className="w-8 h-8 text-white"/>
        </div>
        <h2 className="text-4xl font-bold mb-2 text-gray-900">
          Our <span className="text-orange-400">Services</span>
        </h2>
        <div className="w-20 h-1 bg-orange-400 rounded-2xl mx-auto"></div>
        <p className="text-gray-600 mt-4 text-xl">
          Comprehensive freight, logistics & transportation solutions with
          professional courier services and global network coverage.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-8">
        {services.map((service, index) => (
          <div className="bg-white rounded-2xl shadow-2xl hover:-translate-y-5 transition-transform duration-300" key={index}>
            <div className="rounded-t-2xl overflow-hidden relative">
              <img src={service.image} alt={service.title} />
                <h3 className="absolute text-white font-bold left-1 bottom-1 ">{service.title}</h3>
            </div>

            <div className="p-6">
              <p className="text-gray-500 leading-6 mb-3">{service.desc}</p>

              <ul>
                {service.points.map((point, i) => (
                  <li className="flex items-center gap-2 mb-2" key={i}>
                    <FaCheckCircle className="text-orange-400" /> {point}
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


