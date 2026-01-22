
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
    <section className="bg-orange-25 py-16 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <div className="bg-white p-10 rounded-lg hover:-translate-y-3 transition-transform shadow-2xl duration-300 flex flex-col items-center text-center">
          <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
            <FaPlane />
          </div>
          <h3 className="font-semibold text-xl">Air & Sea Freight</h3>
          <p className="text-gray-500 mt-2">
            Comprehensive air and ocean freight services with global coverage.
          </p>
        </div>

        <div className="bg-white p-10 rounded-lg hover:-translate-y-3 transition-transform shadow-2xl duration-300 flex flex-col items-center text-center">
          <div className="bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
            <FaShieldAlt />
          </div>
          <h3 className="font-semibold text-xl">Custom Clearance</h3>
          <p className="text-gray-500 mt-2">
            Expert customs clearance and documentation services.
          </p>
        </div>

        <div className="bg-white p-10 rounded-lg hover:-translate-y-3 transition-transform shadow-2xl duration-300 flex flex-col items-center text-center">
          <div className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
            <FaWarehouse />
          </div>
          <h3 className="font-semibold text-xl">Warehousing Solutions</h3>
          <p className="text-gray-500 mt-2">
            Secure storage facilities with inventory management.
          </p>
        </div>

        <div className="bg-white p-10 rounded-lg hover:-translate-y-3 transition-transform shadow-2xl duration-300 flex flex-col items-center text-center">
          <div className="bg-orange-400 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
            <FaTruck />
          </div>
          <h3 className="font-semibold text-xl">Land Transportation</h3>
          <p className="text-gray-500 mt-2">
            Reliable door-to-door delivery services.
          </p>
        </div>

        <div className="bg-white p-10 rounded-lg hover:-translate-y-3 transition-transform shadow-2xl duration-300 flex flex-col items-center text-center">
          <div className="bg-orange-400 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
            <FaProjectDiagram />
          </div>
          <h3 className="font-semibold text-xl">Supply Chain Management</h3>
          <p className="text-gray-500 mt-2">
            End-to-end logistics solutions for maximum efficiency.
          </p>
        </div>

        <div className="bg-white p-10 rounded-lg hover:-translate-y-3 transition-transform shadow-2xl duration-300 flex flex-col items-center text-center">
          <div className="bg-orange-400 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
            <FaGlobe />
          </div>
          <h3 className="font-semibold text-xl">Global Network</h3>
          <p className="text-gray-500 mt-2">
            Worldwide partner network ensuring seamless operations.
          </p>
        </div>
      </div>
    </section>
  );
}
