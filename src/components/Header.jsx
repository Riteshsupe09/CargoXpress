import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-amber-500 h-10 flex justify-between items-center px-4 text-white text-sm">
        <p>Welcome to CargoXpress Services - Your Global Logistics Partner</p>
        <div className="social-icons" class="flex gap-4 text-lg">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      {/* Main Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2 w-10 h-10 whitespace-nowrap text-lg">
          <img src="/logo.png" alt="CargoXpress Logo" />
          <span>
            <strong>CargoXpress</strong> Logistics Services 
          </span>
        </div>

        <nav className="font-medium flex gap-8">
          <a className="active: text-orange-400" href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">SERVICES</a>
          <a href="#">CONTACT</a>
        </nav>

        <button className="bg-orange-400 text-white px-3 py-3 rounded-xl cursor-pointer font-medium">Company Profile</button>
      </header>
    </>
  );
}

