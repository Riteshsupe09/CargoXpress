
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="px-8 py-16 bg-gray-50 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="text-white bg-orange-400 w-12 h-12 flex items-center justify-center rounded-full mx-auto">
          <FaPhoneAlt />
        </div>
        <h1 className="font-bold text-4xl">
          Get in <span className="text-orange-400">Touch</span>
        </h1>
        <p className="text-gray-600">
          Ready to streamline your logistics? Contact us for reliable freight
          forwarding and custom clearance services with 24/7 support.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Form */}
        <div className="bg-white-50 p-8 rounded-2xl shadow-lg mt-4">
          <h2 className="font-bold text-3xl">Send us a Message</h2>
          <p className="text-black/85 mt">Fill out the form below and we'll get back to you within 24 hours.</p>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-4">
              <input type="text" placeholder="Your Full Name *" className="w-full h-10 rounded-md px-3 text-black bg-white border" />
              <input type="email" placeholder="Your Email Address *" className="w-full h-10 rounded-md px-3 text-black bg-white border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
              <input type="tel" placeholder="Phone Number *" className="w-full h-10 rounded-md px-3 text-black bg-white border"/>
              <select className="w-full h-10 rounded-md px-3 text-black bg-white border">
                <option>Select Service *</option>
                <option>Freight Forwarding</option>
                <option>Customs Clearance</option>
                <option>Warehousing</option>
              </select>
            </div>

            <textarea placeholder="Your Message *" className="w-full h-60 rounded-md px-3 text-black bg-white border"></textarea>

            <button type="submit" className="bg-orange-400 text-white rounded-xl w-full h-10 mx-auto flex items-center justify-center gap-2 mt-6 hover:bg-orange-500 transition-transform duration-300 hover:-translate-y-2 shadow-2xl">
              <FaPaperPlane /> Send Message →
            </button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-700 text-white rounded-2xl flex flex-col gap-2">
            <h3 className="font-bold text-2xl">Main Office</h3>
            <p>302, Sitaram Apt., Swadeshi Mill Road</p>
            <p>Sion, Chunabhatti, Mumbai - 400022</p>
          </div>

          <div className="p-4 bg-green-700 text-white rounded-2xl flex flex-col gap-2">
            <h3 className="font-bold text-2xl">Phone Numbers</h3>
            <p>+91 9820063594</p>
            <p className="mt-6">+91 9819361952</p>
          </div>

          <div className="p-4 bg-violet-700 text-white rounded-2xl flex flex-col gap-2">
            <h3 className="font-bold text-2xl">Email Address</h3>
            <p className="mt-2">lmpcs.cargoxpress@gmail.com</p>
          </div>

          <div className="p-4 bg-orange-700 text-white rounded-2xl flex flex-col gap-2">
            <h3 className="font-bold text-2xl">Operating Hours</h3>
            <p>24/7 Operations</p>
            <p className="leading-4">365 Days a Year</p>
          </div>

          <div className="col-span-2 p-4 bg-white text-black rounded-2xl flex flex-col gap-4 shadow-xl">
            <h3 className="font-bold text-2xl">Office Locations</h3>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-orange-400 mt-2 size-4"/>
              <div className="flex flex-col gap-1">
                <strong>Air Cargo Complex</strong>
                <p>Port User Building: Air Cargo Complex</p>
                <small>19.0896° N, 72.8656° E</small>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-orange-400 mt-2 size-4"/>
              <div className="flex flex-col gap-1">
                <strong>JNPT Office</strong>
                <p>Jawaharlal Nehru Port Trust</p>
                <small>18.9647° N, 72.9492° E</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
