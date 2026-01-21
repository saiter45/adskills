import React from "react";
import langIcon from "../assets/langIcon.svg";

const LanguageChange = () => {
  return (
    <div className="lang">
        <a href="#" className="langItem">RU</a>
        <img src={langIcon} alt="" />
    </div>
  );
};

export default LanguageChange;
