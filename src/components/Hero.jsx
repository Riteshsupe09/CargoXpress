
import { FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-[url(D:\Ritesh\Internship\CargoXpress\src\assets\hero.jpg)] bg-cover bg-center h-150 relative flex items-center bg-blend-overlay bg-black/30">
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative flex justify-between items-center w-full px-10 py-60 text-white">
        {/* Left Content */}
        <div className="max-w-100 justify-center items-center">
          <h1 className="text-[48px] font-[700]">CargoXpress Logistics Services</h1>
          <h2 className="whitespace-nowrap text-[22px] text-orange-400 mx-10px my-0 font-bold">17+ Years of Excellence in Freight Forwarding</h2>
          <p className="text-[16px] mb-25px">
            From air and sea freight to custom clearance and warehousing, we
            provide comprehensive logistics solutions with 24/7 operations.
          </p>

          <div className="gap-3 flex items-center">
            <button className="flex items-center whitespace-nowrap bg-orange-400 text-white px-5 py-1.5 mt-5 rounded-xl cursor-pointer">→ Our Services</button>
            <button className=" flex items-center whitespace-nowrap bg-transparent border border-solid border-white text-white px-5 py-1.5 mt-5 rounded-xl cursor-pointer">Learn More</button>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full max-w-sm bg-blue-950/90 p-6 rounded-2xl">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
            <FaPhoneAlt /> Get In Touch
          </h3>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your full name"
              className="w-full h-10 rounded-md px-3 text-black bg-white"
            />

            <input
              type="email"
              placeholder="xyz@company.com"
              className="w-full h-10 rounded-md px-3 text-black bg-white"
            />

            <input
              type="tel"
              placeholder="+91 Mobile number"
              className="w-full h-10 rounded-md px-3 text-black bg-white"
            />

            <select className="w-full h-10 rounded-md px-3 text-black bg-white">
              <option>Select a service</option>
              <option>Air Freight</option>
              <option>Sea Freight</option>
              <option>Road Transport</option>
            </select>

            <select className="w-full h-10 rounded-md px-3 text-black bg-white">
              <option>Select Location</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>

            <textarea
              rows="3"
              placeholder="Tell us about your shipping requirements (optional)"
              className="w-full rounded-md px-3 py-2 text-black bg-white resize-none"
            ></textarea>

            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Enter CAPTCHA"
                className="flex-1 h-10 rounded-md px-3 text-black bg-white"
              />
              <span className="bg-blue-900 px-3 py-2 rounded-md font-semibold">
                A1B2C3
              </span>
            </div>

            <button className="w-full bg-orange-500 py-2.5 rounded-lg font-semibold mt-3">
              Get In Touch
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}