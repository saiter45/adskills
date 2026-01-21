import React from "react";
import Yandex from "../../assets/icons/Yandex.png";
import Moloco from "../../assets/icons/Moloco.png";
import VK from "../../assets/icons/VK.png";
import Telegram from "../../assets/icons/Telegram.png";
import Huawei from "../../assets/icons/Huawei.png";
import Mintegral from "../../assets/icons/Mintegral.png";
import Xiaomi from "../../assets/icons/Xiaomi.png";
import Bigo from "../../assets/icons/BIGO.png";

import "./HomeBlock_1.css";

const HomeBlock_1 = () => {
  return (
    <div className="homeBlock">
      <div className="homeBlockCenter">
        <h1 className="centerTitle">
          Стратегический партнер по запуску рекламных кампаний
        </h1>
        <p className="centerText">
          Агентские аккаунты рекламных платформ с премиальной поддержкой и
          комплексным сопровождением
        </p>
        <button className="centerButton">Начать работу</button>
      </div>
      <div className="homeBlockIcons">
        <div className="leftIcons">
          <img src={Yandex} alt="" className="leftYandex" />
          <img src={Moloco} alt="" className="leftMoloco" />
          <img src={VK} alt="" className="leftVK" />
          <img src={Telegram} alt="" className="leftTelegram" />
        </div>
        <div className="rightIcons">
          <img src={Huawei} alt="" className="rightHuawei" />
          <img src={Mintegral} alt="" className="rightMintegral" />
          <img src={Xiaomi} alt="" className="rightXiaomi" />
          <img src={Bigo} alt="" className="rightBigo" />
        </div>
      </div>
    </div>
  );
};

export default HomeBlock_1;
