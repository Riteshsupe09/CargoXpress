
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <div className="contact-icon">
          <FaPhoneAlt />
        </div>
        <h1>
          Get in <span>Touch</span>
        </h1>
        <p>
          Ready to streamline your logistics? Contact us for reliable freight
          forwarding and custom clearance services with 24/7 support.
        </p>
      </div>

      {/* Content */}
      <div className="contact-grid">
        {/* Form */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <p>Fill out the form below and we'll get back to you within 24 hours.</p>

          <form>
            <div className="form-row">
              <input type="text" placeholder="Your Full Name *" />
              <input type="email" placeholder="Your Email Address *" />
            </div>

            <div className="form-row">
              <input type="tel" placeholder="Phone Number *" />
              <select>
                <option>Select Service *</option>
                <option>Freight Forwarding</option>
                <option>Customs Clearance</option>
                <option>Warehousing</option>
              </select>
            </div>

            <textarea placeholder="Your Message *"></textarea>

            <button type="submit">
              <FaPaperPlane /> Send Message →
            </button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="contact-info">
          <div className="info-card blue">
            <h3>Main Office</h3>
            <p>302, Sitaram Apt., Swadeshi Mill Road</p>
            <p>Sion, Chunabhatti, Mumbai - 400022</p>
          </div>

          <div className="info-card green">
            <h3>Phone Numbers</h3>
            <p>+91 9820063594</p>
            <p>+91 9819361952</p>
          </div>

          <div className="info-card purple">
            <h3>Email Address</h3>
            <p>lmpcs.cargoxpress@gmail.com</p>
          </div>

          <div className="info-card orange">
            <h3>Operating Hours</h3>
            <p>24/7 Operations</p>
            <p>365 Days a Year</p>
          </div>

          <div className="office-locations">
            <h3>Office Locations</h3>

            <div className="location">
              <FaMapMarkerAlt />
              <div>
                <strong>Air Cargo Complex</strong>
                <p>Port User Building: Air Cargo Complex</p>
                <small>19.0896° N, 72.8656° E</small>
              </div>
            </div>

            <div className="location">
              <FaMapMarkerAlt />
              <div>
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
