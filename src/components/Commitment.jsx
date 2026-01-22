import {
  FaBullseye,
  FaStar,
  FaBolt,
  FaMedal,
} from "react-icons/fa";

export default function Commitment() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white p-10 rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left content */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Commitment to Excellence
            </h2>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                <FaBullseye />
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Reliability:</strong>{" "}
                Consistent on-time delivery with 24/7 operational support.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                <FaStar />
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Transparency:</strong>{" "}
                Real-time tracking and clear communication throughout the process.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                <FaBolt />
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Innovation:</strong>{" "}
                Leveraging technology for efficient and modern logistics solutions.
              </p>
            </div>
          </div>

          {/* Right card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6">
              <FaMedal className="text-orange-500" /> Why Choose SLS?
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>✔ Comprehensive end-to-end logistics solutions</li>
              <li>✔ Expert customs clearance and documentation</li>
              <li>✔ Global network with local expertise</li>
              <li>✔ Competitive pricing with premium service quality</li>
              <li>✔ Dedicated customer support team</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
