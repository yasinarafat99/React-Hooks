import './Header.css'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header_fullwidth">
      <div className="header_container">
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div className="header">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {/* <NavLink to="/login">Login</NavLink> */}
            <NavLink to="/log">Login</NavLink>
            <NavLink to="/users">Users</NavLink>


          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
