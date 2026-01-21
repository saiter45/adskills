import React from "react";
import logo from "../assets/Wordmark Main.svg";
import vector from "../assets/Vector.svg";
import { Link } from "react-router-dom";
import LanguageChange from "./LanguageChange";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbarPages">
        <Link to="/" className="navbarLogo">
          <img src={logo} alt="" />
        </Link>
        <Link to="/refsystem" className="navbarItem">
          <li>Реферальная программа</li>
        </Link>
        <Link to="/partner" className="navbarItem">
          <li>Партнеры</li>
        </Link>
        <Link to="/about" className="navbarItem">
          <li>О компании</li>
        </Link>
        <Link to="/academy" className="navbarItem">
          <li>Академия</li>
        </Link>
      </ul>
      <div className="navbarRight">
        <button className="navbarButton">
          Написать в Telegram <img src={vector} alt="" className="navbarImg" />
        </button>
        <LanguageChange />
      </div>
    </div>
  );
};

export default Navbar;
