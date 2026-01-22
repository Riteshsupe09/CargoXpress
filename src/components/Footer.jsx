import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2f3b4c] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Logo" className="w-16 h-16 bg-white rounded-xl p-2" />
            <p className="mt-6 leading-relaxed">
              Your trusted partner for freight forwarding, custom clearance,
              and logistics solutions with 17+ years of excellence.
            </p>

            <div className="flex gap-4 mt-6 text-xl">
              {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map(
                (Icon, i) => (
                  <Icon
                    key={i}
                    className="cursor-pointer hover:text-orange-400 transition"
                  />
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="block w-12 h-0.5 bg-orange-400 mt-2"></span>
            </h4>

            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 cursor-pointer hover:text-orange-400 transition"
                >
                  <span className="text-orange-400">›</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 relative inline-block">
              Our Services
              <span className="block w-12 h-0.5 bg-orange-400 mt-2"></span>
            </h4>

            <ul className="space-y-3">
              {[
                "Air Freight",
                "Sea Freight",
                "Custom Clearance",
                "Warehousing",
                "Transportation",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 cursor-pointer hover:text-orange-400 transition"
                >
                  <span className="text-orange-400">›</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 relative inline-block">
              Contact Us
              <span className="block w-12 h-0.5 bg-orange-400 mt-2"></span>
            </h4>

            {/* Mumbai */}
            <div className="space-y-3">
              <p className="font-semibold text-white">
                Main Office – Mumbai
              </p>

              <p className="flex gap-3">
                <FaMapMarkerAlt className="text-orange-400 mt-1 size-6" />
                302 Sitaram Apt, Swadeshi Mill Road, Sion Chunabhatti, Mumbai – 400022
              </p>

              <p className="flex gap-3">
                <FaPhoneAlt className="text-orange-400 mt-1" />
                Office: +91 9820063594
              </p>

              <p className="flex gap-3">
                <FaPhoneAlt className="text-orange-400 mt-1" />
                Mobile: +91 9819361952
              </p>

              <p className="flex gap-3">
                <FaEnvelope className="text-orange-400 mt-1" />
                lmpcs.cargoxpress@gmail.com
              </p>
            </div>

            <hr className="my-6 border-gray-600" />

            {/* JNPT */}
            <div className="space-y-3">
              <p className="font-semibold text-white">
                Port Operations – JNPT
              </p>

              <p className="flex gap-3">
                <FaMapMarkerAlt className="text-orange-400 mt-1" />
                Jawaharlal Nehru Port Trust, Air Cargo Complex
              </p>

              <p className="flex gap-3">
                <FaPhoneAlt className="text-orange-400 mt-1" />
                Mobile: +91 9820063594
              </p>

              <p className="flex gap-3">
                <FaEnvelope className="text-orange-400 mt-1" />
                lmpcs.cargoxpress@gmail.com
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © 2026 CargoXpress Logistics Services. All rights reserved.
          </p>

          <p>
            Operating 24/7, 365 days a year |{" "}
            <span className="text-orange-400 font-semibold">
              17+ Years of Excellence
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
