import React from "react";
import "./HomeBlock_2.css";

import circle from "../../assets/cards/down.png";
import ellipse from "../../assets/cards/centerEllipse.png";
import leftCard from "../../assets/cards/leftCard.png";
import centerCard from "../../assets/cards/centerCard.png";
import rightCard from "../../assets/cards/rightCard.png";
import playBtn from "../../assets/cards/playButton.png";

import supportTeam from "../../assets/cards/supportTeam.png";

const HomeBlock_2 = () => {
  return (
    <>
      <div className="homeBlockTraf">
        <section className="blockTrafText">
          <h2 className="trafTitle">
            Запустите трафик{" "}
            <span className="highlight">
              {" "}
              без блокировок
              <br /> ограничений
            </span>{" "}
            на расход средств
          </h2>
          <span className="trafText">
            Агентские аккаунты adskill — единая точка входа <br />к источникам и
            уникальным инструментам, недоступным <br />
            на персональных аккаунтах.
          </span>
        </section>
        <img className="downCircle" src={circle} alt="" />{" "}
        {/*Не совсем понял что это. Кнопка для выпадающего контента cards? */}
        <section className="blockTrafCards">
          <div className="leftCards">
            <div className="topCard">
              <div className="cardsText">
                <h3 className="cardsTitle">
                  Партнерство <br />c площадками
                </h3>
                <span>
                  Прямой контакт с представителями <br />
                  Google, Bigo, TikTok и других <br />
                  площадок. Работа с поисковым, <br />
                  социальным, in-app трафиком
                </span>
              </div>
              <div className="leftCardsIcons">
                <img src={leftCard} alt="Значки месседжеров" />
              </div>
            </div>
            <div className="bottomCard">
              <div className="cardsText">
                <h3 className="cardsTitle">
                  Гибкость вывода <br />
                  средств
                </h3>
                <span>
                  Вывод средств в случае блокировки <br />
                  вашего аккаунта
                </span>
              </div>
            </div>
          </div>
          <div className="centerCards">
            <div className="topCard">
              <img className="ellipse" src={ellipse} alt="" />
              <div className="cardsTextCenter">
                <h3 className="cardsTitle">
                  Приоритетная <br />
                  модерация
                </h3>
                <span>
                  Проверка рекламных материалов <br />в 10 раз быстрее, чем{" "}
                  <br />
                  на персональном аккаунте
                </span>
              </div>
              <div className="centerCardsIcons">
                <img src={centerCard} alt="Телефон" />
              </div>
            </div>
            <div className="bottomCard">
              <div className="cardsText">
                <h3 className="cardsTitle">
                  Удобные <br />
                  платежи
                </h3>
                <span>
                  Оплата из любой страны: <br />
                  банковские карты, переводы <br />и другие способы
                </span>
              </div>
            </div>
          </div>
          <div className="rightCards">
            <div className="rightTopCard">
              <div className="cardsText">
                <h3 className="cardsTitle">
                  Более 100 <br />
                  ГЕО
                </h3>
                <span>
                  Расширенный список ГЕО, <br />
                  включая приватные
                </span>
              </div>
            </div>
            <div className="rightBottomCard">
              <div className="cardsText">
                <h3 className="cardsTitle">
                  Безлимитный <br />
                  спенд
                </h3>
                <span>
                  Отсутствие ограничений на расход <br />
                  бюджета и количество кампаний <br />
                  на разные ГЕО
                </span>
              </div>
              <div className="rightCardsIcons">
                <img src={rightCard} alt="Баланс" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="homeBlockSupport">
        <div className="blockSupportWrapper">
          <div className="suppTitle">
            <h5>
              Помощь и поддержка <br />
              экспертов в клике от вас
            </h5>
          </div>
          <div className="suppCards">
            <div className="suppCard">
              <div className="cardTextBlock">
                <span className="suppCardTitle">Support-команда</span>
                <span className="suppCardText">
                  Персональный менеджер и команда <br />
                  экспертов разрабатывают стратегии,
                  <br />
                  подбирают источники в соответствии <br />с вашим бизнесом и
                  целями.
                </span>
              </div>
              <div className="cardIconBlock">
                <img className="suppTeam" src={supportTeam} alt="" />
              </div>
            </div>
            <div className="suppCard cardBg">
              <div className="cardTextBlock">
                <span className="suppCardTitle">
                  Полное <br />
                  сопровождение
                </span>
                <span className="suppCardText">
                  Мы сопроводим вас на всех этапах — <br />
                  от модерации и технических настроек <br />
                  до анализа результатов.
                </span>
              </div>
            </div>
            <div className="suppVideoCard"> {/* Опять же, пока нет исходника видео, поставлю заглушку*/}
              <img className="playButton" src={playBtn} alt="" />
            </div> 
          </div>
          <div className="suppStart">
            <span className="suppStartText">
              Готовы масштабироваться с adskill?
            </span>
            <button className="suppStartButton">Начать работу</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlock_2;
