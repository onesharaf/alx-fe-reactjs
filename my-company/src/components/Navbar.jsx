import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#333', 
      color: '#fff', 
      padding: '10px', 
      display: 'flex', 
      justifyContent: 'center' 
    }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
        <li><Link style={{ color: '#fff', textDecoration: 'none' }} to="/">Home</Link></li>
        <li><Link style={{ color: '#fff', textDecoration: 'none' }} to="/about">About</Link></li>
        <li><Link style={{ color: '#fff', textDecoration: 'none' }} to="/services">Services</Link></li>
        <li><Link style={{ color: '#fff', textDecoration: 'none' }} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;