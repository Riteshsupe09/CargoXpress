
import { FaUserClock, FaClock, FaBox, FaGlobe } from "react-icons/fa";

export default function About() {
  return (
    <section className="px-40 py-15 space-y-12 bg-white">
      {/* Stats Row */}
      <div className="flex justify-between items-center">
        <div className= "flex flex-col items-center">
          <div className="w-15 h-15 bg-orange-400 flex items-center justify-center rounded-full m-8 font-normal "><FaUserClock /></div>
          <h2 className="text-2xl font-semibold">17+</h2>
          <p className="text-xl text-gray-500">Years of Experience</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-15 h-15 bg-orange-400 flex items-center justify-center rounded-full m-8 font-normal"><FaClock /></div>
          <h2 className="text-2xl font-semibold">24/7</h2>
          <p className="text-xl text-gray-500">Operations</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-15 h-15 bg-orange-400 flex items-center justify-center rounded-full m-8 font-normal"><FaBox /></div>
          <h2 className="text-2xl font-semibold">1,000+</h2>
          <p className="text-xl text-gray-500">Shipments Handled</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-15 h-15 bg-orange-400 flex items-center justify-center rounded-full m-8 font-normal"><FaGlobe /></div>
          <h2 className="text-2xl font-semibold">100%</h2>
          <p className="text-xl text-gray-500">Global Network</p>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-20 text-center space-y-4">
        <h2 className="font-bold text-3xl">About CargoXpress</h2>
        <p className="text-lg ml-50 mr-50 text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          totam dolorem numquam, adipisci veritatis ut, ea alias cum pariatur
          cupiditate iure possimus sed velit consequuntur reprehenderit sequi
          nulla laboriosam! Dolorum molestiae, placeat nihil aspernatur possimus
          ullam magnam voluptates et vitae quia, ut vel aliquam distinctio
          accusantium.
        </p>
      </div>
    </section>
  );
}


