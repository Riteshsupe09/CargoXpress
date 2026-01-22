
import {
  FaBullseye,
  FaStar,
  FaBolt,
  FaMedal,
} from "react-icons/fa";

export default function Commitment() {
  return (
    <section className="commitment-section">
      <div className="commitment-wrapper">

        {/* Left content */}
        <div className="commitment-left">
          <h2>Our Commitment to Excellence</h2>

          <div className="commitment-item">
            <div className="icon-circle">
              <FaBullseye />
            </div>
            <p>
              <strong>Reliability:</strong> Consistent on-time delivery with 24/7
              operational support.
            </p>
          </div>

          <div className="commitment-item">
            <div className="icon-circle">
              <FaStar />
            </div>
            <p>
              <strong>Transparency:</strong> Real-time tracking and clear
              communication throughout the process.
            </p>
          </div>

          <div className="commitment-item">
            <div className="icon-circle">
              <FaBolt />
            </div>
            <p>
              <strong>Innovation:</strong> Leveraging technology for efficient
              and modern logistics solutions.
            </p>
          </div>
        </div>

        {/* Right card */}
        <div className="commitment-right">
          <h3>
            <FaMedal /> Why Choose SLS?
          </h3>

          <ul>
            <li>Comprehensive end-to-end logistics solutions</li>
            <li>Expert customs clearance and documentation</li>
            <li>Global network with local expertise</li>
            <li>Competitive pricing with premium service quality</li>
            <li>Dedicated customer support team</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
