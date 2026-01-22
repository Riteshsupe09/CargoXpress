
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
    <section className="m-8 rounded-2xl bg-[url(D:\Ritesh\Internship\CargoXpress\src\assets\warehouse.jpg)] bg-cover bg-center bg-no-repeat relative ">
      <div className="bg-blend-overlay bg-black/25 px-16 py-16 rounded-2xl">
        <h2 className="text-white text-center font-bold text-4xl">Core Operations</h2>
        <p className="text-white text-center mt-1">
          Professional logistics operations with end-to-end service coverage
          and industry-leading expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-10">
          {operations.map((item, index) => (
            <div className="backdrop-blur backdrop-brightness-80 p-12 rounded-2xl hover:-translate-y-2 transition-transform duration-300" key={index}>
              <div className="text-black bg-orange-400 w-14 h-14 text-2xl rounded-2xl flex justify-center items-center mx-auto">{item.icon}</div>
              <h3 className="text-white font-bold text-2xl mt-2">{item.title}</h3>
              <p className="text-white mt-2">{item.desc}</p>
            </div> 
          ))}
        </div>

        <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto mt-10 hover:-translate-y-2 transition-transform duration-300">
          <FaCommentDots /> Get Service Quote
        </button>
      </div>
    </section>
  );
};

export default CoreOperations;
