import { Link } from "react-router-dom";

function Navbar() {
  return(
    <nav style={{ padding: '10px', backgroundColor: "black", display: "flex", justifyContent: "center" }}>
      <Link to="/" style={{ marginRight: '10px', color: "white" }}>Home</Link>
      <Link to="/about" style={{ marginRight: '10px', color: "white" }}>About</Link>
      <Link to="/services" style={{ marginRight: '10px', color: "white" }}>Services</Link>
      <Link to="/contact" style={{ marginRight: '10px', color: "white" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;