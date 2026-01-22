import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.svg";
import blackLogo from "../assets/BlackLogo.svg";
import vector from "../assets/Vector.svg";
import langIcon from "../assets/langIcon.svg";
import { useLocation, Link } from "react-router-dom";
import LanguageChange from "./LanguageChange"; //Кнопка по смене языка пока не рабочая

const Navbar = () => {
  const location = useLocation();
  const [navClass, setNavClass] = useState("navbar-black");

  let currentLogo = logo;

  if (location.pathname === "/") {
    currentLogo = logo;
  } else {
    currentLogo = blackLogo;
  }

  useEffect(() => {
    if (location.pathname === "/") {
      setNavClass("navbar-black");
    } else {
      setNavClass("navbar-white");
    }
  }, [location]);

  return (
    <div className="navbar">
      <ul className="navbarPages">
        <Link to="/" className="navbarLogo">
          <img src={currentLogo} alt="" />
        </Link>
        <Link to="/refsystem" className={`navbarItem ${navClass}`}>
          <li>Реферальная программа</li>
        </Link>
        <Link to="/partner" className={`navbarItem ${navClass}`}>
          <li>Партнеры</li>
        </Link>
        <Link to="/about" className={`navbarItem ${navClass}`}>
          <li>О компании</li>
        </Link>
        <Link to="/academy" className={`navbarItem ${navClass}`}>
          <li>Академия</li>
        </Link>
      </ul>
      <div className="navbarRight">
        <button className="navbarButton">
          Написать в Telegram <img src={vector} alt="" className="navbarImg" />
        </button>
        <div className="lang">
          <a href="#" className={`langItem ${navClass}`}>
            RU
          </a>
          <img src={langIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
