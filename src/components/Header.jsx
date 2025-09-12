import { NavLink } from "react-router-dom";
import logo from "../assets/img/LOGO.png";
import "../styles/components/Header.scss";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" className="header__logo" />

      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;