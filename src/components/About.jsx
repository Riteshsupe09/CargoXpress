import "../styles/about.css";
import { FaUserClock, FaClock, FaBox, FaGlobe } from "react-icons/fa";

export default function About() {
  return (
    <section className="stats-about">
      {/* Stats Row */}
      <div className="stats-row">
        <div className="stat-box">
          <div className="icon"><FaUserClock /></div>
          <h2>17+</h2>
          <p>Years of Experience</p>
        </div>

        <div className="stat-box">
          <div className="icon"><FaClock /></div>
          <h2>24/7</h2>
          <p>Operations</p>
        </div>

        <div className="stat-box">
          <div className="icon"><FaBox /></div>
          <h2>1,000+</h2>
          <p>Shipments Handled</p>
        </div>

        <div className="stat-box">
          <div className="icon"><FaGlobe /></div>
          <h2>100%</h2>
          <p>Global Network</p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-content">
        <h2>About CargoXpress</h2>
        <p>
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


