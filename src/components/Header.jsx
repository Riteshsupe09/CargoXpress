import "../styles/header.css";

export default function Header() {
  return (
    <header className="top-bar">
      <p>Welcome to CargoXpress Services – Your Global Logistics Partner</p>

      <div className="social-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </header>
  );
}
